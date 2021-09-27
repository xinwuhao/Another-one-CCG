import React from 'react'
import styles from './basics.less'
import { Form, Select, Switch, Radio, Button, Upload, Rate, Checkbox, Row, Col, } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

let { Option } = Select;

let Dasics = () => {
    let normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    let onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        // 基础
        <div>
            <Form
                name="validate_other"
                onFinish={onFinish}
                initialValues={{
                    'input-number': 3,
                    'checkbox-group': ['A', 'B'],
                    rate: 3.5,
                }}
            >
                <Form.Item
                    name="select"
                    label="Select"
                    hasFeedback
                    rules={[{ required: true, message: 'Please select your country!' }]}
                >
                    <Select placeholder="Please select a country">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="select-multiple"
                    label="Select[multiple]"
                    rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
                >
                    <Select mode="multiple" placeholder="Please select favourite colors">
                        <Option value="red">Red</Option>
                        <Option value="green">Green</Option>
                        <Option value="blue">Blue</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="switch" label="Switch" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <div className={`${styles.upimg}`}>上传图片</div>
                    </Upload>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Dasics
