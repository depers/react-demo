import type { User } from '@/types/api'
import { create } from 'zustand'

// 使用zustand进行状态管理
export const useStore = create<{
  // 声明需要管理的数据
  token: string
  userInfo: User.UserItem
  collapsed: boolean
  // eslint-disable-next-line no-unused-vars
  updateUserInfo: (userInfo: User.UserItem) => void
  // eslint-disable-next-line no-unused-vars
  updateToken: (token: string) => void
  updateCollapsed: () => void
}>(set => ({
  // 默认值的初始化
  token: '',
  userInfo: {
    _id: '',
    userId: 0,
    userName: '',
    userEmail: '',
    deptId: '',
    state: 0,
    mobile: '',
    job: '',
    role: 0,
    roleList: '',
    createId: 0,
    deptName: '',
    userImg: ''
  },
  collapsed: false,
  updateUserInfo: (userInfo: User.UserItem) => set({ userInfo }),
  updateToken: token => set({ token }),
  updateCollapsed: () =>
    set(state => {
      return {
        collapsed: !state.collapsed
      }
    })
}))
