import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Input, Modal, Button, Form, Upload, Table, Space, Switch, Image } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Column, ColumnGroup } = Table

const Navigation = () => {
    let list = useSelector((state: any) => state.data.list)
    let dispatch = useDispatch()

    let { Search } = Input
    let suffix = (<AudioOutlined style={{ fontSize: 16, color: '#1890ff', }} />);
    let onSearch = (value: any) => {
        console.log(value);
        // dispatch(({
        //     type: 'addBanner/getBanner',
        //     payload: {
        //         current: current,
        //         pageSize: pageSize,
        //         query: value
        //     }
        // }))
    };//输入框的值
    return (
        <div>
            导航管理
        </div>
    )
}

export default Navigation
