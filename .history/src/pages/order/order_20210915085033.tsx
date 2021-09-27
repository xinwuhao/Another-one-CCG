import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'



const Order = () => {
    let topics = useSelector((state: any) => state.home.topics)
    let dispatch = useDispatch()

    return (
        <div>
            订单管理

        </div>
    )
}

export default Order
