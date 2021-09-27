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
          path: '/detail',
          component: '@/pages/detail/detail',
          title: '详情',
        }
      ]
    },
  ],
  fastRefresh: {},
})
