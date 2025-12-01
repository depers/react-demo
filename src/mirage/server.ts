import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'dev' } = {}) {
  return createServer({
    environment,

    // 定义数据模型
    models: {
      user: Model
    },

    // 添加种子数据（可选）
    seeds(server) {
      server.create('user', {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com'
      })
    },

    // 定义路由
    routes() {
      this.namespace = 'api'

      // 用户相关路由
      this.get('/users', schema => {
        return schema.users.all()
      })

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
          role: 1,
          roleList: '1',
          createId: 0,
          deptName: '测试',
          userImg: 'http://1223'
        }
      }))

      // 允许所有未定义的路由通过（在开发中很有用）
      this.passthrough()
    }
  })
}
