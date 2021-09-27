import React, { useState } from 'react'
import { Input, Form, Modal, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';


let RotationChart = () => {
    // 输入框
    let { Search } = Input;
    let suffix = (<AudioOutlined style={{ fontSize: 16, color: '#1890ff', }} />);
    let onSearch = (value: any) => { console.log(value) };//输入框的值
    // 添加
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    //确定
    const handleOk = () => {
        setIsModalVisible(false);
    };
    //取消
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <div>
                {/* 输入框 */}
                <Search placeholder="请输入关键词" allowClear onSearch={onSearch} style={{ width: 200 }} />
                {/* 弹出框 */}
                <Button type="primary" onClick={showModal}>添加轮播图</Button>
                <Modal
                    title="添加轮播图"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="确认"
                    cancelText="取消">
                    <div>
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
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default RotationChart
