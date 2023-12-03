import React from 'react';
import { Button, Form, Input } from 'antd';
import logo from "../../images/evalu-logo-1.jpg"

const Login = () => {
  const onFinish = (values) => {
    console.log(values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
  <div style={{backgroundColor: "#F4FCFC", display:"flex", alignItems:"center", height: "100vh"}}>
    <div style={{margin:"auto"}}>
      <img src={logo} alt="" width="300px"/>
      <Form
        name="basic"
        size="large"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" style={{backgroundColor:"#38507F", width:"100%"}}>
          <a href="/eval-hub/dashboard">Submit</a>
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
)};
export default Login;