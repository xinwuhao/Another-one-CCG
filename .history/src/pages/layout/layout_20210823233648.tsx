import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'

const { Header, Sider, Content } = Layout

interface Props {
  children: React.ReactNode
}


const Layouts = (props: Props) => {
  let [collapsed, setCollapsed] = useState<boolean>(false)
  //一级分类
  let principal = [{ name: '首页', icon: 'icon-home', url: '/' },
  { name: '轮播图管理', icon: 'icon-tupian_huaban', url: '/rotationChart' },
  { name: '导航管理', icon: 'icon-daohang', url: '/navigation' },
  { name: '推荐导航', icon: "icon-tuijian", url: '/recommend' },
  { name: '用户管理', icon: "icon-yonghu", url: '/customer' },
  { name: '商品管理', icon: "icon-wangge", url: '' },
  { name: '秒杀管理', icon: "icon-naozhong_o", url: '/seckill' },
  { name: '优惠卷管理', icon: "icon-liwu", url: '/coupon' },
  { name: '订单管理', icon: "icon-daohang", url: '/order' },
  { name: '通知管理', icon: "icon-lound-speaker", url: '/notice' },
  { name: '客户消息', icon: "icon-xiaoxi", url: '/tidings' }]
  //二级分类
  let secondary = [
    { name: '添加商品', icon: 'icon-tianjia', url: '/addGoods' },
    { name: '商品分类', icon: 'icon-fenlei', url: '/sortGoods' },
    { name: '商品模型', icon: 'icon-align-center', url: '/modelGoods' },
    { name: '商品规格', icon: 'icon-iconset0120', url: '/normsGoods' },
    { name: '商品参数', icon: 'icon-fenzhijigou', url: '/parameterGoods' },
    { name: '规格参数', icon: 'icon-Partition', url: '/Sparameters' },
  ]
  let toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {secondary.map((item))}
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: '0 20px', background: '#fff' }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Layouts
