import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Input, Button, Table, Space, Switch, Modal, Form } from 'antd';

let { Search } = Input;
const { Column, ColumnGroup } = Table

const normsGoods = () => {
    let topics = useSelector((state: any) => state.Model.topics)
    let dispatch = useDispatch()
    let [a, seta] = useState<number>(1)
    let [estimate, setestimate] = useState<number>(0)
    // 输入框
    let { Search } = Input
    let onSearch = (value: any) => {
        // console.log(value);
    };//输入框的值
    // 添加
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
        setestimate(1)
    };
    // 定义id，点击时候将id进行赋值
    let [id, setId] = useState<string>('')

    //编辑
    let [content, setcontent] = useState<string>('')
    let btn = (item: any) => {
        setIsModalVisible(true);
        setestimate(2)
        setId(item._id)
        setcontent(item.name)
    }
    //确定 并发出请求
    const handleOk = () => {
        setIsModalVisible(false);
        // setFieldsValue
        const values = form.getFieldsValue();
        console.log('1515', values);
        //添加
        if (estimate == 1) {

        }
        else {

        }
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

    }
    // 删除
    let reduce = (e: any) => {
        console.log(e);
    }
    //进入执行
    useEffect(() => {
        obtain()
    }, [])
    return (
        <div style={{ width: "100%", backgroundColor: 'white', padding: 10 }}>
            <div>
                {/* 输入框 */}
                <Search placeholder="请输入关键词" allowClear onSearch={onSearch} style={{ width: 200 }} />
                {/* 弹出框 */}
                <Button type="primary" onClick={showModal} style={{ marginLeft: 10 }}>添加模型</Button>
                <Modal
                    title="添加模型"
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
                                label="模型名称">
                                <Input />
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>
            {/* 表格 */}
            <div>
                <Table dataSource={topics.data} rowKey='_id'>
                    <Column title="#" dataIndex="content" key="content"
                        width={80}
                        render={(text, record: any) => (
                            <div>{a++}</div>
                        )} />
                    <Column title="模型名称" dataIndex="name" key="name" />
                    <Column title="模型名称" dataIndex="name" key="name" />
                    <Column title="模型名称" dataIndex="name" key="name" />
                    <Column title="模型名称" dataIndex="name" key="name" />
                    <Column
                        title="操作"
                        key="action"
                        render={(text, record: any) => (
                            <Space size="middle">
                                <Button type="primary" danger onClick={() => { reduce(record._id) }}>删除</Button>
                            </Space>
                        )}
                    />
                </Table>,
            </div>
        </div>
    )
}

export default normsGoods
