import React from 'react'
import { useSelector, useDispatch } from 'umi'

const Index = () => {
  let topics = useSelector((state: any) => state.getIndex.topics)
  let dispatch = useDispatch()
  return (
    <div>
      首页
    </div>
  )
}

export default Index