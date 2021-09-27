import React from 'react'
import { Input, Button } from 'antd';

const { Search } = Input;

const Goods = () => {
    let onSearch = (value: any) => console.log(value);
    return (
        <div>
            <Search placeholder="请输入关键词" onSearch={onSearch} style={{ width: 200 }} />
            <Button type="primary">primary</Button>
        </div>
    )
}

export default Goods
