<template>
    <div class="render-div">
        <div class="dataTitle">
            <span>搜索条件</span>
            <div @click="add" class="right cp">
                <span>新增</span>
                <i class="fa fa-plus-circle commonColor" aria-hidden="true"></i>
            </div>
        </div>
        <div class="plr20">
            <el-form :inline="true" :model="form" class="demo-form-inline search-container">
                <el-form-item label="设备编号：">
                    <el-input v-model="form.deviceCode" placeholder="请输入" clearable></el-input>
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
                        <th>设备编号</th>
                        <th>设备名称</th>
                        <th>设备使用状态</th>
                        <th>设备厂家</th>
                        <th>创建时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in dataList">
                        <td>{{item.deviceCode}}</td>
                        <td>{{item.deviceName}}</td>
                        <td>{{item.statusC}}</td>
                        <td>{{item.productor}}</td>
                        <td>{{item.createTimes}}</td>
                        <td>
                            <a class="tedit" @click="edit(item.deviceId,item.status)">修改</a>
                            <a class="tdelete" v-if="item.status == 0" @click="handleDelete(item.deviceId)">删除</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="textRight pad20">
                <el-pagination
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="pageSize"
                layout="total, prev, pager, next, jumper"
                :total="total"
                v-if="total>0">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            form:{
                deviceCode:''
            },
            dataList:[],
            currentPage:1,
            pageSize:10,
            total:0,
            roleList:[]
        }
    },
    created() {
        this.getList()
        this.getLength()
    },
    methods:{
        search() {
            let self = this;
            if(self.form.deviceCode != '') {           
                self.$http.get(self.api.getDeviceByDeviceCode, {
                    params:{
                        deviceCode:self.form.deviceCode
                    }
                }, function(response) {
                    if(response.status == 1){
                        self.dataList = response.data;
                        self.total = response.data.length;
                        self.dataList.forEach((e) => {
                            if(e.createTime) {                     
                                let date = new Date(parseInt(e.createTime));
                                let Y = date.getFullYear() + '-'
                                let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
                                let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
                                let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
                                let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
                                let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
                                e.createTimes = Y + M + D + h + m + s
                            }
                            if(e.status == 0) {
                                e.statusC = '未绑定'
                            }else if(e.status == 1) {
                                e.statusC = '已绑定'
                            }else if(e.status == 2) {
                                e.statusC = '故障中'
                            }else if(e.status == 3) {
                                e.statusC = '维修中'
                            }
                        })
                    }else{

                    }
                
                }, function(response) {
                    //失败回调
                })
            }else{
                self.getList();
                self.getLength()
            }
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.getList()
        },
        getLength() {
            let self = this;
            self.$http.get(self.api.getDevice, {
                params:{
                    satrt:'',
                    end:'',
                    status:'',
                    deviceId:''
                }
            }, function(response) {
                if(response.status == 1){
                    self.total = response.data.length;
                }else{

                }
            
            }, function(response) {
                //失败回调
            })
        },
        getList() {
            let self = this;
            let start = self.pageSize * (self.currentPage - 1) + 1;
            let end = self.currentPage * self.pageSize;
            self.$http.get(self.api.getDevice, {
                params:{
                    start:start,
                    end:end,
                    status:'',
                    deviceId:''
                }
            }, function(response) {
                if(response.status == 1){
                    self.dataList = response.data;
                    self.dataList.forEach((e) => {
                        if(e.createTime) {                     
                            let date = new Date(parseInt(e.createTime));
                            let Y = date.getFullYear() + '-'
                            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
                            let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
                            let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
                            let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
                            let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
                            e.createTimes = Y + M + D + h + m + s
                        }
                        if(e.status == 0) {
                            e.statusC = '未绑定'
                        }else if(e.status == 1) {
                            e.statusC = '已绑定'
                        }else if(e.status == 2) {
                            e.statusC = '故障中'
                        }else if(e.status == 3) {
                            e.statusC = '维修中'
                        }
                    })
                }else{

                }
            
            }, function(response) {
                //失败回调
            })
        },
        add() {
            this.$router.push({
                path:'/device/add'
            })
        },
        edit(id,status) {
            this.$router.push({
                path:"/device/edit",
                query:{ id:id,status:status }
            })
        },
        handleDelete(id) {
            let self = this;
            this.$confirm('此操作将永久删除该设备, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let params = new FormData();
                params.append('deviceId', id);
                self.$http.post(self.api.deleteDevice, params, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                }, function (response) {
                    if(response) {
                        self.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        self.getList()
                    }else{
                        self.$message({
                            type: 'error',
                            message: '删除失败'
                        });
                    }
                }, function (response) {
                //失败回调
                })
                
            }).catch(() => {
                self.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        }
    }
}
</script>
