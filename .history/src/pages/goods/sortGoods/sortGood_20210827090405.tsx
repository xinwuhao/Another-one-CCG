import React from 'react'
import { Form, Input, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
//后面删
const areas = [
    { label: 'Beijing123', value: 'Beijing' },
    { label: 'Shanghai', value: 'Shanghai' },
];


const sortGood = () => {
    let { Search } = Input;
    //输入框
    const onSearch = (value: any) => console.log(value);

    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
    };
    const handleChange = () => {
        form.setFieldsValue({ sights: [] });
    };
    return (
        <div style={{ width: '100%', backgroundColor: 'white', padding: 20 }}>
            <Search placeholder="输入分类名称" allowClear onSearch={onSearch} style={{ width: 200 }} />
            <div style={{ display: 'flex', paddingTop: '10px' }}>
                <div style={{ width: '60%', padding: '10px' }}>商品分类</div>
                <div style={{ width: '40%', backgroundColor: '#F5F5F5', border: '1px solid #DCDCDC', padding: '0px 10px 10px 0px', }}>
                    <div style={{
                        display: 'flex',
                        backgroundColor: 'white',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{ fontWeight: 700, padding: 10 }}>新增分类</div>
                        <div style={{ color: '#1E90FF', padding: 10 }}>确定</div>
                    </div>
                    <div style={{ width: '100%', height: 1, backgroundColor: '#DCDCDC' }}></div>
                    <div style={{ width: '100%', backgroundColor: 'white', padding: 10 }}>
                        <div>
                            <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                                <Form.Item
                                    label="分类名称"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                                <Form.Item name="area" label="上级分类" >
                                    {/* options下拉框的顺序数据 */}
                                    <Select options={areas} onChange={handleChange}  placeholder="请选择上级分类"/>
                                </Form.Item>
                                <Form.Item
                                    label="分类别名"
                                    name="username"
                                >
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sortGood