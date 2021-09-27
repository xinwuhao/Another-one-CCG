import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const Goods = () => {
    let onSearch = (value: any) => console.log(value);
    return (
        <div>
            添加商品
        </div>
    )
}

export default Goods
