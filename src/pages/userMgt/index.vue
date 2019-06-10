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
                <el-form-item label="账户名：">
                    <el-input v-model="form.userName" placeholder="请输入" clearable></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">查询</el-button>
                </el-form-item>
                <el-form-item class="right">
                    
                </el-form-item>
            </el-form>
        </div>
        <p class="dataTitle">
            <span>用户列表</span>
        </p>
        <div class="plr20">
            <table class="tableBox" cellspacing=0>
                <thead>
                    <tr>
                        <th>用户头像</th>
                        <th>账户名</th>
                        <th>用户名</th>
                        <th>性别</th>
                        <th>手机号</th>
                        <th>用户角色</th>
                        <th>注册时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in dataList">
                        <td><img src='../../assets/img/headIcon.png' class="headIcon"/></td>
                        <td>{{item.username}}</td>
                        <td>{{item.realName}}</td>
                        <td>{{item.sex}}</td>
                        <td>{{item.telephone}}</td>
                        <td>{{item.role}}</td>
                        <td>{{item.createTime}}</td>
                        <td>
                            <a class="tedit" @click="edit(item.id)">修改</a>
                            <a class="tdelete" @click="handleDelete(item.id)">删除</a>
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
                userName:''
            },
            dataList:[{id:'xxx'}],
            currentPage:1,
            pageSize:10,
            total:0,
            roleList:[]
        }
    },
    created() {
        this.getRoleList()
        this.getList()
        this.getLength()
    },
    methods:{
        search() {
            this.getList();
            this.getLength();
        },
        getRoleList() {
            let self = this;
            self.$http.get(self.api.userGroupList, {}, function(response) {
                if(response){
                    self.roleList = response
                }else{

                }
            
            }, function(response) {
                //失败回调
            })
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.getList()
        },
        getLength() {
            let self = this;
            self.$http.get(self.api.getUserList, {
                params:{
                    beginRow:'',
                    endRow:'',
                    userName:self.form.userName
                }
            }, function(response) {
                if(response){
                    self.total = response.length;
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
            self.$http.get(self.api.getUserList, {
                params:{
                    beginRow:start,
                    endRow:end,
                    userName:self.form.userName
                }
            }, function(response) {
                if(response){
                    self.dataList = response;
                    self.dataList.forEach(e=>{
                        self.roleList.forEach( role=>{
                            if(e.groupId == role.id ){
                                e.role = role.groupName
                            }
                        })
                        
                    })
                }else{

                }
            
            }, function(response) {
                //失败回调
            })
        },
        add() {
            this.$router.push({
                path:'/user/add'
            })
        },
        edit(id) {
            this.$router.push({
                path:"/user/edit",
                query:{ id:id }
            })
        },
        handleDelete(id) {
            let self = this;
            this.$confirm('此操作将删除该用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let params = new FormData();
                params.append('id', id)
                self.$http.post(self.api.userDelete, params, {
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
