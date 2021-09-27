import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const normsGoods = () => {
    const onSearch = (value: any) => console.log(value);
    return (
        <div style={{ width: '100%', backgroundColor: 'white', padding: 10 }}>
            <div>商品规格</div>
            <Search placeholder="请输入关键值" onSearch={onSearch} style={{ width: 200 }} />

        </div>
    )
}

export default normsGoods
