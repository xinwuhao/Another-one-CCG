import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { useSelector, useDispatch } from 'umi'
import { Input, Modal, Button, Form, Table, Space, Switch, DatePicker } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import dayjs from 'dayjs'

const { Column, ColumnGroup } = Table
const { RangePicker } = DatePicker;
const Coupon = () => {
    let topics = useSelector((state: any) => state.coupon.list)
    let dispatch = useDispatch()
    let [estimate, setestimate] = useState<number>(0)
    // 输入框
    let { Search } = Input
    let suffix = (<AudioOutlined style={{ fontSize: 16, color: '#1890ff', }} />);
    let onSearch = (value: any) => {
        dispatch(({
            type: 'coupon/getCoupon',
            payload: {
                current: current,
                pageSize: pageSize,
                query: value
            }
        }))
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
    let btn = (item: any) => {
        setIsModalVisible(true);
        setestimate(2)
        setId(item._id)
        form.setFieldsValue({ name: item.name })
    }
    //确定 并发出请求
    const handleOk = () => {
        setIsModalVisible(false);
        // setFieldsValue
        const values = form.getFieldsValue();
        // console.log('1515', values);
        if (estimate == 1) {
            dispatch(({
                type: 'coupon/addCoupon',
                payload: {
                    name: values.name,
                    amount: values.amount,
                    threshold: values.threshold,
                    start_time: values.start_time,
                    end_time: values.end_time,
                    number: values.number,
                }
            }))
        }
        else {

        }
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
            type: 'coupon/getCoupon',
            payload: {
                current: current,
                pageSize: pageSize,
                query: ''
            }
        }))
    }
    // 删除
    let reduce = (e: any) => {
        console.log(e);
        dispatch(({
            type: 'coupon/delCoupon',
            payload: e
        }))
        obtain()
    }
    //开关
    let Change = (item: any) => {
        // console.log(item);
        dispatch(({
            type: 'coupon/showCoupon',
            payload: {
                id: item._id,
                isShow: !item.isShow,
            }
        }))
        obtain()
    }


    // 时间选择
    let range = (start: any, end: any) => {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }

    let disabledDate = (current: any) => {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }
    let disabledDateTime = () => {
        return {
            disabledHours: () => range(0, 24).splice(4, 20),
            disabledMinutes: () => range(30, 60),
            disabledSeconds: () => [55, 56],
        };
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
                    <Button type="primary" onClick={showModal} style={{ marginLeft: 10 }}>添加优惠券</Button>
                    <Modal
                        title="添加优惠券"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okText="确认"
                        cancelText="取消"
                        destroyOnClose={true}>
                        <div>
                            <Form
                                name="validate_other"
                                onFinish={handleOk}
                                form={form}
                                preserve={false}
                                labelCol={{ span: 5 }}
                                wrapperCol={{ span: 16 }}>
                                <Form.Item name="name" label="优惠券名称">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="amount" label="使用门槛">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="threshold" label="优惠券金额">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="start_time" label="开始时间">
                                    <DatePicker
                                        style={{ width: '100%' }}
                                        format="YYYY-MM-DD HH:mm:ss"
                                        disabledDate={disabledDate}
                                        disabledTime={disabledDateTime}
                                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                                    />
                                </Form.Item>
                                <Form.Item name="end_time" label="结束时间">
                                    <DatePicker
                                        style={{ width: '100%' }}
                                        format="YYYY-MM-DD HH:mm:ss"
                                        disabledDate={disabledDate}
                                        disabledTime={disabledDateTime}
                                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                                    />
                                </Form.Item>
                                <Form.Item name="number" label="发放数量">
                                    <Input />
                                </Form.Item>
                            </Form>
                        </div>
                    </Modal>
                </div>
                <div>
                    <Table dataSource={topics.data} rowKey='_id'>
                        <Column title="优惠券名称" dataIndex="name" />
                        <Column title="开始时间" dataIndex='start_time'
                            render={(text, record: any) => (
                                <div>{dayjs(record.start_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                            )} />
                        <Column title="结束时间" dataIndex="end_time"
                            render={(text, record: any) => (
                                <div>{dayjs(record.end_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                            )} />
                        <Column title="优惠金额" dataIndex="threshold" />
                        <Column title="使用门槛" dataIndex="amount" />
                        <Column title="发放数量" dataIndex="number" />
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

export default Coupon
