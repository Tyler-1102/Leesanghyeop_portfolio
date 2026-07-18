import { access, mkdir, mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { spawn } from 'node:child_process'

const DEFAULT_URL = 'http://localhost:3000/print-ax'
const DEFAULT_OUTPUT = 'portfolio-ax.pdf'
const args = process.argv.slice(2)

if (args.includes('--help') || args.includes('-h')) {
  console.log(`Usage: npm run pdf:ax -- [url] [output]

Defaults:
  url     ${DEFAULT_URL}
  output  ${DEFAULT_OUTPUT}

Examples:
  npm run pdf:ax
  npm run pdf:ax -- http://localhost:3001/print-ax dist/portfolio.pdf

Environment:
  PDF_URL       Override the page URL.
  PDF_OUTPUT    Override the output path.
  CHROME_PATH   Use a specific Chromium-based browser for fallback export.`)
  process.exit(0)
}

const url = process.env.PDF_URL ?? args[0] ?? DEFAULT_URL
const output = path.resolve(process.env.PDF_OUTPUT ?? args[1] ?? DEFAULT_OUTPUT)
const port = new URL(url).port || '3000'
const root = process.cwd()

let startedServer = null
let chromeProfileDir = null

async function main() {
  if (!(await isReachable(url))) {
    startedServer = startDevServer(port)
    await waitForUrl(url, 90_000)
  }

  await mkdir(path.dirname(output), { recursive: true })

  if (await exportWithPlaywright(url, output)) {
    console.log(`PDF saved to ${output}`)
    return
  }

  await exportWithChrome(url, output)
  console.log(`PDF saved to ${output}`)
}

async function exportWithPlaywright(targetUrl, targetPath) {
  try {
    const { chromium } = await import('playwright')
    const browser = await chromium.launch()
    const page = await browser.newPage({ viewport: { width: 1240, height: 1754 } })

    await page.goto(targetUrl, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    await page.pdf({
      path: targetPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      tagged: true,
    })

    await browser.close()
    return true
  } catch (error) {
    if (error?.code !== 'ERR_MODULE_NOT_FOUND') {
      console.warn(`Playwright PDF export failed, falling back to Chrome: ${error.message}`)
    }

    return false
  }
}

async function exportWithChrome(targetUrl, targetPath) {
  const chromePath = await findChrome()
  chromeProfileDir = await mkdtemp(path.join(tmpdir(), 'ax-pdf-chrome-'))

  await run(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--disable-background-networking',
    '--disable-component-update',
    '--disable-crash-reporter',
    '--disable-default-apps',
    '--disable-sync',
    '--metrics-recording-only',
    '--no-default-browser-check',
    '--no-first-run',
    '--run-all-compositor-stages-before-draw',
    '--no-pdf-header-footer',
    '--print-to-pdf-no-header',
    '--force-color-profile=srgb',
    '--virtual-time-budget=5000',
    `--user-data-dir=${chromeProfileDir}`,
    `--print-to-pdf=${targetPath}`,
    targetUrl,
  ], { successPath: targetPath, timeoutMs: 30_000 })
}

async function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  ].filter(Boolean)

  for (const candidate of candidates) {
    try {
      await access(candidate)
      return candidate
    } catch {
      // Keep looking.
    }
  }

  throw new Error(
    'Chrome was not found. Install Playwright (`npm i -D playwright`) or set CHROME_PATH to a Chromium-based browser.',
  )
}

function startDevServer(targetPort) {
  const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  const child = spawn(npmCommand, ['run', 'dev', '--', '--port', targetPort], {
    cwd: root,
    env: { ...process.env, BROWSER: 'none' },
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  child.stdout.on('data', (chunk) => process.stdout.write(chunk))
  child.stderr.on('data', (chunk) => process.stderr.write(chunk))
  return child
}

async function waitForUrl(targetUrl, timeoutMs) {
  const startedAt = Date.now()

  while (Date.now() - startedAt < timeoutMs) {
    if (await isReachable(targetUrl)) return
    await sleep(500)
  }

  throw new Error(`Timed out waiting for ${targetUrl}. Try running \`npm run dev\` first.`)
}

async function isReachable(targetUrl) {
  try {
    const response = await fetch(targetUrl, { method: 'HEAD' })
    return response.ok || response.status === 405
  } catch {
    return false
  }
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    let stderr = ''
    const child = spawn(command, args, { stdio: ['ignore', 'ignore', 'pipe'] })
    const timer = options.timeoutMs
      ? setTimeout(async () => {
          child.kill('SIGTERM')

          if (options.successPath && (await exists(options.successPath))) {
            resolve()
            return
          }

          reject(new Error(`${command} timed out after ${options.timeoutMs}ms`))
        }, options.timeoutMs)
      : null

    child.stderr.on('data', (chunk) => {
      stderr += chunk
    })

    child.on('error', reject)
    child.on('exit', async (code) => {
      if (timer) clearTimeout(timer)

      if (code === 0) resolve()
      else if (options.successPath && (await exists(options.successPath))) resolve()
      else {
        const details = stderr.trim().split('\n').slice(-8).join('\n')
        reject(new Error(`${command} exited with code ${code}${details ? `\n${details}` : ''}`))
      }
    })
  })
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function exists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

async function cleanup() {
  if (startedServer) {
    startedServer.kill('SIGTERM')
  }

  if (chromeProfileDir) {
    await rm(chromeProfileDir, { force: true, recursive: true }).catch(() => {})
  }
}

process.on('SIGINT', async () => {
  await cleanup()
  process.exit(130)
})

process.on('SIGTERM', async () => {
  await cleanup()
  process.exit(143)
})

main()
  .catch((error) => {
    console.error(error.message)
    process.exitCode = 1
  })
  .finally(cleanup)
