import React, { useState } from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';


let RotationChart = () => {
    // 输入框
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
    // 添加
   
    return (
        <div>
            <div>
                <Search placeholder="请输入关键词" allowClear onSearch={onSearch} style={{ width: 200 }} />
            </div>
            <div>
              
            </div>
        </div>
    )
}

export default RotationChart
