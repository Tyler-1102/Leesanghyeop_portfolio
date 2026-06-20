// friends
export const friendsHeadLine = 'Connections'
export const friendsIntro =
  '이 페이지는 현재 공개 내비게이션에서 사용하지 않습니다.'

// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string; label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = []
