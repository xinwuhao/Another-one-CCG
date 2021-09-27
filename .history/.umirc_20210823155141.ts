import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // 没有父路由的配置要写在前面
    {
      path: '/',
      component: '@/pages/layout/layout',
      routes: [
        {
          path: '/',
          component: '@/pages/index',
          title: '首页',
        },
        {
          path: '/login',
          component: '@/pages/login/login',
          title: '登录',
        },
        {
          path: '/navigation',
          component: '@/pages/navigation/navigation',
          title: '导航管理',
        },
        {
          path: '/rotationChart',
          component: '@/pages/rotationChart/rotationChart',
          title: '轮播图管理',
        },
        {
          path: '/recommend',
          component: '@/pages/recommend/recommend',
          title: '推荐导航',
        },
        {
          path: '/customer',
          component: '@/pages/customer/customer',
          title: '用户管理',
        },
        {
          path: '/goods',
          component: '@/pages/goods/goods',
          title: '商品管理',
        },
        {
          path: '/seckill',
          component: '@/pages/seckill/seckill',
          title: '秒杀管理',
        },
        {
          path: '/notice',
          component: '@/pages/notice/notice',
          title: '通知管理',
        }，
        {
          path: '/tidings',
          component: '@/pages/tidings/tidings',
          title: '客服消息',
        }
      ]
    },
  ],
  fastRefresh: {},
})
