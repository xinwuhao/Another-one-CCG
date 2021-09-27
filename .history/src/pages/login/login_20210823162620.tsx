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
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignContent: 'center'}}>
            
        </div>
    )
}

export default Login
