import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'dev' } = {}) {
  return createServer({
    environment,

    models: {
      user: Model
    },

    seeds(server) {
      server.create('user', {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com'
      })
    },

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

      // 允许所有未定义的路由通过（在开发中很有用）
      this.passthrough()
    }
  })
}
