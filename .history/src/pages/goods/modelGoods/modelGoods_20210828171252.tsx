import React from 'react'
import { Input, Button } from 'antd';

let { Search } = Input;

const modelGoods = () => {
    let onSearch = (value: any) => console.log(value);
    return (
        <div>
            <div>
                <Search placeholder="请输入关键词" onSearch={onSearch} style={{ width: 200, marginRight: 10 }} />
                <Button type="primary">添加模型</Button>
            </div>

            <div style={{ width: '100%', backgroundColor: 'white', padding: 10 }}></div>
        </div>
    )
}

export default modelGoods
