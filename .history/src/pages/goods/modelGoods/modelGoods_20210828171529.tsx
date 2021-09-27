import React from 'react'
import { Input, Button } from 'antd';

let { Search } = Input;

const modelGoods = () => {
    let onSearch = (value: any) => console.log(value);
    return (
        <div style={{ width: '100%' }}>
            <div style={{ marginBottom: 20 }}>
                <Search placeholder="请输入关键词" onSearch={onSearch} style={{ width: 200, marginRight: 10 }} />
                <Button type="primary">添加模型</Button>
            </div>
            <div style={{ width: '100%', padding: 10 }}>
                123
            </div>
        </div>
    )
}

export default modelGoods
