import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
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
  ProfileOutlined,
  AlignCenterOutlined,
  FileOutlined,
  ApartmentOutlined,
  PartitionOutlined
} from '@ant-design/icons'

interface Props {
  children: React.ReactNode
}
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Layouts = (props: Props) => {
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

  let state = {
    collapsed: false,
  };

  interface Props {
    children: React.ReactNode
  }
  let [collapsible, setCcollapsible] = useState<boolean>(false)
  let toggle = () => {
    setCcollapsible(!collapsible)
  }
  let onCollapse = (collapsed: any) => {
    console.log(collapsed);
    useState({ collapsed });
  };
  let [onselect, setonselect] = useState<any>()
  let onSelect = (e: any) => {
    console.log(e);
  }
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsible={collapsible}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={principal[0].url} mode="inline" onSelect={onselect}>
            <div>
              {principal.map((item: any, index: any) => {
                if (item.name !== '商品管理') {
                  return (
                    <Menu.Item key={`${item.url}`} icon={<item.icon />}>
                      {item.name}
                    </Menu.Item>
                  )
                }
                else {
                  return (
                    <SubMenu key={`${item.url}`} icon={<item.icon />} title={`${item.name}`}>
                      {secondary.map((item1: any, index: number) => {
                        <Menu.Item key={`${item1.url}`} icon={<item1.icon />}>{item1.name}</Menu.Item>
                      })}

                    </SubMenu>
                  )
                }
              })}
            </div>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
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
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Layouts
