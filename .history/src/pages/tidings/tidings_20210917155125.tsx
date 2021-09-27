import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { Input } from 'antd';
import mm from '../../assets/expression.png'

const socket = io('http://localhost:3000', {
    query: {},
    transports: ['websocket', 'polling'],
    timeout: 5000,
})


const Tidings = () => {
    return (
        <div style={{ backgroundColor: '#FFFFFF', height: "100vh", padding: 20 }}>
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
                backgroundColor: '#F5F5F5',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{ marginRight: 20 }}>
                    <img src={mm} style={{ width: 30, height: 30 }} />
                </div>
                <div>
                    <input type="text" name="" style={{ width: 1300, height: 50 }} />
                </div>
                <div style={{
                    backgroundColor: 'rgb(65, 168, 99)',
                    marginLeft: 20,
                    padding: '15px 40px',
                    color: '#FFFFFF'
                }}>发送</div>
            </div>
        </div>
    )
}

export default Tidings
