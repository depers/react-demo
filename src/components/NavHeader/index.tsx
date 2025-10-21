import { Breadcrumb, Switch, Dropdown, type MenuProps } from 'antd'
import style from './index.module.less'
import { MenuFoldOutlined } from '@ant-design/icons'

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
      key: '1',
      label: 'depers@163.com'
    },
    {
      key: 2,
      label: '退出'
    }
  ]

  return (
    <div className={style.navHeader}>
      <div className={style.left}>
        <MenuFoldOutlined />
        <Breadcrumb items={breadList} style={{ marginLeft: 10 }} />
      </div>
      <div className={style.right}>
        <Switch checkedChildren='暗黑' unCheckedChildren='默认' style={{ marginRight: 10 }} />
        <Dropdown menu={{ items }} trigger={['click']}>
          <span className={style.nickName}>depers</span>
        </Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
