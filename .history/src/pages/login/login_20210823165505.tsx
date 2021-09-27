import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';


const Login = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <div style={{ textAlign: 'center', fontSize: '25px', fontWeight: 700 }}>小米Lite</div>
                        <div style={{ margin: '20px 0px', textAlign: 'center', color: '#C0C0C0 ' }}>欢迎来到小米lite后台管理系统</div>
                    </div>
                </div>
                <div style={{ width: '400px' }}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: '请输入您的用户名！' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: '请输入您的密码！' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" block>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login
