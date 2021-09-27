import React from 'react'
import { Input, Form, Button, Select } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Option } = Select;

const sortGood = () => {
    let { Search } = Input;
    const onSearch = (value: any) => console.log(value);

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    let handleChange = (value: any) => {
        console.log(value);
    }

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
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    label="分类名称"
                                    name="username"
                                    rules={[{ required: true, message: '分类名称有误' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="分类别名 "
                                    name="password"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="上级分类"
                                    name="username"
                                >
                                    <Select
                                        showSearch
                                        placeholder="请选择上级分类"
                                        optionFilterProp="children"
                                        onChange={handleChange}
                                    >
                                        <Option value="Identified">Identified</Option>
                                    </Select>,
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
0