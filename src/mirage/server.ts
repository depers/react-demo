import { createServer } from 'miragejs'

export function makeServer({ environment = 'dev' } = {}) {
  return createServer({
    environment,

    // 定义路由
    routes() {
      this.namespace = 'api'

      // 用户登录
      this.post('/users/login', () => ({
        code: 0,
        msg: '请求成功',
        data: 'token123'
      }))

      // 获取用户信息
      this.get('/users/getUserInfo', () => ({
        code: 0,
        msg: '请求成功',
        data: {
          _id: '123',
          userId: 1,
          userName: '冯晓',
          userEmail: 'dev_fengxiao@163.com',
          deptId: '123',
          state: 1,
          mobile: '12909010202',
          job: '前端工程师',
          role: 1,
          roleList: '1',
          createId: 0,
          deptName: '测试',
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      }))

      // 获取看板报告信息
      this.get('/order/dashboard/getReportData', () => ({
        code: 0,
        msg: '请求成功',
        data: {
          driverCount: 1000,
          totalMoney: 23487392.29,
          orderCount: 58329301,
          cityCount: 34
        }
      }))

      // 允许所有未定义的路由通过（在开发中很有用）
      this.passthrough()
    }
  })
}
