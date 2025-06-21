import { useEffect, useState } from 'react'

export function useWindowsSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const handleReSize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleReSize)
    return () => {
      window.removeEventListener('resize', handleReSize)
    }
  }, [])

  return size
}
