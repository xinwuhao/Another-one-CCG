import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);
const onSearch = (value: any) => console.log(value);

const RotationChart = () => {
    return (
        <div>
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
        </div>
    )
}

export default RotationChart
