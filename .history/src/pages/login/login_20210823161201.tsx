import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';


const Demo = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const Login = () => {
        return (
            <div>
                登录
            </div>
        )
    }

    export default Login
