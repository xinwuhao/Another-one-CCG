import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // 登录
    {
      path: '/login',
      component: '@/pages/login/login',
      title: '登录',
    },
    // 没有父路由的配置要写在前面
    {
      path: '/',
      component: '@/pages/layout/layout',
      routes: [
        //首页
        {
          path: '/',
          component: '@/pages/index',
          title: '首页',
        },
        // 导航管理
        {
          path: '/navigation',
          component: '@/pages/navigation/navigation',
          title: '导航管理',
        },
        // 轮播图管理
        {
          path: '/rotationChart',
          component: '@/pages/rotationChart/rotationChart',
          title: '轮播图管理',
        },
        // 推荐导航
        {
          path: '/recommend',
          component: '@/pages/recommend/recommend',
          title: '推荐导航',
        },
        // 用户管理
        {
          path: '/customer',
          component: '@/pages/customer/customer',
          title: '用户管理',
        },
        // 添加商品
        {
          path: '/addGoods',
          component: '@/pages/goods/addGoods/addGoods',
          title: '添加商品',
        },
        // 商品分类
        {
          path: '/sortGoods',
          component: '@/pages/goods/sortGoods/sortGood',
          title: '商品分类',
        },
        // 商品模型
        {
          path: '/modelGoods',
          component: '@/pages/goods/modelGoods/modelGoods',
          title: '商品模型',
        },
        // 商品规格
        {
          path: '/normsGoods',
          component: '@/pages/goods/normsGoods/normsGoods',
          title: '商品规格',
        },
        // 商品参数
        {
          path: '/parameterGoods',
          component: '@/pages/goods/parameterGoods/parameterGoods',
          title: '商品参数',
        },
        // 规格参数
        {
          path: '/Sparameters',
          component: '@/pages/goods/Sparameters/Sparameters',
          title: '规格参数',
        },
        // 秒杀管理
        {
          path: '/seckill',
          component: '@/pages/seckill/seckill',
          title: '秒杀管理',
        },
        // 优惠卷管理
        {
          path: '/coupon',
          component: '@/pages/coupon/coupon',
          title: '优惠卷管理',
        },
        // 订单管理
        {
          path: '/order',
          component: '@/pages/order/order',
          title: '订单管理',
        },
        // 通知管理
        {
          path: '/notice',
          component: '@/pages/notice/notice',
          title: '通知管理',
        },
        // 客服消息
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
