import React from 'react'
import styles from './basics.less'
import { Form, Select, Switch, Button, Upload, Input } from 'antd';

let { Option } = Select;
const { TextArea } = Input;

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
                    name="name"
                    label="商品名称"
                    rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
                >
                    <Input />
                </Form.Item>
                {/* 下拉选择 */}
                <Form.Item
                    name="sort"
                    label="商品分类"
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
                    name="price"
                    label="商品原价"
                    rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
                >
                    <Input />
                </Form.Item>
                {/* 填入信息 */}
                <Form.Item
                    name="present_price"
                    label="商品现价"
                    rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
                >
                    <Input />
                </Form.Item>
                {/* 上传图片 */}
                <Form.Item
                    name="cover"
                    label="封面图"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <div className={`${styles.upimg}`}>上传图片</div>
                    </Upload>
                </Form.Item>
                {/* 填入信息 */}
                <Form.Item
                    name="unit"
                    label="商品单位"
                    rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
                >
                    <Input />
                </Form.Item>
                {/* 填入信息 */}
                <Form.Item
                    name="stock"
                    label="商品库存"
                    rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="synopsis"
                    label="商品简介"
                    rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
                >
                    <TextArea rows={3} />
                </Form.Item>
                <Form.Item
                    name="introduce"
                    label="推荐介绍"
                    rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
                >
                    <TextArea rows={4} />
                </Form.Item>
                {/* 开关 */}
                <Form.Item name="fresh" label="是否新品" valuePropName="checked">
                    <Switch />
                </Form.Item>
                {/* 开关 */}
                <Form.Item name="fiery" label="是否热销" valuePropName="checked1">
                    <Switch />
                </Form.Item>
                {/* 开关 */}
                <Form.Item name="recommend" label="是否推荐 " valuePropName="checked2">
                    <Switch />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 2 }}>
                    <Button style={{ marginRight: 10 }}>取消</Button>
                    <Button type="primary" htmlType="submit">确定</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Dasics
