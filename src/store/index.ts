import type { User } from '@/types/api'
import { create } from 'zustand'

// 使用zustand进行状态管理
export const useUserInfoStore = create<{
  token: string
  userInfo: {
    userEmail: string
    userName: string
  }
  // eslint-disable-next-line no-unused-vars
  updateUserInfo: (userInfo: User.UserItem) => void
  // eslint-disable-next-line no-unused-vars
  updateToken: (token: string) => void
}>(set => ({
  token: '',
  userInfo: {
    userEmail: '',
    userName: ''
  },
  updateUserInfo: (userInfo: User.UserItem) => set({ userInfo }),
  updateToken: token => set({ token })
}))
