import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import dayjs from 'dayjs'
import * as echarts from 'echarts';


const Index = () => {
  let topics = useSelector((state: any) => state.home.topics)
  let arr = useSelector((state: any) => state.order.topics)
  let sort = useSelector((state: any) => state.sort.list)
  let dispatch = useDispatch()
  let [sum, setSum] = useState<any>(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',])
  let [sum2, setSum2] = useState<any>(['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',])
  let [sum1, setsum1] = useState<any>(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'])
  let obtain = () => {
    dispatch(({
      type: 'home/getIndex',
      payload: {}
    }))
  }
  let order1 = () => {
    let option = {
      title: {
        text: '今日订单'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        data: ['订单量合计']
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: sum1
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '订单量合计',
        data: sum,
        type: 'line'
      }]
    };

    let chartDom = document.getElementById('main');
    let myChart = echarts.init(chartDom!);
    option && myChart.setOption(option);
  }
  let order2 = () => {
    let option = {
      color: ['#FFD700'],
      title: {
        text: '今日销售额'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        data: ['销售额合计']
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: sum1
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '销售额合计',
        data: sum2,
        type: 'line'
      }]
    };

    let chartDom = document.getElementById('main1');
    let myChart = echarts.init(chartDom!);
    option && myChart.setOption(option);
  }
  let order = () => {
    dispatch(({
      type: 'order/getOrder',
      payload: {}
    }))
  }
  let sdf = () => {
    dispatch(({
      type: 'sort/getCategory',
      payload: ''
    }))
  }
  // 开始时间
  const start = new Date(new Date().toLocaleDateString()).getTime()
  // 结束时间
  let end = dayjs().endOf('day').valueOf()
  let [list, setList] = useState<any>([])
  let bing = () => {
    let option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'name',
          type: 'pie',
          radius: '100%',
          data: list,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    var chartDom = document.getElementById('main3');
    var myChart = echarts.init(chartDom!);
    option && myChart.setOption(option);
  }
  useEffect(() => {
    if (arr.length) {
      let arr1 = arr && arr.filter((item: any) => {
        let a = Number(Date.parse(item.pay_time))
        return start <= a && a <= end
      })
      arr1.map((item: any) => {
        sum[dayjs(item.pay_time).hour()] += 1
        sum2[dayjs(item.pay_time).hour()] += item.price
      })
      setSum([...sum])
      setSum2([...sum2])
      order1()
      order2()
    }
    if (sort.length) {
      sort.map((item: any) => {
         list.push({
          name: item.title,
          value: item.children.length
        })
      })
      setList(list)
      console.log(list)
    }
  }, [arr, sort]),
    //进入执行
    useEffect(() => {
      obtain()
      order()
      order1()
      bing()
      sdf()
    }, [])
  return (
    <div style={{ backgroundColor: '#ffffff', width: '100%', padding: 20, height: '100%' }}>
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
      {/* 折线统计图 */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20 }}>
        <div id="main" style={{ width: 600, height: 400 }}></div>
        <div id="main1" style={{ width: 600, height: 400 }}></div>
      </div>
      {/* 饼图 */}
      <div style={{ marginTop: 40 }}>
        <div style={{ marginLeft: 140, fontSize: 20, fontWeight: 700 }}>商品分类</div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div id="main3" style={{ width: 1150, height: 400 }}></div>
        </div>
      </div>
    </div>
  )
}

export default Index