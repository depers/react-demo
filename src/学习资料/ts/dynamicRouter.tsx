import { createBrowserRouter, Outlet, useParams } from 'react-router-dom'
import App from './App'

function Order() {
  const params = useParams()
  return <h2>订单组件，订单id:{params.id}</h2>
}

function Goods() {
  const params = useParams()
  return (
    <div>
      <h2>商品组件</h2>
      <p>商品id:{params.goodsId}</p>
      <p>订单id:{params.orderId}</p>
    </div>
  )
}

function Goods2() {
  return (
    <div>
      <h2>商品主页</h2>
      <Outlet />
    </div>
  )
}
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/order/:id', //http://localhost:5173/app/order/123
      element: <Order />
    },
    {
      path: '/goods/:goodsId/order/:orderId', //http://localhost:5173/app/goods/123/order/321
      element: <Goods />
    },
    {
      path: '/goods', //http://localhost:5173/app/goods
      element: <Goods2 />,
      children: [
        {
          path: 'list', // http://localhost:5173/app/goods/list
          element: (
            <div>
              <p>商品一</p>
              <p>商品二</p>
            </div>
          )
        },
        {
          path: 'cart', //http://localhost:5173/app/goods/cart
          element: (
            <div>
              <p>苹果电脑：5999元</p>
              <p>小米电脑：2999元</p>
            </div>
          )
        }
      ]
    }
  ],
  {
    basename: '/app'
  }
)

export default router
