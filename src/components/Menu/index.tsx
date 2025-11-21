import { Menu } from 'antd'
import styles from './index.module.less'
import { DesktopOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons'

const SideMenu = () => {
  const items = [
    {
      label: '工作台',
      key: '1',
      icon: <DesktopOutlined />
    },
    {
      label: '系统管理',
      key: '2',
      icon: <SettingOutlined />,
      children: [
        {
          label: '用户管理',
          key: '3',
          icon: <TeamOutlined />
        }
      ]
    }
  ]
  return (
    <div>
      <div className={styles.logo}>
        <img src='/imgs/logo.png' className={styles.img} />
        <span>慕慕货运</span>
      </div>
      <Menu defaultSelectedKeys={['1']} mode='inline' theme='dark' items={items} />
    </div>
  )
}

export default SideMenu
