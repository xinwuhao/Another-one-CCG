import React from 'react'
import { Input, Space } from 'antd';

const { Search } = Input;

const Goods = () => {
    let onSearch = (value: any) => console.log(value);
    return (
        <div>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
            添加商品
        </div>
    )
}

export default Goods
