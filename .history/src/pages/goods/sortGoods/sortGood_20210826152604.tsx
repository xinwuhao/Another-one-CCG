import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const sortGood = () => {
    let { Search } = Input;
    const onSearch = (value: any) => console.log(value);
    return (
        <div>
            <Search placeholder="输入分类名称" allowClear onSearch={onSearch} style={{ width: 200 }} />
            <div style={{ display: 'flex' }}>
                <div>商品分类</div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 20px' }}>
                        <div>新增分类</div>
                        <div>确定</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sortGood
