import storage from '@/utils/storage'
import { Button } from 'antd'

export default function Welcome() {
  const handleStorage = (type: number) => {
    if (type === 1) {
      storage.set('age', 28)
      storage.set('user', { name: 'xiaoming', age: 18 })
    }
    if (type === 2) {
      console.log(storage.get('age'))
      console.log(storage.get('user'))
    }
    if (type === 3) {
      storage.remove('age')
    }
    if (type === 4) {
      storage.clear()
    }
  }
  return (
    <div>
      <div>Welcome</div>
      <Button onClick={() => handleStorage(1)}>写入值</Button>
      <Button onClick={() => handleStorage(2)}>读取值</Button>
      <Button onClick={() => handleStorage(3)}>删除值</Button>
      <Button onClick={() => handleStorage(4)}>清空值</Button>
    </div>
  )
}
