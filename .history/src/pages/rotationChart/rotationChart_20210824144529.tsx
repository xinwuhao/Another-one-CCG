import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';


let RotationChart = () => {
    let { Search } = Input;
    let suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    let onSearch = (value: any) => console.log(value);
    return (
        <div>
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
        </div>
    )
}

export default RotationChart
