import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Input, Button, Table, Space, Switch } from 'antd';

let { Search } = Input;
const { Column, ColumnGroup } = Table

const modelGoods = () => {
    let topics = useSelector((state: any) => state.notice.topics)
    let dispatch = useDispatch()
    let onSearch = (value: any) => console.log(value);
    // 删除
    let reduce = (e: any) => {
        console.log(e);
        dispatch(({
            type: 'notice/delNotice',
            payload: e
        }))
    }
    //编辑
    let [id, setId] = useState<string>('')
    let [estimate, setestimate] = useState<number>(0)
    let [content, setcontent] = useState<string>('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    let btn = (item: any) => {
        setIsModalVisible(true);
        setestimate(2)
        setId(item._id)
        setcontent(item.content)
    }
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
