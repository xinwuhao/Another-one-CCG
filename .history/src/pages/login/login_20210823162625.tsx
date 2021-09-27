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
        <div>
            
        </div>
    )
}

export default Login
