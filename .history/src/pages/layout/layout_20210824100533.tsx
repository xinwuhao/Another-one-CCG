import React, { useState } from 'react'
import { Menu, Button } from 'antd';
import {
  HomeOutlined,
  PictureOutlined,
  BarsOutlined,
  ReconciliationOutlined,
  TableOutlined,
  HistoryOutlined,
  AccountBookOutlined,
  NotificationOutlined,
  MessageOutlined,
  FileAddOutlined,
  UserOutlined,
  ProfileOutlined,
  AlignCenterOutlined,
  FileOutlined,
  ApartmentOutlined,
  PartitionOutlined
} from '@ant-design/icons';


// const { Header, Sider, Content } = Layout
// interface Props {
//   children: React.ReactNode
// }
// props: Props

const Layouts = () => {
  //一级分类
  let principal = [
    { name: '首页', icon: HomeOutlined, url: '/' },
    { name: '轮播图管理', icon: PictureOutlined, url: '/rotationChart' },
    { name: '导航管理', icon: BarsOutlined, url: '/navigation' },
    { name: '推荐导航', icon: ReconciliationOutlined, url: '/recommend' },
    { name: '用户管理', icon: UserOutlined, url: '/customer' },
    { name: '商品管理', icon: TableOutlined, url: '' },
    { name: '秒杀管理', icon: HistoryOutlined, url: '/seckill' },
    { name: '优惠卷管理', icon: AccountBookOutlined, url: '/coupon' },
    { name: '订单管理', icon: BarsOutlined, url: '/order' },
    { name: '通知管理', icon: NotificationOutlined, url: '/notice' },
    { name: '客户消息', icon: MessageOutlined, url: '/tidings' }]
  //二级分类
  let secondary = [
    { name: '添加商品', icon: FileAddOutlined, url: '/addGoods' },
    { name: '商品分类', icon: ProfileOutlined, url: '/sortGoods' },
    { name: '商品模型', icon: AlignCenterOutlined, url: '/modelGoods' },
    { name: '商品规格', icon: FileOutlined, url: '/normsGoods' },
    { name: '商品参数', icon: ApartmentOutlined, url: '/parameterGoods' },
    { name: '规格参数', icon: PartitionOutlined, url: '/Sparameters' },
  ]
  // let [collapsed, setCollapsed] = useState<boolean>(false)
  // let toggle = () => {
  //   setCollapsed(!collapsed)
  // }
  return (
    <></>
  )
}

export default Layouts
