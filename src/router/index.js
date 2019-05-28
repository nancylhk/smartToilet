import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/Layout/Layout'

const Login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login')
// 总览
const dataOverView = r => require.ensure([], () => r(require('@/pages/overview/data')), 'overview')
const toiletOverView = r => require.ensure([], () => r(require('@/pages/overview/toiletInfo')), 'overview')
// 用户管理
const userMgt = r => require.ensure([], () => r(require('@/pages/userMgt/userMgt')), 'userMgt')
const userAdd = r => require.ensure([], () => r(require('@/pages/userMgt/add')), 'userMgt')
const userEdit = r => require.ensure([], () => r(require('@/pages/userMgt/edit')), 'userMgt')
// 厕位管理
const toiletSet = r => require.ensure([], () => r(require('@/pages/toiletMgt/toiletSet')), 'toiletMgt')
// 设备配置
const deviceSet = r => require.ensure([], () => r(require('@/pages/deviceMgt/deviceSet')), 'deviceMgt')
const deviceAdd = r => require.ensure([], () => r(require('@/pages/deviceMgt/add')), 'deviceMgt')
// 设置
const platformInfo = r => require.ensure([], () => r(require('@/pages/set/platform')), 'set')//平台信息
// 角色管理
const roleMgt = r => require.ensure([], () => r(require('@/pages/roleMgt/index')), 'roleMgt')
Vue.use(Router)

export const constantRouterMap  =[
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/overview',
    component: Layout,
    redirect:'/overview/data',
    children:[
      {
        path:'data',
        component:dataOverView,
        meta:{ title:'数据汇总'}
      },
      {
        path:'toiletInfo',
        component:toiletOverView,
        meta:{ title:'厕位信息' }
      },
    ]
  },
  {   
    path: '/set',
    component: Layout,
    redirect:'/set/platformInfo',
    children:[
      {
        path:'platformInfo',
        component:platformInfo,
        meta:{ title:'平台信息'}
      },
      {
        path:'deviceSet',
        component:deviceSet,
        meta:{ title:'设备配置'}
      },
      {
        path:'deviceAdd',
        component:deviceAdd,
        meta:{ title:'设备配置'}
      },
    ]
  }
]
export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
