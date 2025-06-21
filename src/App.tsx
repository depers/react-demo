import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useWindowsSize } from './useWindowSize'

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [timeCount, setTimeCount] = useState(0)

  // 渲染时更新标题
  useEffect(() => {
    document.title = 'React学习'
  })

  // 渲染后更新count值
  useEffect(() => {
    setCount(count + 1)
  }, []) // 这里如果不写空数组，会一直递增变成死循环

  // 监听count发生变化的时候更新相关值
  useEffect(() => {
    setTotal(count * 5)
  }, [count])

  // 点击事件
  const handleCount = () => {
    setCount(count => count + 1)
  }

  // 定时器
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeCount(timeCount => timeCount + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const size = useWindowsSize()

  return (
    <>
      <h1>useEffect的使用</h1>
      <p>
        Count: {count}, Total: {total}
      </p>
      <button onClick={handleCount}>修改count</button>
      <p>timeCount: {timeCount}</p>
      <p>
        window width: {size.width}, window height: {size.height}
      </p>
    </>
  )
}

export default App
