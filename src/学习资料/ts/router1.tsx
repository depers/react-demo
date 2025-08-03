import { Link, useRoutes } from 'react-router-dom'
import App from './App'

function ReactDemo() {
  return (
    <h2>
      欢迎学习React教程 <Link to='..'>Back</Link>
    </h2>
  )
}

function Vite() {
  return (
    <h2>
      欢迎学习Vite4.0知识 <Link to='..'>Back</Link>
    </h2>
  )
}

function NotFound() {
  return <h2>404，当前页面不存在</h2>
}

function BaseRouter() {
  const routes = useRoutes([
    {
      path: '/',
      element: <App />
    },
    {
      path: '/react',
      element: <ReactDemo />
    },
    {
      path: '/vite',
      element: <Vite />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return routes
}

export default BaseRouter
