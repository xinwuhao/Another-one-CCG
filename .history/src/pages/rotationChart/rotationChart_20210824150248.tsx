import React, { useState } from 'react'
import { Input, Space, Modal, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';


let RotationChart = () => {
    // 输入框
    let { Search } = Input;
    let suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    let onSearch = (value: any) => {
        console.log(value)
    };
    // 添加
    let [isModalVisible, setIsModalVisible] = useState(false);
    let showModal = () => {
        setIsModalVisible(true);
    };
    let handleOk = () => {
        setIsModalVisible(false);
    };
    let handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <div>
                <Search placeholder="请输入关键词" allowClear onSearch={onSearch} style={{ width: 200 }} />
            </div>
            <div>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        </div>
    )
}

export default RotationChart
