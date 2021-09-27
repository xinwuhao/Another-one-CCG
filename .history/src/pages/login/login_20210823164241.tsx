import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <div style={{ textAlign: 'center', fontSize: '20px' }}>小米Lite</div>
                        <div style={{ margin: '20px 0px', textAlign: 'center' }}>欢迎来到小米lite后台管理系统</div>
                    </div>
                </div>
                <div style={{ width: '400px' }}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入您的用户名！' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入您的密码！' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="请输入密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                            </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login
