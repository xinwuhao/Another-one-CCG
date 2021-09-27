import React from 'react'
import { Input, Button } from 'antd';

let { Search } = Input;

const modelGoods = () => {
    let onSearch = (value: any) => console.log(value);
    return (
        <div style={{ width: '100%', padding: 10 }}>
            <div>
                <Search placeholder="请输入关键词" onSearch={onSearch} style={{ width: 200, marginRight: 10 }} />
                <Button type="primary">添加模型</Button>
            </div>
            <div style={{ backgroundColor: 'white' ,width:'100%'}}></div>
        </div>
    )
}

export default modelGoods
