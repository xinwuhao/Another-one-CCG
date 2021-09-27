import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Table, Tag, Space } from 'antd';


const Order = () => {
    let topics = useSelector((state: any) => state.order.topics)
    let dispatch = useDispatch()
    let obtain = () => {
        dispatch(({
            type: 'order/getOrder',
            payload: {}
        }))
    }
    const columns = [
        {
            title: '用户名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '订单日期',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '商品数量',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '商品数量',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '商品数量',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    //进入执行
    useEffect(() => {
        obtain()
    }, [])

    return (
        <div>
            订单管理
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default Order
