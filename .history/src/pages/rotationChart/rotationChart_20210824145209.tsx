import React from 'react'
import { Input, Space,Modal, Button  } from 'antd';
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
    let onSearch = (value: any) => {
        console.log(value)
    };
    return (
        <div>
            <Search placeholder="请输入关键词" allowClear onSearch={onSearch} style={{ width: 200 }} />
        </div>
    )
}

export default RotationChart
