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
            <div style={{ overflowY: 'scroll', width: '100%', height: '70vh', backgroundColor: '#F5F5F5', padding: 40 }}>
                456
            </div>
            <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
                <div>
                    <img src={mm} style={{ width: 30, height: 30 }} />
                </div>
                <div>
                    <input type="text" name="" style={{ width: '100%', height: 100 }} />
                </div>
                <div>发送</div>
            </div>
        </div>
    )
}

export default Tidings
