import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const Goods = () => {
    let suffix = (<AudioOutlined style={{ fontSize: 16, color: '#1890ff', }} />);
    let onSearch = (value: any) => console.log(value);
    return (
        <div>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
            添加商品
        </div>
    )
}

export default Goods
