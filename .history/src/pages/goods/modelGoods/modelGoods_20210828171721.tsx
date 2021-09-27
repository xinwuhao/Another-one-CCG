import React from 'react'
import { Input, Button, Table, Space, Switch } from 'antd';

let { Search } = Input;

const modelGoods = () => {
    let onSearch = (value: any) => console.log(value);
    return (
        <div style={{ width: '100%' }}>
            <div style={{ marginBottom: 20 }}>
                <Search placeholder="请输入关键词" onSearch={onSearch} style={{ width: 200, marginRight: 10 }} />
                <Button type="primary">添加模型</Button>
            </div>
            <div style={{ width: '100%', padding: 10 }}>
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

export default modelGoods
