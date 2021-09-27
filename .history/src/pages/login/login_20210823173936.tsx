import React from 'react'
import {useSelector, useDispatch} from 'umi'

import { UserOutlined, LockOutlined } from '@ant-design/icons';


const login = () => {
    // let dispatch = useDispatch()
    
    const onFinish = (values: any) => {
        console.log('Success:', values);
        // dispatch(login({
        //     username: values.username,
        //     password: values.password
        // }))
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
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
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
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="请输入密码"
                            />
                        </Form.Item>
                        <Form.Item>
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

export default login
