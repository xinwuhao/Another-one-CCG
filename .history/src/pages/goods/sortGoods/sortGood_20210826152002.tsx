import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const sortGood = () => {
    let { Search } = Input;
    const onSearch = (value: any) => console.log(value);
    return (
        <div>
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
            商品分类
        </div>
    )
}

export default sortGood
