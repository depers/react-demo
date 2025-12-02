import { Breadcrumb, Switch, Dropdown, type MenuProps } from 'antd'
import style from './index.module.less'
import { MenuFoldOutlined } from '@ant-design/icons'
import store from '@/store'
import storage from '@/utils/storage'

const NavHeader = () => {
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
      label: '邮箱：' + store.userInfo.userEmail
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

  return (
    <div className={style.navHeader}>
      <div className={style.left}>
        <MenuFoldOutlined />
        <Breadcrumb items={breadList} style={{ marginLeft: 10 }} />
      </div>
      <div className={style.right}>
        <Switch checkedChildren='暗黑' unCheckedChildren='默认' style={{ marginRight: 10 }} />
        <Dropdown menu={{ items, onClick }} trigger={['click']}>
          <span className={style.nickName}>{store.userInfo.userName}</span>
        </Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
