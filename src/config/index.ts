/**
 * 环境配置封装
 */

type ENV = 'dev' | 'stg' | 'prd'

const env = (document.documentElement.dataset.env as ENV) || 'dev'

const config = {
  dev: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-dev.marsview.cc',
    cdn: 'https://www.aliyun.com',
    mock: false,
    mockApi: 'https://www.fastmock.site/mock/96a623a782b506b93d87eac860894785/api'
  },
  stg: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-dev.marsview.cc',
    cdn: 'https://www.aliyun.com',
    mock: false,
    mockApi: 'https://www.fastmock.site/mock/96a623a782b506b93d87eac860894785/api'
  },
  prd: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-dev.marsview.cc',
    cdn: 'https://www.aliyun.com',
    mock: false,
    mockApi: 'https://www.fastmock.site/mock/96a623a782b506b93d87eac860894785/api'
  }
}

export default {
  env,
  ...config[env]
}
