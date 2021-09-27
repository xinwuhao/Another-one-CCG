import React, { useState } from 'react'
import { Input, Modal, Button } from 'antd';
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
    const handleOk = (value: any) => {
        console.log(value);
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
                        <Search placeholder="input search text" allowClear onSearch={handleOk} style={{ width: 200 }} />
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default RotationChart
