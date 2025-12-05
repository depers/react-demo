import type { User } from '@/types/api'
import resso from 'resso'
import { create } from 'zustand'

// 使用resso进行状态管理
const store = resso({
  token: '',
  userInfo: {
    userEmail: '',
    userName: ''
  },
  updateUserInfo(userInfo: User.UserItem) {
    store.userInfo = userInfo
  }
})

// 使用zustand进行状态管理
export const useUserInfoStore = create<{
  token: string
  userInfo: {
    userEmail: string
    userName: string
  }
  // eslint-disable-next-line no-unused-vars
  updateUserInfo: (userInfo: User.UserItem) => void
}>(set => ({
  token: '',
  userInfo: {
    userEmail: '',
    userName: ''
  },
  updateUserInfo: (userInfo: User.UserItem) => set({ userInfo })
}))

export default store
