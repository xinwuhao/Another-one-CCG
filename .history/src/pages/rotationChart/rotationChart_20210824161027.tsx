import React, { useState } from 'react'
import { Input, Modal, Button, Form, Upload } from 'antd';
import { AudioOutlined } from '@ant-design/icons';


let RotationChart = () => {
    // 输入框
    let { Search } = Input
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
    let normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
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
                        <Form name="validate_other">
                            <Form.Item
                                name="select"
                                hasFeedback
                                rules={[{ required: true, message: 'Please select your country!' }]}
                            >
                                <Form.Item
                                    name="upload"
                                    label="Upload"
                                    valuePropName="fileList"
                                    getValueFromEvent={normFile}
                                >
                                    <Upload name="logo" action="/upload.do" listType="picture">
                                        <div style={{ color: 'rgb(33,144,255)', cursor: 'pointer' }}>点击上传图片</div>
                                    </Upload>
                                </Form.Item>
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default RotationChart
