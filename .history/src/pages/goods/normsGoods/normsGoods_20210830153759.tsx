import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, useHistory } from 'umi'
import { Input, Button, Table, Space, Select, Modal, Form } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';

let { Search } = Input;
const { Option } = Select;
const { Column, ColumnGroup } = Table

const normsGoods = () => {
    let topics = useSelector((state: any) => state.Model.topics)
    let listt = useSelector((state: any) => state.norms.list)
    let dispatch = useDispatch()
    const history = useHistory();
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
    let obtain = () => {
        // dispatch(({
        //     type: 'norms/getSpec',
        //     payload: {
        //         parentId: id
        //     }
        // }))
    }
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
    //模型数据

    //进入执行
    useEffect(() => {
        obtain()
        goodsModel()
        
    }, [])
    return (
        <div style={{ width: "100%", backgroundColor: 'white', padding: 10 }}>
            <div>
                <Form form={form} name="name" preserve={false}>
                    {/* 下拉框 */}
                    <Form.Item name="area" label="所属模型" >
                        <Select
                            showSearch
                            allowClear={true}
                            placeholder="请选择所属模型"
                            optionFilterProp="children"
                            style={{ width: 200 }}
                            onChange={onChange}
                        >{topics.data && topics.data.map((item: any, index: number) => {
                            return (
                                <Option key={item.name} value={item._id}>{item.name}</Option>
                            )
                        })}
                        </Select>
                        <Button
                            type="primary"
                            htmlType="submit"
                            icon={<SearchOutlined />}
                            style={{ margin: '0px 10px' }}
                        >
                            查询
                        </Button>
                        <Button htmlType="submit" icon={<RedoOutlined />}>
                            重置
                        </Button>
                    </Form.Item>
                </Form>
                {/* 弹出框 */}
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
                        align='center'
                        render={(text, record: any) => (
                            <div>{a++}</div>
                        )} />
                    <Column align='center' title="模型名称" dataIndex="name" key="name" width={150} />
                    <Column align='center' title="所属模型" dataIndex="name" key="name" width={150} />
                    <Column align='center' title="展现方式" dataIndex="name" key="name" width={150} />
                    <Column align='center' title="规格项" dataIndex="name" key="name" />
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
