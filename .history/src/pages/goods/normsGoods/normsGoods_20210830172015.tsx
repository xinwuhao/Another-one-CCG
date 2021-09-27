import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, useHistory } from 'umi'
import { Input, Button, Table, Radio, Select, Modal, Form, Space } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';

const { TextArea } = Input;
let { Search } = Input;
const { Option } = Select;
const { Column, ColumnGroup } = Table

const normsGoods = () => {
    let topics = useSelector((state: any) => state.Model.topics)
    let list = useSelector((state: any) => state.norms.list)
    let dispatch = useDispatch()
    const history = useHistory();
    let [a, seta] = useState<number>(1)
    // 输入框
    let { Search } = Input
    let onSearch = (value: any) => {
        // console.log(value);
    };//输入框的值
    // 添加
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    // 定义id，点击时候将id进行赋值
    let [id, setId] = useState<any>('')
    let [content, setcontent] = useState<string>('')
    //确定 并发出请求
    const handleOk = () => {
        setIsModalVisible(false);
        const values = form.getFieldsValue();
        // console.log('1515', values);
        // 添加
        dispatch(({
            type: 'norms/addSpec',
            payload: {
                name: values.name,
                model: values.model,
                spec_item: values.spec_item,
                mode: values.mode,
                parentId: id
            }
        }))
    };
    //取消
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [form] = Form.useForm();
    //获取展示数据
    let obtain = () => {
        dispatch(({
            type: 'norms/getSpec',
            payload: {
                parentId: id
            }
        }))
    }
    const onFinish = () => {
        const values = form.getFieldsValue();
        console.log(values);

    };
    //下拉选中
    let [secondary, setSecondary] = useState<string>('')
    let onChange = (item: any) => {
        console.log(item);
        secondary = item
        setSecondary(secondary)
    }
    // 模型数据
    let goodsModel = () => {
        dispatch(({
            type: 'Model/getModel',
            payload: {
                current: 1,
                pageSize: 99999,
                query: ''
            }
        }))
    }
    // 删除
    let reduce = (e: any) => {
        console.log(e);
    }
    //单选

    //进入执行
    useEffect(() => {
        id = history.location as any
        id = id.query.id
        setId(id)
        form.setFieldsValue({ area: id })
        obtain()
        goodsModel()
    }, [])
    return (
        <div style={{ width: "100%", backgroundColor: 'white', padding: 10 }}>
            <div style={{ display: 'flex' }}>
                <Form form={form} name="name" preserve={false} onFinish={onFinish}>
                    {/* 下拉框 */}
                    <Form.Item name="area" label="所属模型" >
                        <Select
                            showSearch
                            allowClear={true}
                            placeholder="请选所属模型"
                            style={{ width: 200 }}
                            optionFilterProp="children"
                            onChange={onChange}
                        >{topics.data && topics.data.map((item: any, index: number) => {
                            return (
                                <Option key={item.name} value={item._id}>{item.name}</Option>
                            )
                        })}
                        </Select>
                    </Form.Item>
                </Form>
                <div onClick={onFinish}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        icon={<SearchOutlined />}
                        style={{ margin: '0px 10px' }}
                    >
                        查询
                </Button>
                </div>
                <Button htmlType="submit" icon={<RedoOutlined />}>
                    重置
                </Button>
                {/* 弹出框 */}
            </div>
            <div>
                <div>
                    <Button type="primary" onClick={showModal}>添加模型</Button>
                </div>
                <Modal
                    title="添加模型"
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
                            preserve={false}>
                            <Form.Item
                                initialValue={name}
                                name="name"
                                label="模型名称"
                                rules={[{ required: true, message: '模型名称有误!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="mode"
                                label="所属模型"
                                rules={[{ required: true, message: '所属模型有误!' }]}
                            >
                                <Select
                                    showSearch
                                    allowClear={true}
                                    placeholder="请选所属模型"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                >{topics.data && topics.data.map((item: any, index: number) => {
                                    return (
                                        <Option key={item.name} value={item.name}>{item.name}</Option>
                                    )
                                })}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="spec_item"
                                label="规格项"
                                rules={[{ required: true, message: '规格项有误!' }]}
                            >
                                <TextArea rows={3} />
                            </Form.Item>
                            <Form.Item
                                name="model"
                                label="模型名称"
                                rules={[{ required: true, message: '模型名称有误!' }]}
                            >
                                <Radio.Group>
                                    <Radio value={'文字'}>文字</Radio>
                                    <Radio value={'图片'}>图片</Radio>
                                    <Radio value={'颜色'}>颜色</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>
            {/* 表格 */}
            <div>
                <Table dataSource={list.data} rowKey='_id'>
                    <Column title="#" dataIndex="content" key="content"
                        width={80}
                        align='center'
                        render={(text, record: any) => (
                            <div>{a++}</div>
                        )} />
                    <Column align='center' title="模型名称" dataIndex="name" key="name" width={150} />
                    <Column align='center' title="所属模型" dataIndex="mode" key="name" width={150} />
                    <Column align='center' title="展现方式" dataIndex="model" key="name" width={150} />
                    <Column align='center' title="规格项" dataIndex="spec_item" key="name" />
                    <Column
                        align='center'
                        title="操作"
                        key="action"
                        width={200}
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
