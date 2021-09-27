import React from 'react'
import styles from './basics.less'
import { Form, Select, Switch, Button, Upload, Input } from 'antd';

let { Option } = Select;

let Dasics = () => {
    let formItemLayout = {
        labelCol: { span: 2 }
    };
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
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    'input-number': 3,
                    'checkbox-group': ['A', 'B'],
                    rate: 3.5,
                }}
            >
                {/* 填入信息 */}
                <Form.Item
                    name="select-multiple"
                    label="Select[multiple]"
                    rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
                >
                    <Input />
                </Form.Item>
                {/* 下拉选择 */}
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
                {/* 填入信息 */}
                <Form.Item
                    name="select-multiple"
                    label="Select[multiple]"
                    rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
                >
                    <Input />
                </Form.Item>
                {/* 开关 */}
                <Form.Item name="switch" label="Switch" valuePropName="checked">
                    <Switch />
                </Form.Item>
                {/* 上传图片 */}
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
                <Form.Item wrapperCol={{ offset: 2 }}>
                    <Button style={{ marginRight: 10 }}>取消</Button>
                    <Button type="primary" htmlType="submit">
                        确定
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Dasics
