import * as ReactDOM from 'react-dom/client'
import Loading from './loading'

let count = 0 // 如果一个页面请求多个接口，用该变量进行计数，保证只展示一个loading组件。隐藏的时候等所有请求结束后再移除。
export const showLoading = () => {
  if (count === 0) {
    const loading = document.createElement('div')
    loading.setAttribute('id', 'loading')
    ReactDOM.createRoot(loading).render(<Loading />)
  }
  count++
}

export const hideLoading = () => {
  if (count < 0) return
  count--
  if (count === 0) document.body.removeChild(document.getElementById('loading') as HTMLDivElement)
}
