import request from '@/utils/request'
import { Button, Form, Input } from 'antd'
import styles from './index.module.less'

export default function Login() {
  const onFinish = () => {}

  const onFinishFailed = () => {}
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>系统登录</div>
        <Form
          name='basic'
          labelCol={{ span: 4 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='用户名'
            labelAlign='right'
            name='username'
            rules={[{ required: true, message: '请输入你的用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='密码'
            labelAlign='right'
            name='password'
            rules={[{ required: true, message: '请输入你的密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button block type='primary' htmlType='submit'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
