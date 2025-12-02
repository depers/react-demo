import type { User } from '@/types/api'
import resso from 'resso'

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

export default store
