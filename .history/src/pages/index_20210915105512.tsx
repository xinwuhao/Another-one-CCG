import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import dayjs from 'dayjs'
import * as echarts from 'echarts';


const Index = () => {
  let topics = useSelector((state: any) => state.home.topics)
  let arr = useSelector((state: any) => state.order.topics)
  let dispatch = useDispatch()
  let obtain = () => {
    dispatch(({
      type: 'home/getIndex',
      payload: {}
    }))
  }

  // 开始时间
  const start = new Date(new Date().toLocaleDateString()).getTime()
  // 结束时间
  let end = dayjs().endOf('day').valueOf()
  let order1 = () => {
    let option = {
      xAxis: {
        type: 'category',
        data: [
          '0', '1', '2', '3', '4', '5', '6',
          '7', '8', '9', '10', '11', '12',
          '13', '14', '15', '16', '17', '18',
          '19', '20', '21', '22', '23']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: ['0', '2'],
        type: 'line'
      }]
    };

    let chartDom = document.getElementById('main');
    let myChart = echarts.init(chartDom!);
    option && myChart.setOption(option);
  }
  let order = () => {
    dispatch(({
      type: 'order/getOrder',
      payload: {}
    }))
  }



  //进入执行
  useEffect(() => {
    obtain()
    order()
    order1()
    if (arr.length) {
      console.log(arr);
    }
  }, [])
  // useEffect(()=>{
  //   if(arr.length){
  //     order1()
  //   }
  // },[arr])
  return (
    <div style={{ backgroundColor: '#ffffff', width: '100%', padding: 20, height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{
          width: '30%',
          height: 100,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FF4500',
          padding: 20
        }}>
          <div>
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700 }}>{topics.orderCount}</div>
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700 }}>订单总数</div>
          </div>
        </div>
        <div style={{
          width: '30%',
          height: 100,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#00FF7F',
          padding: 20
        }}>
          <div>
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700 }}>{topics.goodsCount}</div>
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700 }}>商品总数</div>
          </div>
        </div>
        <div style={{
          width: '30%',
          height: 100,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#2F4F4F',
          padding: 20
        }}>
          <div>
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700 }}>{topics.userCount}</div>
            <div style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700 }}>用户总数</div>
          </div>
        </div>
      </div>
      {/* 统计图 */}
      <div>
        <div id="main" style={{ width: 600, height: 400 }}></div>
      </div>
    </div>
  )
}

export default Index