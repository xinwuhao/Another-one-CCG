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
          path: '/login',
          component: '@/pages/login/login',
          title: '登录',
        },
      ]
    },
  ],
  fastRefresh: {},
})
