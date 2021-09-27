import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

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
            <div style={{  width: '100%', height: '70vh', backgroundColor: '#FFFFFF', padding: 40 }}>
                123
            </div>
        </div>
    )
}

export default Tidings
