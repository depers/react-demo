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

      // 获取折线图数据
      this.get('/order/dashboard/getLineData', () => ({
        code: 0,
        msg: '请求成功',
        data: {
          label: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          order: [150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135],
          money: [250, 330, 324, 318, 235, 247, 360, 250, 330, 324, 318, 235]
        }
      }))

      // 获取饼图1数据
      this.get('/order/dashboard/getPieCityData', () => ({
        code: 0,
        msg: '请求成功',
        data: [
          { value: 1048, name: '北京' },
          { value: 735, name: '上海' },
          { value: 580, name: '广州' },
          { value: 484, name: '武汉' },
          { value: 300, name: '杭州' }
        ]
      }))

      // 获取饼图2数据
      this.get('/order/dashboard/getPieAgeData', () => ({
        code: 0,
        msg: '请求成功',
        data: [
          { value: 1048, name: '北京' },
          { value: 735, name: '上海' },
          { value: 580, name: '广州' },
          { value: 484, name: '武汉' },
          { value: 300, name: '杭州' }
        ]
      }))

      // 获取雷达图数据
      this.get('/order/dashboard/getRadarData', () => ({
        code: 0,
        msg: '请求成功',
        data: {
          indicator: [
            { name: '服务态度' },
            { name: '在线时长' },
            { name: '接单率' },
            { name: '评分' },
            { name: '关注度' }
          ],
          data: [
            {
              value: [4200, 3000, 20000, 35000, 40000],
              name: '司机模型诊断'
            }
          ]
        }
      }))

      // 允许所有未定义的路由通过（在开发中很有用）
      this.passthrough()
    }
  })
}
