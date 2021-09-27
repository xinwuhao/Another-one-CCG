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

    //上传图片
    let [previewVisible, setpreviewVisible] = useState<boolean>(false)
    let [name, setName] = useState<string>('')
    let [url, setUrl] = useState<string>(``)
    //上传图片
    let normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    //预览图片弹出层关闭
    let handleCancel1 = () => {
        setpreviewVisible(!previewVisible)
    }
    //预览图片
    let onPreview = async (file: any) => {
        setpreviewVisible(!previewVisible);
        setName(file.name)
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        setUrl(src)
    }
    //确定
    const handleOk = (values: any) => {
        console.log('Received values of form: ', values);
        setIsModalVisible(false);
    };
    //取消
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div style={{ backgroundColor: '#fff', width: '100%', height: '100%', padding: 20 }}>
            <div>
                {/* 输入框 */}
                <Search placeholder="请输入关键词" allowClear onSearch={onSearch} style={{ width: 200 }} />
                {/* 弹出框 */}
                <Button type="primary" onClick={showModal} style={{ marginLeft: 10 }}>添加轮播图</Button>
                <Modal
                    title="添加轮播图"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="确认"
                    cancelText="取消">
                    <div>
                        <Form name="validate_other" onFinish={handleOk}>
                            <Form.Item
                                name="upload"
                                label="上传图片"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                            >
                                <Upload name="logo" action="/upload.do" listType="picture" onPreview={onPreview}>
                                    <div style={{ color: 'rgb(33,144,255)', cursor: 'pointer' }}>点击上传图片</div>
                                </Upload>
                                <Modal
                                    visible={previewVisible}//开关
                                    title={name}//图片名称
                                    footer={null}
                                    onCancel={handleCancel1}//关闭
                                >
                                    <img alt="example" style={{ width: '100%' }} src={url} />
                                </Modal>
                            </Form.Item>
                            <Form.Item
                                name="title"
                                label="图片标题">
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="link"
                                label="图片链接">
                                <Input />
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default RotationChart
