import React from 'react'
import { Input, Button } from 'antd';
import Add from '@/components/goods/add/add'

const { Search } = Input;

const Goods = () => {
    let onSearch = (value: any) => console.log(value);
    return (
        <div>
            <Search placeholder="请输入关键词" onSearch={onSearch} style={{ width: 200, marginRight: 10 }} />
            <Button type="primary">添加商品</Button>
            <Add></Add>
        </div>
    )
}

export default Goods
