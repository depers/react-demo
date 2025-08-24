import { Button, Form, Input, message } from "antd";
import styles from "./index.module.less";
import type { Login } from "@/types/api";
import api from "@/api";
import storage from "@/utils/storage";

export default function LoginFC() {
  const onFinish = async (values: Login.params) => {
    const data = await api.login(values);
    storage.set("token", data);
    message.success("登录成功");
    const params = new URLSearchParams(location.search);
    location.href = params.get("callback") || "/welcome";
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>系统登录</div>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            labelAlign="right"
            name="username"
            rules={[{ required: true, message: "请输入你的用户名!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            labelAlign="right"
            name="password"
            rules={[{ required: true, message: "请输入你的密码!" }]}
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
