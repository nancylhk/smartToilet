<template>
    <div class="left-container">
      <div class="bigBox">
        <el-popover
        placement="right"
        width="60"
        trigger="hover">
        <p @click="changePass">修改密码</p>
          <div class="headBox" slot="reference">
            <div>
              <img src="../../../assets/img/headIcon.jpg" class="headIcon"/>
              <p>戚薇</p>
            </div>
          </div>
        </el-popover>
      </div>
      <el-menu
      router
      class="el-menu-vertical-demo">
        <template v-for="item in routeList" v-if="!item.hidden ">
          <el-submenu :index="item.name" :key="item.name" >
            <template slot="title">
              <i :class="item.icon" class="fa fa-fw"></i>
              <span>{{item.meta.title}}</span>
            </template>
            <template v-for="child in item.children" v-if="!child.hidden">
              <el-menu-item :index="item.path + '/'+child.path.split('/')[0]+'/'+child.path.split('/')[1]" >{{child.name}}</el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </div>
</template>
<script>
import display from '../../display/index'
export default {

    computed: {
        routeList() {
            return this.$store.getters.permission_routers
        }
    },
    mounted() {
      // // console.log(this.routeList)
      // this.routeList.push({
      //   icon: "fa-cog ",
      //   meta:{ title:'展示效果'},
      //   name:'5',
      //   children:[
      //     {
      //       path:'display/index',
      //       name: '展示',
      //       component:display,
      //       meta:{ title:'展示效果'},
      //     }
      //   ]
      // })
    },
    methods:{
      changePass() {
        this.$router.push({
          path:'/changePass/page'
        })
      }
    }
}
</script>
