import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import mm from '../../assets/expression.png'
import { Input, Space } from 'antd';

const { Search } = Input;

const socket = io('http://localhost:3000', {
    query: {},
    transports: ['websocket', 'polling'],
    timeout: 5000,
})


const Tidings = () => {
    let onSearch = (value: any) =>{
        console.log(value)
    };
    return (
        <div style={{ backgroundColor: '#E6E6FA', padding: 20 }}>
            <div style={{
                overflowY: 'scroll',
                width: '100%',
                height: '70vh',
                backgroundColor: '#F5F5F5',
                padding: 40
            }}>
                456
            </div>
            <div style={{
                display: 'flex',
                width: '100%',
                padding: 20,
                backgroundColor: '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {/* 表情 */}
                <div style={{ marginRight: 20 }}>
                    <img src={mm} style={{ width: 30, height: 30 }} />
                </div>
                {/* 输入内容 */}
                <div>
                    <Search
                        placeholder="input search text"
                        allowClear onSearch={onSearch}
                        style={{ width: 1300, height: 50 }} />
                </div>
                {/* 发送 */}
                <div style={{
                    backgroundColor: 'rgb(65, 168, 99)',
                    marginLeft: 1,
                    padding: '15px 40px',
                    color: '#FFFFFF'
                }}>发送</div>
            </div>
        </div>
    )
}

export default Tidings
