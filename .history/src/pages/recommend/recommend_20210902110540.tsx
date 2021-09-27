import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Input, Modal, Button, Form, Table, Space, Switch, Select } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Column } = Table
const { Option } = Select;

const Recommend = () => {
    let topics = useSelector((state: any) => state.rNav.list)
    let dispatch = useDispatch()
    let [estimate, setestimate] = useState<number>(0)
    // 输入框
    let { Search } = Input
    let suffix = (<AudioOutlined style={{ fontSize: 16, color: '#1890ff', }} />);
    let onSearch = (value: any) => {
        // console.log(value);
    };//输入框的值
    // 添加
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
        setestimate(1)
    };
    //上传图片
    let [id, setId] = useState<string>('')

    //编辑
    let [content, setcontent] = useState<string>('')
    let btn = (item: any) => {
        setIsModalVisible(true);
        setestimate(2)
        setId(item._id)
        setcontent(item.content)
    }
    //确定 并发出请求
    const handleOk = () => {
        setIsModalVisible(false);
        const values = form.getFieldsValue();
        console.log('1515', values);
        if (estimate == 1) {
            dispatch(({
                type: 'rNav/addRecommendNav',
                payload: {
                    name: values.name,
                    desc: values.desc,
                    goods: arr
                }
            }))
        }
        // else {
        //     dispatch(({
        //         type: 'rNav/updateNotice',
        //         payload: {
        //             content: values.content,
        //             id: id
        //         }
        //     }))
        // }
        obtain()
    };
    //取消
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [form] = Form.useForm();
    //获取展示数据
    let [pageSize, setPageSize] = useState<number>(10)
    let [current, setCurrent] = useState<number>(1)
    let obtain = () => {
        dispatch(({
            type: 'rNav/getRecommendNav',
            payload: {
                current, pageSize, ''
            }
        }))
    }
    // 删除
    let reduce = (e: any) => {
        console.log(e);
        dispatch(({
            type: 'notice/delNotice',
            payload: e
        }))
        obtain()
    }
    //开关
    let Change = (item: any) => {
        console.log(item);
        dispatch(({
            type: 'notice/showNotice',
            payload: {
                id: item._id,
                isShow: !item.isShow
            }
        }))
        obtain()
    }
    //获取商品
    let list = useSelector((state: any) => state.add.list)
    let goods = () => {
        dispatch(({
            type: 'add/getGoods',
            payload: {
                current: 1,
                pageSize: 9999999999999,
                query: ''
            }
        }))
    }
    // 下拉多选
    let [arr, setArr] = useState<any>([])
    let handleChange = (value: any) => {
        console.log(`selected ${value}`);
        if (list.data.length > 0) {
            arr.push(list.data[value])
        }
        setArr(arr)
        console.log(arr);
    }
    //进入执行
    useEffect(() => {
        goods()
        obtain()

    }, [])
    return (
        <div>
            <div style={{ backgroundColor: '#fff', width: '100%', height: '100%', padding: 20 }}>
                <div>
                    {/* 输入框 */}
                    <Search placeholder="请输入关键词" allowClear onSearch={onSearch} style={{ width: 200 }} />
                    {/* 弹出框 */}
                    <Button type="primary" onClick={showModal} style={{ marginLeft: 10 }}>添加通知</Button>
                    <Modal
                        title="添加通知"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okText="确认"
                        cancelText="取消"
                        destroyOnClose={true}>
                        <div>
                            <Form name="validate_other" onFinish={handleOk} form={form} preserve={false}>
                                <Form.Item
                                    name="name"
                                    label="导航名称">
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="desc"
                                    label="导航描述">
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="goods"
                                    label="下属商品">
                                    <Select
                                        mode="multiple"
                                        style={{ width: '100%' }}
                                        placeholder="选择下属商品"
                                        onChange={handleChange}
                                        optionLabelProp="label"
                                    >
                                        {list.data && list.data.map((item: any, index: number) => {
                                            return (
                                                <Option value={index} label={item.name} key={index}>
                                                    {item.name}
                                                </Option>
                                            )
                                        })}
                                    </Select>
                                </Form.Item>
                            </Form>
                        </div>
                    </Modal>
                </div>

                <div>
                    <Table dataSource={topics.data} rowKey='_id'>
                        <Column title="导航名称" dataIndex="name" />
                        <Column title="导航描述" dataIndex="desc" />
                        <Column
                            title="是否禁用"
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
                                    <Button>查看商品</Button>
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

export default Recommend
