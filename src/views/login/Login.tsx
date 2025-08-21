import request from "@/utils/request";
import { Button, Form, Input } from "antd";
import "./index.less";

export default function Login() {
  const onFinish = () => {};

  const onFinishFailed = () => {};
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="title">系统登录</div>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            labelAlign="right"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            labelAlign="right"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
