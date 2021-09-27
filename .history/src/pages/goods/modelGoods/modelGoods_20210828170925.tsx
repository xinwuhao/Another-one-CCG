import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

let { Search } = Input;

const modelGoods = () => {
    let onSearch = (value: any) => console.log(value);
    return (
        <div style={{ width: '100%', backgroundColor: 'white', padding: 10 }}>
            <div>商品模型</div>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </div>
    )
}

export default modelGoods
