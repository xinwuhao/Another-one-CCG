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
    //进入执行
    useEffect(() => {
        obtain()
    }, [])

    return (
        <div>
            订单管理
        </div>
    )
}

export default Order
