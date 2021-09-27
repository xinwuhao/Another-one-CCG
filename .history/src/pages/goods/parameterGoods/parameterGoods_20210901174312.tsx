import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Input, Modal, Button, Form, Upload, Table, Space, Select, Image } from 'antd';

const { Column } = Table
const { Option } = Select;
let { Search } = Input

const parameterGoods = () => {
    let list = useSelector((state: any) => state.parameter.topics)
    let dispatch = useDispatch()
    let [estimate, setestimate] = useState<number>(0)//判断添加？编辑？
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
        id = item._id
        setId(id)
        img = item.url
        setImg(img)
    }
    //添加
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
        setestimate(1)
    };
    let [secondary, setSecondary] = useState<string>('')
    let onChange = (item: any) => {
        console.log(item);
        secondary = item
        setSecondary(secondary)
        dispatch(({
            type: 'parameter/getParams',
            payload: { parentId: item }
        }))
    }
    let obtain = () => {
        dispatch(({
            type: 'parameter/getParams',
            payload: { parentId: secondary }
        }))
    }
    //确定 并发出请求
    const handleOk = () => {
        setIsModalVisible(false);
        // setFieldsValue
        const values = form.getFieldsValue();
        console.log(values);
        if (secondary) {
            if (estimate == 1) {
                //添加
                dispatch(({
                    type: 'parameter/addParams',
                    payload: {
                        url: url1,
                        name: values.name,
                        desc: values.desc,
                        parentId: secondary
                    }
                }))
                obtain()
            }
            else {
                //编辑
                if (url1 == '') {
                    url1 = img
                    setUrl1(url1)
                }
                dispatch(({
                    type: 'parameter/updateParams',
                    payload: {
                        url: url1,
                        name: values.name,
                        desc: values.desc,
                        parentId: secondary,
                        id: id
                    }
                }))
                setImg('')
                obtain()
            }
        }
    }
    //取消
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [form] = Form.useForm();
    let [pageSize, setPageSize] = useState<number>(10)
    let [current, setCurrent] = useState<number>(1)
    // 删除
    let reduce = (e: any) => {
        console.log(e);
        dispatch(({
            type: 'parameter/delParams',
            payload: {
                parentId: secondary,
                attrId: e
            }
        }))
        obtain()
    }
    //显示隐藏
    let Change = (item: any) => {
        console.log(item);
    }
    let a = 1
    let topics = useSelector((state: any) => state.add.list)
    let afsa = () => {
        dispatch(({
            type: 'add/getGoods',
            payload: {
                current: current,
                pageSize: pageSize,
                query: ''
            }
        }))
    }
    //进入执行
    useEffect(() => {
        afsa()
        if (secondary) {
            obtain()
        }
    }, [])
    return (
        <div>
            <div style={{ backgroundColor: '#fff', width: '100%', height: '100%', padding: 20 }}>
                <div>
                    {/* 输入框 */}
                    <Select
                        showSearch
                        allowClear={true}
                        placeholder="请选所属模型"
                        style={{ width: 200 }}
                        optionFilterProp="children"
                        onChange={onChange}
                    >
                        {topics.data && topics.data.map((item: any, index: number) => {
                            return (
                                <Option key={item.name} value={item._id}>{item.name}</Option>
                            )
                        })}
                    </Select>
                    {/* 弹出框 */}
                    <Button type="primary" onClick={showModal} style={{ marginLeft: 10 }}>添加参数</Button>
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
                                    name="name"
                                    label="参数名称">
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="desc"
                                    label="参数描述">
                                    <Input />
                                </Form.Item>
                            </Form>
                        </div>
                    </Modal>
                </div>
                <div>
                    <Table dataSource={list.data} rowKey='_id'>
                        <Column title="#" dataIndex="url" key="url"
                            render={(text, record: any) => (
                                <div>{a++}</div>
                            )} />
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
                        <Column title="参数名称" dataIndex="name" />
                        <Column title="参数描述" dataIndex="desc" />
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
