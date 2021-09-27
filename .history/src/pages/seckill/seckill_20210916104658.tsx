import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Input, Modal, Button, Form, Upload, Table, Space, Switch, Select } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Option, OptGroup } = Select;
const { Column } = Table
let { Search } = Input

const Seckill = () => {
    let list = useSelector((state: any) => state.data.topics)
    let topics = useSelector((state: any) => state.add.list)
    let dispatch = useDispatch()
    let [estimate, setestimate] = useState<number>(0)//判断添加？编辑？
    let goods = () => {
        dispatch(({
            type: 'add/getGoods',
            payload: {
                current: current,
                pageSize: pageSize,
                query: ''
            }
        }))
    }
    // 输入框方法
    let onSearch = (value: any) => {
        // console.log(value);
    };
    //添加
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
        setestimate(1)
    };
    let [id, setId] = useState<string>('')
    //编辑
    let btn = (item: any) => {
        setIsModalVisible(true);
        setestimate(2)
        setId(item._id)
    }
    //确定 并发出请求
    const handleOk = () => {
        setIsModalVisible(false);
        // setFieldsValue
        const values = form.getFieldsValue();
        // console.log(values);
        if (estimate == 1) {
            //添加
        } else {
            //编辑
        }
    }
    //取消
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [form] = Form.useForm();
    let [pageSize, setPageSize] = useState<number>(10)
    let [current, setCurrent] = useState<number>(1)
    //获取展示数据
    let obtain = () => {
        // dispatch(({
        //     type: 'data/getNav',
        //     payload: {
        //         current: current,
        //         pageSize: pageSize,
        //         query: ''
        //     }
        // }))
    }
    // 删除
    let reduce = (e: any) => {
        console.log(e);
    }
    //显示隐藏
    let Change = (item: any) => {
        console.log(item);
    }
    //进入执行
    useEffect(() => {
        obtain()
        goods()
    }, [])
    return (
        <div style={{ backgroundColor: '#fff', width: '100%', height: '100%', padding: 20 }}>
            <div>
                {/* 输入框 */}
                <Search placeholder="请输入关键词" allowClear onSearch={onSearch} style={{ width: 200 }} />
                {/* 弹出框 */}
                <Button type="primary" onClick={showModal} style={{ marginLeft: 10 }}>添加秒杀</Button>
                <Modal
                    title="添加秒杀"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="确认"
                    cancelText="取消"
                    destroyOnClose={true}>
                    <div>
                        <div>商品原价为:</div>
                        <Form name="validate_other" onFinish={handleOk} form={form} preserve={false}>
                            <Form.Item
                                name="category"
                                label="商品分类"
                                hasFeedback
                                rules={[{ required: true, message: '选择秒杀商品!' }]}
                            >
                                <Select placeholder="请选择商品分类">
                                    {topics.data && topics.data.map((item: any, index: number) => {
                                        return (
                                            <Option key={index} value="jack">Jack</Option>
                                        )
                                    })
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="title"
                                label="开始时间">
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="title"
                                label="结束时间">
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="title"
                                label="秒杀价格">
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="title"
                                label="秒杀数量">
                                <Input />
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>
            <div>
                <Table dataSource={list.data} rowKey='_id'>
                    <Column title="秒杀商品" dataIndex="title" key="title" />
                    <Column title="开始时间" dataIndex="title" key="title" />
                    <Column title="结束时间" dataIndex="title" key="title" />
                    <Column title="秒杀价格" dataIndex="title" key="title" />
                    <Column title="秒杀数量" dataIndex="title" key="title" />
                    <Column
                        title="是否禁用 "
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
                </Table>
            </div>
        </div>
    )
}

export default Seckill
