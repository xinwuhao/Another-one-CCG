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
    <div style={{ backgroundColor: '#ffffff', width: '100%', padding: 20 }}>
      首页
    </div>
  )
}

export default Index