import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Input, Modal, Button, Form, Upload, Table, Space, Switch, Image } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Column, ColumnGroup } = Table

let RotationChart = () => {
    let topics = useSelector((state: any) => state.addBanner.topics)
    let dispatch = useDispatch()
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
    let [url, setUrl] = useState<string>('')
    let [url1, setUrl1] = useState<string>('')
    //上传图片
    let handleChange = (fileList: any) => {
        // console.log(fileList.file.response);
        if (fileList.file.response) {
            url1 = fileList.file.response.data
            setUrl1(url1)
        }
        // console.log(url1);
    }
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
    //确定 并发出请求
    const handleOk = () => {
        setIsModalVisible(false);
        // setFieldsValue
        const values = form.getFieldsValue();
        // console.log(values);
        dispatch(({
            type: 'addBanner/addBanner',
            payload: {
                url: url1,
                title: values.title,
                link: values.link
            }
        }))
    };
    //取消
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [form] = Form.useForm();
    //获取展示数据
    let [pageSize, setPageSize] = useState<number>(5)
    let [query, setQuery] = useState<string>('')
    let [current, setCurrent] = useState<number>(1)
    let obtain = () => {
        dispatch(({
            type: 'addBanner/getBanner',
            payload: {
                current: current,
                pageSize: pageSize,
                query: query
            }
        }))
    }
    //表格
    let onChange = (checked: any) => {
        console.log(checked);
    }
    let [data, setData] = useState<any>([])
    //进入执行
    useEffect(() => {
        obtain()
    }, [])
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
                        <Form name="validate_other" onFinish={handleOk} form={form}>
                            <Form.Item
                                name="upload"
                                label="上传图片"
                                valuePropName="fileList"
                            >
                                <Upload
                                    name="logo"
                                    action="http://localhost:7001/admin/upload"
                                    listType="picture"
                                    headers={{ Authorization: localStorage.getItem('token')! }}
                                    onPreview={onPreview}
                                    onChange={handleChange}>
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
            <div>
                <Table dataSource={topics.data.length&& topics.data}>
                    <Column
                        title="图片"
                        dataIndex="link"
                        key="link"
                        render={(text, record) => (
                            <Space size="middle">
                                <Image
                                    width={80}
                                    height={50}
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                />
                            </Space>
                        )}
                    />
                    <Column title="路径" dataIndex="url" key="url" />
                    <Column title="标题" dataIndex="title" key="title" />
                    <Column title="链接" dataIndex="link" key="link" />
                    <Column
                        title="是否显示"
                        dataIndex="isShow"
                        key="isShow"
                        render={(text, record) => (
                            <Space size="middle">
                                <Switch defaultChecked onChange={onChange} />
                            </Space>
                        )}
                    />
                    <Column
                        title="操作"
                        key="action"
                        render={(text, record) => (
                            <Space size="middle">
                                <Button type="primary">编辑</Button>
                                <Button type="primary" danger>删除</Button>
                            </Space>
                        )}
                    />
                </Table>,

            </div>
        </div>
    )
}

export default RotationChart
