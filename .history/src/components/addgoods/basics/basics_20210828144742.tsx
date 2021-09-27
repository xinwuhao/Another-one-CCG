import React from 'react'
import { Form, Select, InputNumber, Switch, Radio, Slider, Button, Upload, Rate, Checkbox, Row, Col, } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Option } = Select;

const Dasics = () => {
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };
    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        // 基础
        <div>
            1151
        </div>
    )
}

export default Dasics
