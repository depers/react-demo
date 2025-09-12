import request from '@/utils/request'
import type { Login } from '@/types/api'

export default {
  // 登录
  login(params: Login.params) {
    return request.post<string>('/users/login', params, { showLoading: false, showError: false })
  }
}
