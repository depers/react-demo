import * as ReactDOM from 'react-dom/client'
import Loading from './loading'

let count = 0 // 如果一个页面请求多个接口，用该变量进行计数，保证只展示一个loading组件。隐藏的时候等所有请求结束后再移除。
export const showLoading = () => {
  if (count === 0) {
    const loading = document.createElement('div') // 创建dom节点
    loading.setAttribute('id', 'loading') // 设置属性
    document.body.appendChild(loading) // 先插入到 DOM
    ReactDOM.createRoot(loading).render(<Loading />) // 渲染react组件
  }
  count++
}

export const hideLoading = () => {
  if (count < 0) return
  count--
  if (count === 0) {
    const element = document.getElementById('loading') as HTMLDivElement
    if (element) {
      document.body.removeChild(element)
    }
  }
}
