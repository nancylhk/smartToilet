import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/Layout/Layout'

const Login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login')
const changePass = r => require.ensure([], () => r(require('@/pages/login/changePass')), 'login')
// 总览
const dataOverView = r => require.ensure([], () => r(require('@/pages/overview/data')), 'overview')
const toiletOverView = r => require.ensure([], () => r(require('@/pages/overview/toiletInfo')), 'overview')
// 用户管理
const userMgt = r => require.ensure([], () => r(require('@/pages/userMgt/index')), 'userMgt')
const userAdd = r => require.ensure([], () => r(require('@/pages/userMgt/add')), 'userMgt')
const userEdit = r => require.ensure([], () => r(require('@/pages/userMgt/edit')), 'userMgt')
// 厕位管理
const toiletSet1 = r => require.ensure([], () => r(require('@/pages/toiletMgt/page1')), 'toiletMgt')
const toiletSet2 = r => require.ensure([], () => r(require('@/pages/toiletMgt/page2')), 'toiletMgt')
const toiletSet3 = r => require.ensure([], () => r(require('@/pages/toiletMgt/page3')), 'toiletMgt')
const toiletSet4 = r => require.ensure([], () => r(require('@/pages/toiletMgt/page4')), 'toiletMgt')
// 设备配置
const deviceSet = r => require.ensure([], () => r(require('@/pages/deviceMgt/index')), 'deviceMgt')
const deviceAdd = r => require.ensure([], () => r(require('@/pages/deviceMgt/add')), 'deviceMgt')
const deviceEdit = r => require.ensure([], () => r(require('@/pages/deviceMgt/edit')), 'deviceMgt')
// 设置
const platformInfo = r => require.ensure([], () => r(require('@/pages/set/platform')), 'set')//平台信息
// 角色管理
const roleMgt = r => require.ensure([], () => r(require('@/pages/roleMgt/index')), 'roleMgt')
// 展示效果
const display = r => require.ensure([], () => r(require('@/pages/display/index')), 'display')
Vue.use(Router)

export const constantRouterMap  =[
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden:true
  },
  {
    path: '/changePass',
    component: Layout,
    hidden:true,
    redirect:'/changePass/page',
    children:[
      {
        path:'page',
        component:changePass,
        hidden:true
      }
    ]
  },
  {
    path: '/toilet',
    component: Layout,
    hidden:true,
    redirect:'/toilet/configures',
    children:[
      {
        path:'configure2',   
        name:'厕位配置2', 
        component:toiletSet2,
        meta:{ title:'厕位配置2'}
      },
      {
        path:'configure3',   
        name:'厕位配置3', 
        component:toiletSet3,
        meta:{ title:'厕位配置3'}
      },
      {
        path:'configure4',   
        name:'厕位配置4', 
        component:toiletSet4,
        meta:{ title:'厕位配置4'}
      }
    ]
  },
]

export const routerMap = {
  '6':{
    path:'overview/data',   
    name:'总览', 
    component:dataOverView,
    meta:{ title:'总览'},
  },
  '1':{
    path:'user/userMgt',   
    name:'用户管理', 
    component:userMgt,
    meta:{ title:'用户管理'},
  },
  '11':{
    path:'user/userMgt',   
    name:'用户维护', 
    component:userMgt,
    meta:{ title:'用户维护'},
  },
  '12':{
    path:'toilet/configure',   
    name:'厕位配置', 
    component:toiletSet1,
    meta:{ title:'厕位配置'}
  },
  '13':{
    path:'device/configure',   
    name:'设备配置', 
    component:deviceSet,
    meta:{ title:'设备配置'}
  },
  '14':{
    path:'platform/info',   
    name:'平台信息', 
    component:platformInfo,
    meta:{ title:'平台信息'}
  },
  '15':{
    path:'display/index',   
    name:'展示效果', 
    component:display,
    meta:{ title:'展示效果'}
  },
  '5':{
    path:'display/index',   
    name:'展示', 
    component:display,
    meta:{ title:'展示'}
  },
  '4':{
    path:'platform/info',   
    name:'设置', 
    component:platformInfo,
    meta:{ title:'设置'}
  },
  '21':{
    path:'overview/data',   
    name:'数据汇总', 
    component:dataOverView,
    meta:{ title:'数据汇总'},
  },
  '2':{
    path:'toilet/configure',   
    name:'厕位管理', 
    component:toiletSet1,
    meta:{ title:'厕位管理'}
  },
  '3':{
    path:'device/configure',   
    name:'设备管理', 
    component:deviceSet,
    meta:{ title:'设备管理'}
  },
  
  '22':{
    path:'overview/toiletInfo',   
    name:'厕位信息', 
    component:toiletOverView,
    meta:{ title:'厕位信息'},
  },
  '16':{
    path:'user/add',   
    name:'用户新增', 
    component:userAdd,
    meta:{ title:'用户新增'},
    hidden:true
  },
  '17':{
    path:'user/edit',   
    name:'用户修改', 
    component:userEdit,
    meta:{ title:'用户修改'},
    hidden:true
  },
  
  
  '18':{
    path:'device/add',   
    name:'设备新增', 
    component:deviceAdd,
    meta:{ title:'设备新增'},
    hidden:true
  },
  '19':{
    path:'device/edit',   
    name:'设备修改', 
    component:deviceEdit,
    meta:{ title:'设备修改'},
    hidden:true
  },
  
}
export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
