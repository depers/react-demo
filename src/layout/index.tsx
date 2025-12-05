import React, { useEffect } from 'react'
import { Layout, Watermark } from 'antd'
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import Menu from '@/components/Menu'
import { Outlet } from 'react-router-dom'
import styles from './index.module.less'
import api from '@/api'
import { useUserInfoStore } from '@/store'

const { Content, Sider } = Layout

const App: React.FC = () => {
  const state = useUserInfoStore()
  useEffect(() => {
    getUserInfo()
  }, [])

  const getUserInfo = async () => {
    const data = await api.getUserInfo()
    state.updateUserInfo(data)
  }

  return (
    <Watermark content='depers'>
      <Layout>
        <Sider>
          <Menu />
        </Sider>
        <Layout>
          <NavHeader />
          <Content className={styles.content}>
            <div className={styles.wrapper}>
              <Outlet></Outlet>
            </div>
            <NavFooter />
          </Content>
        </Layout>
      </Layout>
    </Watermark>
  )
}

export default App
