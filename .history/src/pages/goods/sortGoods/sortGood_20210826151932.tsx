import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const sortGood = () => {
    let { Search } = Input;
    const suffix = (<AudioOutlined style={{ fontSize: 16, color: '#1890ff', }} />)
    const onSearch = (value: any) => console.log(value);
    return (
        <div>
            商品分类
        </div>
    )
}

export default sortGood
