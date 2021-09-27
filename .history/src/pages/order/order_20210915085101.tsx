import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'



const Order = () => {
    let topics = useSelector((state: any) => state.home.topics)
    let dispatch = useDispatch()
    let obtain = () => {
        dispatch(({
            type: 'home/getIndex',
            payload: {}
        }))
    }，
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
