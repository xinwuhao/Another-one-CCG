import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const normsGoods = () => {
    const onSearch = (value: any) => console.log(value);
    return (
        <div>
            <div>商品规格</div>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />

        </div>
    )
}

export default normsGoods
