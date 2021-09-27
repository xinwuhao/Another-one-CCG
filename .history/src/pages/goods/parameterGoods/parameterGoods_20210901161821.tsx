import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Input, Modal, Button, Form, Upload, Table, Space, Switch, Image } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Column, ColumnGroup } = Table
const parameterGoods = () => {
    let list = useSelector((state: any) => state.data.topics)
    let dispatch = useDispatch()
    let [estimate, setestimate] = useState<number>(0)//判断添加？编辑？

    let { Search } = Input
    let suffix = (<AudioOutlined style={{ fontSize: 16, color: '#1890ff', }} />);
    // 输入框方法
    let onSearch = (value: any) => {
        // console.log(value);
        dispatch(({
            type: 'data/getNav',
            payload: {
                current: current,
                pageSize: pageSize,
                query: value
            }
        }))
    };//输入框的值
    //添加
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
        setestimate(1)
    };
    //上传图片
    let [previewVisible, setpreviewVisible] = useState<boolean>(false)
    let [name, setName] = useState<string>('')
    let [url, setUrl] = useState<string>('')
    let [url1, setUrl1] = useState<string>('')
    let [id, setId] = useState<string>('')
    //上传图片方法
    let handleChange = (fileList: any) => {
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
    let [img, setImg] = useState<string>('')
    //编辑
    let btn = (item: any) => {
        setIsModalVisible(true);
        setestimate(2)
        setId(item._id)
        setImg(item.url)
    }
    //确定 并发出请求
    const handleOk = () => {
        setIsModalVisible(false);
        // setFieldsValue
        const values = form.getFieldsValue();
        // console.log(values);
        if (estimate == 1) {
            //添加
            console.log(url1);
            dispatch(({
                type: 'data/addNav',
                payload: {
                    url: url1,
                    title: values.title,
                    link: values.link
                }
            }))
            obtain()
        } else {
            //编辑
            if (url1 == '') {
                url1 = img
                setUrl1(url1)
            }
            dispatch(({
                type: 'data/updateNav',
                payload: {
                    url: url1,
                    title: values.title,
                    link: values.link,
                    id: id
                }
            }))
            setImg('')
            obtain()
        }
    }
    //取消
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [form] = Form.useForm();
    let [pageSize, setPageSize] = useState<number>(10)
    let [query, setQuery] = useState<string>('')
    let [current, setCurrent] = useState<number>(1)
    //获取展示数据
    let obtain = () => {
        dispatch(({
            type: 'data/getNav',
            payload: {
                current: current,
                pageSize: pageSize,
                query: query
            }
        }))
    }
    // 删除
    let reduce = (e: any) => {
        console.log(e);
        dispatch(({
            type: 'data/delNav',
            payload: e
        }))
        obtain()
    }
    //显示隐藏
    let Change = (item: any) => {
        console.log(item);
    }
    //进入执行
    useEffect(() => {
        obtain()
    }, [])
    return (
        <div>
            <div style={{ backgroundColor: '#fff', width: '100%', height: '100%', padding: 20 }}>
                <div>
                    {/* 输入框 */}
                    <Search placeholder="请输入关键词" allowClear onSearch={onSearch} style={{ width: 200 }} />
                    {/* 弹出框 */}
                    <Button type="primary" onClick={showModal} style={{ marginLeft: 10 }}>添加导航</Button>
                    <Modal
                        title="添加导航"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okText="确认"
                        cancelText="取消"
                        destroyOnClose={true}>
                        <div>
                            <Form name="validate_other" onFinish={handleOk} form={form} preserve={false}>
                                <Form.Item
                                    name="upload"
                                    label="图片地址"
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
                                        <div >{estimate == 2 && url1 == '' ? <img src={`${img}`} style={{ height: 80, width: 80 }} /> : <div></div>}</div>
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
                                    label="导航标题">
                                    <Input />
                                </Form.Item>
                            </Form>
                        </div>
                    </Modal>
                </div>
                <div>
                    <Table dataSource={list.data} rowKey='_id'>
                        <Column
                            title="图片"
                            dataIndex="url"
                            key="url"
                            render={(text: any, record: any) => (
                                <Image
                                    width={80}
                                    height={80}
                                    src={record.url}
                                />
                            )}
                        />
                        <Column title="路径" dataIndex="url" key="url"
                            render={(text, record: any) => (
                                <div style={{ width: 200, overflow: 'hidden', whiteSpace: 'nowrap' }}>{record.url}</div>
                            )} />
                        <Column title="标题" dataIndex="title" key="title" />
                        <Column
                            title="是否显示"
                            dataIndex="isShow"
                            key="isShow"
                            render={(text, record: any) => (
                                <Switch defaultChecked={record.isShow} onChange={() => { Change(record) }} />
                            )}
                        />
                        <Column
                            title="操作"
                            key="action"
                            render={(text, record: any) => (
                                <Space size="middle">
                                    <Button type="primary" onClick={() => { btn(record) }}>编辑</Button>
                                    <Button type="primary" danger onClick={() => { reduce(record._id) }}>删除</Button>
                                </Space>
                            )}
                        />
                    </Table>,
            </div>
            </div>
        </div>
    )
}

export default parameterGoods
