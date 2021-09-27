import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Input, Modal, Button, Form, Table, Space, Switch } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Column, ColumnGroup } = Table

const Notice = () => {
    let topics = useSelector((state: any) => state.notice.topics)
    let dispatch = useDispatch()
    let [estimate, setestimate] = useState<number>(0)
    // 输入框
    let { Search } = Input
    let suffix = (<AudioOutlined style={{ fontSize: 16, color: '#1890ff', }} />);
    let onSearch = (value: any) => {
        // console.log(value);
        dispatch(({
            type: 'notice/getNotice',
            payload: {
                current: current,
                pageSize: pageSize,
                query: value
            }
        }))
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
        // setFieldsValue
        const values = form.getFieldsValue();
        // console.log('1515', values);
        if (estimate == 1) {
            dispatch(({
                type: 'notice/addNotice',
                payload: {
                    content: values.content,
                }
            }))
        }
        else {
            dispatch(({
                type: 'notice/updateNotice',
                payload: {
                    content: values.content,
                    id: id
                }
            }))
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
    let [query, setQuery] = useState<string>('')
    let [current, setCurrent] = useState<number>(1)
    let obtain = () => {
        dispatch(({
            type: 'notice/getNotice',
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
                                initialValue={content}
                                name="content"
                                label="添加通知">
                                <Input />
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>

            <div>
                <Table dataSource={topics.data} rowKey='_id'>
                    <Column title="通知内" dataIndex="content" key="content" />
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
    )
}

export default Notice
