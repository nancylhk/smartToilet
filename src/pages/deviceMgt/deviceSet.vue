<template>
    <div>
        <div>
            <el-form :inline="true" :model="form" class="demo-form-inline">
                <el-form-item label="">
                    <el-input v-model="form.user" placeholder="输入设备ID"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">查询</el-button>
                </el-form-item>
                <el-form-item class="right">
                    <el-button type="danger" @click="add" >新增</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
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
                            <el-button type="primary" size="mini">修改</el-button>
                            <el-button type="danger" size="mini">删除</el-button>
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
