import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import mm from '../../assets/expression.png'
import { Input } from 'antd';

const { TextArea } = Input;

const socket = io('http://localhost:3000', {
    query: {},
    transports: ['websocket', 'polling'],
    timeout: 1000,
})

const Tidings = () => {
    let [value, setValue] = useState<any>()
    let [list, setList] = useState<any>([])
    let onChange = (e: any) => {
        value = e.target.value
        setValue(value)
    };
    let btn = () => {
        // console.log(value)
        socket.emit('event', {
            news: value,
            name: '客服'
        })
        value = ''
        setValue(value)
    }
    useEffect(() => {
        socket.on('broadcast', (res) => {
            //res接受内容
            list.push(res)
            setList(list)
            console.log(list)
        })
    }, [])
    return (
        <div style={{ backgroundColor: '#E6E6FA', padding: 20 }}>
            <div style={{
                overflowY: 'scroll',
                width: '100%',
                height: '70vh',
                backgroundColor: '#F5F5F5',
                padding: 40
            }}>
                <div>
                    {list && list.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                {item.name == '客服' ? <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <div style={{ padding: '5px 10px', backgroundColor: '#1afa29' }}>{item.news}</div>
                                    <div style={{ padding: 10, borderRadius: '100%', backgroundColor: '#FF4500' }}>{item.name}</div>
                                </div> : <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ padding: 10, borderRadius: '100%', backgroundColor: '#FFD700' }}>{item.name}</div>
                                        <div style={{ padding: '5px 10px', backgroundColor: '#1afa29' }}>{item.news}</div>
                                    </div>}

                            </div>
                        )
                    })}
                </div>
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
