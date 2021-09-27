import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const sortGood = () => {
    let { Search } = Input;
    const onSearch = (value: any) => console.log(value);
    return (
        <div style={{ width: '100%', backgroundColor: 'white', padding: '10px' }}>
            <Search placeholder="输入分类名称" allowClear onSearch={onSearch} style={{ width: 200 }} />
            <div style={{ display: 'flex', paddingTop: '10px' }}>
                <div style={{ width: '60%', padding: '10px' }}>商品分类</div>
                <div style={{
                    width: '40%',
                    padding: '0px 10px 10px 0px',
                    backgroundColor: '#F5F5F5',
                    border: '1px solid #DCDCDC'
                }}>
                    <div style={{
                        padding: '10px',
                        backgroundColor: 'white',
                        border: '1px solid #DCDCDC'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <div style={{ fontWeight: 700 }}>新增分类</div>
                            <div style={{ color: 'rgb(33,144,255)' }}>确定</div>
                        </div>
                        <div style={{ width: '100%', height: 1, backgroundColor: '#D3D3D3',margin:10}}></div>
                        <div>123</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sortGood
