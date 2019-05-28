<template>
    <div>
        <div class="dataTitle">
            <span>搜索条件</span>
            <div @click="add" class="right cp">
                <span class="commonColor">新增</span>
                <i class="fa fa-plus commonColor" aria-hidden="true"></i>
            </div>
        </div>
        <div class="plr20">
            <el-form :inline="true" :model="form" class="demo-form-inline search-container">
                <el-form-item label="设备ID：">
                    <el-input v-model="form.user" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">查询</el-button>
                </el-form-item>
                <el-form-item class="right">
                    
                </el-form-item>
            </el-form>
        </div>
        <p class="dataTitle">
            <span>设备列表</span>
        </p>
        <div class="plr20">
            <table class="tableBox" cellspacing=0>
                <thead>
                    <tr>
                        <th>设备ID</th>
                        <th>设备名称</th>
                        <th>设备使用状态</th>
                        <th>设备厂家</th>
                        <th>使用时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in dataList">
                        <td>{{item.id}}</td>
                        <td>{{item.id}}</td>
                        <td>{{item.id}}</td>
                        <td>{{item.id}}</td>
                        <td>{{item.id}}</td>
                        <td>
                            <a class="tedit">修改</a>
                            <a class="tdelete">删除</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            form:{

            },
            dataList:[{id:'xxx'}]
        }
    },
    methods:{
        search() {

        },
        add() {
            this.$router.push({
                path:'/set/deviceAdd'
            })
        }
    }
}
</script>
