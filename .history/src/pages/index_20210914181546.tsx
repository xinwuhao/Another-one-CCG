import React from 'react'
import { useSelector, useDispatch } from 'umi'

const Index = () => {
  let topics = useSelector((state: any) => state.home.topics)
  let dispatch = useDispatch()
  let obtain = () => {
    dispatch(({
      type: 'home/getBanner',
      payload: {}
    }))
  }
  return (
    <div>
      首页
    </div>
  )
}

export default Index