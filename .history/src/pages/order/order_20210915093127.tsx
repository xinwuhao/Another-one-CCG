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
            title: '#',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: '订单日期',
            dataIndex: 'pay_time',
            key: 'key',
        },
        {
            title: '商品数量',
            dataIndex: 'count',
            key: 'count',
        },
        {
            title: '订单价格',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '商品名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '订单地址',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    //进入执行
    useEffect(() => {
        obtain()
    }, [])

    return (
        <div>
            订单管理
            <Table columns={columns} dataSource={topics} />
        </div>
    )
}

export default Order
