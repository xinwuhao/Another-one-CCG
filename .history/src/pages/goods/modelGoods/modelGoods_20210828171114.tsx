import React from 'react'
import { Input, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

let { Search } = Input;

const modelGoods = () => {
    let onSearch = (value: any) => console.log(value);
    return (
        <div style={{ width: '100%', backgroundColor: 'white', padding: 10 }}>
            <div>商品模型</div>
            <Search placeholder="请输入关键词" onSearch={onSearch} style={{ width: 200 }} />
            <Button type="primary">primary</Button>
        </div>
    )
}

export default modelGoods
