import { Breadcrumb, Switch, Dropdown, type MenuProps } from 'antd'
import style from './index.module.less'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useStore } from '@/store'
import storage from '@/utils/storage'

const NavHeader = () => {
  const { userInfo, collapsed, updateCollapsed } = useStore()

  const breadList = [
    {
      title: '首页'
    },
    {
      title: '工作台'
    }
  ]

  const items: MenuProps['items'] = [
    {
      key: 'email',
      label: '邮箱：' + userInfo.userEmail
    },
    {
      key: 'logout',
      label: '退出'
    }
  ]

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'logout') {
      storage.remove('token')
      location.href = '/login?callback=' + encodeURIComponent(location.href)
    }
  }

  const toggleCollapsed = () => {
    updateCollapsed()
  }

  return (
    <div className={style.navHeader}>
      <div className={style.left}>
        <div onClick={toggleCollapsed}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</div>

        <Breadcrumb items={breadList} style={{ marginLeft: 10 }} />
      </div>
      <div className={style.right}>
        <Switch checkedChildren='暗黑' unCheckedChildren='默认' style={{ marginRight: 10 }} />
        <Dropdown menu={{ items, onClick }} trigger={['click']}>
          <span className={style.nickName}>{userInfo.userName}</span>
        </Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
