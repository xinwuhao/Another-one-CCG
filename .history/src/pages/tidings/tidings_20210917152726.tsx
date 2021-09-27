import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:3000', {
    query: {},
    transports: ['websocket', 'polling'],
    timeout: 5000,
})


const Tidings = () => {
    return (
        <div style={{ backgroundColor: '#fffff', height: "100vh" }}>
            <div style={{ overflowY: 'scroll', width: '100%', height: '60vh' }}></div>

        </div>
    )
}

export default Tidings
