import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, useHistory } from 'umi'
import { Select, Form } from 'antd';

const { Option } = Select;

const Norms = () => {
    let topics = useSelector((state: any) => state.Model.topics)
    let list = useSelector((state: any) => state.norms.list)
    let dispatch = useDispatch()
    const [form] = Form.useForm();
    let onChange = (item: any) => {
        console.log(item);
        dispatch(({
            type: 'norms/getSpec',
            payload: {
                parentId: item
            }
        }))
    }
    const onFinish = () => {
        const values = form.getFieldsValue();
        console.log(values);
    };
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
    useEffect(() => {
        goodsModel()
    }, [])
    //商品规格
    return (
        <div>
            <Form form={form} name="name" preserve={false} onFinish={onFinish}>
                {/* 下拉框 */}
                <Form.Item name="area" label="所属模型" >
                    <Select
                        showSearch
                        allowClear={true}
                        placeholder="请选所属模型"
                        style={{ width: 400 }}
                        optionFilterProp="children"
                        onChange={onChange}
                    >
                        {topics.data && topics.data.map((item: any, index: number) => {
                            return (
                                <Option key={item.name} value={item._id}>{item.name}</Option>
                            )
                        })}
                    </Select>
                </Form.Item>
            </Form>
            <div>
                {list.data.length > 0 && list.data.map((item: any, index: any) => {
                    return (
                        <div></div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Norms
