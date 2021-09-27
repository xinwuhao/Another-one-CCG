import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const modelGoods = () => {
    const onSearch = (value: any) => console.log(value);
    return (
        <div>
            商品模型
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </div>
    )
}

export default modelGoods
