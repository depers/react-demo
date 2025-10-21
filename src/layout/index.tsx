import React, { useEffect } from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu, theme, Watermark } from 'antd'
import NavHeader from '@/components/NavHeader'

const { Header, Content, Footer, Sider } = Layout

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`
}))

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  useEffect(() => {
    const target = document.getElementById('content') as HTMLDialogElement
    const observer = new MutationObserver((mutationsList, observer) => {
      console.log(mutationsList, observer)
      console.log('发生了变化。。。。')
      observer.disconnect()
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const span = document.createElement('span')
          span.innerText = 'hello react'
          target.appendChild(span)
          observer.observe(target, config)
        }
      }
    })

    const config = {
      attributes: true,
      childList: true,
      subtree: true
    }

    observer.observe(target, config)
  }, [])

  return (
    <Watermark content='depers'>
      <Layout>
        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={broken => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          <div className='demo-logo-vertical' />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout>
          <NavHeader />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG
              }}
              id='content'
            >
              <span>content</span>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Watermark>
  )
}

export default App
