import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import mm from '../../assets/expression.png'
import right from '../../assets/right.png'
import Left from '../../assets/Left.png'
import { Input } from 'antd'
import emoji from '../../lib/emoji'

const { TextArea } = Input;

const socket = io('http://localhost:3000', {
    query: {},
    transports: ['websocket', 'polling'],
    timeout: 1000,
})

const Tidings = () => {
    let [emojiImg, setEmojiImg] = useState<any>(emoji)
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
            setList([...list])
            // console.log(list)
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
                                {item.name == '客服' ? <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 20 }}>
                                    <div style={{ padding: '5px 10px', backgroundColor: '#1afa29' }}>{item.news}</div>
                                    <div>
                                        <img src={right} style={{ width: 15, height: 20, paddingTop: 5, position: 'relative', right: 2 }} />
                                    </div>
                                    <div style={{ padding: 10, borderRadius: '100%', backgroundColor: '#FF4500' }}>{item.name}</div>
                                </div> : <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                                        <div style={{ padding: 10, borderRadius: '100%', backgroundColor: '#FFD700' }}>{item.name}</div>
                                        <div>
                                            <img src={Left} style={{ width: 15, height: 20, paddingTop: 5, position: 'relative', left: 2 }} />
                                        </div>
                                        <div style={{ padding: '5px 10px', backgroundColor: '#FFFFFF' }}>{item.news}</div>
                                    </div>}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div style={{
                width: '100%',
                padding: 20,
                backgroundColor: '#FFFFFF',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {emojiImg && emojiImg.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <div style={{ position: 20 }}>{item}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Tidings
