import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import mm from '../../assets/expression.png'
import { Input } from 'antd';

const { TextArea } = Input;

const socket = io('http://localhost:3000', {
    query: {},
    transports: ['websocket', 'polling'],
    timeout: 5000,
})

const Tidings = () => {
    let [value, setValue] = useState<any>()
    let [arr, setArr] = useState<any>()
    let [list, setList] = useState<any>([])
    let onChange = (e: any) => {
        value = e.target.value
        setValue(value)
    };
    let btn = () => {
        // console.log(value)
        arr = { backstage: value }
        setArr(arr)
        socket.emit('event', {
            arr
        })
        value = ''
        setValue(value)
    }
    useEffect(() => {
        socket.on('broadcast', (res) => {
            //res接受内容
            list.push(res)
            setList(list)
        })
    }, [])
    useEffect(() => {
        if (list.length > 0) {
            console.log(list)
        }
    }, [list])
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
                    <TextArea onChange={onChange} style={{ width: 1300, height: 50 }} value={value} />
                </div>
                {/* 发送 */}
                <div style={{
                    backgroundColor: 'rgb(65, 168, 99)',
                    marginLeft: 1,
                    padding: '16px 40px',
                    color: '#FFFFFF'
                }} onClick={btn}>发送</div>
            </div>
        </div>
    )
}

export default Tidings
