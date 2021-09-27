import React from 'react'
import { Table, Tag, Space, Button, Switch } from 'antd';

const { Column, ColumnGroup } = Table

const Order = () => {
    let onChange = (checked: any) => {
        console.log(checked);
    }

    const data = [
        {
            key: '1',
            firstName: 'John',
            lastName: 'Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            firstName: 'Jim',
            lastName: 'Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            firstName: 'Joe',
            lastName: 'Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <div>
            订单管理


            <Table dataSource={data}>
                <Column title="名字" dataIndex="age" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={(text, record) => (
                        <Space size="middle">
                            <Switch defaultChecked onChange={onChange} />
                        </Space>
                    )}
                />
                <Column
                    title="操作"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <Button type="primary">编辑</Button>
                            <Button type="primary" danger>删除</Button>
                        </Space>
                    )}
                />
            </Table>,

        </div>
    )
}

export default Order
