<template>
    <div>
        <div class="dataTitle">
            <span>添加用户信息</span>
        </div>
        <el-form ref="form" :model="form" label-width="120px" :rules="rules" class="addForm">
            <el-form-item label="账户名称：" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="性别：" prop="sex">
                <el-select v-model="form.sex" placeholder="请选择性别">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="联系人名：" prop="realName">
                <el-input v-model="form.realName"></el-input>
            </el-form-item>
            <el-form-item label="联系方式：" prop="telephone">
                <el-input v-model="form.telephone"></el-input>
            </el-form-item>
            <el-form-item label="账户角色：" prop="groupId">
                <el-select v-model="form.groupId" >
                    <el-option 
                    :label="item.label" 
                    :value="item.value" 
                    v-for="item in roleList" 
                    :key="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onAdd()">新增</el-button>
                <el-button @click="back()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form:{
                groupId: "",
                realName: "",
                sex: '',
                telephone: '',
                username: "",
            },
            rules:{
                username:[
                    { required:true,message:'请输入账户名称',trigger: 'blur'},
                ],
                sex:[
                    { required:true,message:'请选择性别',trigger: 'change'},
                ],
                realName:[
                    { required:true,message:'请输入联系人姓名',trigger: 'blur'},
                ],
                telephone:[
                    { required:true,message:'请输入联系方式',trigger: 'blur'},
                ],
                groupId:[
                    { required:true,message:'请选择角色',trigger: 'change'},
                ]
            },
            roleList:[]
        }
    },
    created() {
        this.getRoleList()
    },
    methods:{
        back() {
            this.$router.back(-1)
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
        onAdd() {
            let self = this;
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let params = new FormData();
                     params.append('userName', self.form.userName)
                    params.append('realName', self.form.realName)
                    params.append('groupId', self.form.groupId)
                    params.append('sex', self.form.sex)
                    params.append('telephone', self.form.telephone)
                    params.append('cityId', self.form.cityId)
                    self.$http.post(self.api.userAdd, params, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                    }, function (response) {
                        if(response.status == 1) {
                            self.$message({
                            type: 'success',
                            message: '添加成功!'
                            });
                            self.$router.back(-1)
                        }else{
                            self.$message({
                            type: 'error',
                            message: response.msg
                            });
                        }
                    }, function (response) {
                    //失败回调
                    })
                } else {
                    return false;
                }
            });
        }
    }
}
</script>
