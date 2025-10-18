import { Breadcrumb, Switch, Dropdown, type MenuProps } from 'antd'
import style from './index.module.less'
import { MenuFoldOutlined } from '@ant-design/icons'
import { title } from 'process'

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
      label: 'depers'
    }
  ]

  return (
    <div className='style.navHeader'>
      <div className='style.left'>
        <MenuFoldOutlined />
        <Breadcrumb items={breadList} />
      </div>
      <div className='style.right'>
        <Switch checkedChildren='暗黑' unCheckedChildren='默认' />
        <Dropdown menu={{ items }}></Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
