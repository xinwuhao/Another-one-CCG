import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'

const Index = () => {
  let topics = useSelector((state: any) => state.home.topics)
  let dispatch = useDispatch()
  let obtain = () => {
    dispatch(({
      type: 'home/getIndex',
      payload: {}
    }))
  }
  //进入执行
  useEffect(() => {
    obtain()
  }, [])
  return (
    <div style={{ backgroundColor: '#ffffff', width: '100%', padding: 20,height:'100vh'}}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{
          width: '30%',
          height: 100,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FF4500'
        }}>订单总数</div>
        <div style={{
          width: '30%',
          height: 100,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#00FF7F'
        }}>
          商品总数</div>
        <div style={{
          width: '30%',
          height: 100,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#2F4F4F'
        }}>
          用户总数</div>
      </div>
    </div>
  )
}

export default Index