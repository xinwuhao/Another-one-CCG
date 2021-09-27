import React from 'react'
import { Input, Button, Table, Radio, Select, Modal, Form, Space } from 'antd';

const Norms = () => {
    let topics = useSelector((state: any) => state.Model.topics)
    const [form] = Form.useForm();
    let onChange = (item: any) => {
        console.log(item);
    }
    const onFinish = () => {
        const values = form.getFieldsValue();
        console.log(values);
    };
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
                        style={{ width: 200 }}
                        optionFilterProp="children"
                        onChange={onChange}
                    >
                        {/* {topics.data && topics.data.map((item: any, index: number) => {
                        return (
                            <Option key={item.name} value={item._id}>{item.name}</Option>
                        )
                    })} */}
                    </Select>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Norms
