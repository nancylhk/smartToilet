<template>
    <div class="render-div">
        <div class="dataTitle">
            <span>修改用户信息</span>
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
                    :label="item.groupName" 
                    :value="item.id" 
                    v-for="item in roleList" 
                    :key="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="所在城市：" prop="groupId">
                <el-select v-model="form.cityId" >
                    <el-option 
                    :label="item.cityName" 
                    :value="item.cityId" 
                    v-for="item in cityList" 
                    :key="item.cityId">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onEdit()">修改</el-button>
                <el-button @click="back()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        var validateTelephone = (rule, value, callback) => {
            const reg = /^\d{11}$/
            
            if(value === '') {
                callback(new Error('请输入手机号'));
                // console.log(value)
            } else if(reg.test(this.form.telephone)) {
                callback();			
            } else {
                callback(new Error('手机号码格式错误'));
            }
        };
        return {
            form:{
                groupId: "",
                realName: "",
                sex: '',
                telephone: '',
                username: "",
                cityId:''
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
                    // { required:true,message:'请输入联系方式',trigger: 'blur'},
                    { validator:validateTelephone,trigger: 'blur',required:true	}
                ],
                groupId:[
                    { required:true,message:'请选择角色',trigger: 'change'},
                ]
            },
            roleList:[],
            cityList:[]
        }
    },
    created() {
        this.getRoleList();
        this.getCityList()
        this.getInfo()
        
    },
    methods:{
        back() {
            this.$router.back(-1)
        },
        // 角色列表
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
        // 城市列表
        getCityList() {
            let self = this;
            self.$http.get(self.api.getCityList, {}, function(response) {
                if(response){
                    self.cityList = response;
                    self.cityList.forEach(e=>{
                        e.cityId = ''+e.cityId
                    })
                }else{

                }
            
            }, function(response) {
                //失败回调
            })
        },
        getInfo() {
            let self = this;
            self.$http.get(self.api.queryUserById, {
                params:{
                    id:self.$route.query.id
                }
            }, function(response) {
                if(response){
                    self.form= response;
                }else{

                }     
            }, function(response) {
                //失败回调
            })
        },
        onEdit() {
            let self = this;
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let params = new FormData();
                     params.append('id', self.$route.query.id)
                    params.append('userName', self.form.username)
                    params.append('realName', self.form.realName)
                    params.append('groupId', self.form.groupId)
                    params.append('sex', self.form.sex)
                    params.append('telephone', self.form.telephone)
                    params.append('cityId', self.form.cityId)
                    self.$http.post(self.api.userUpdate, params, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                    }, function (response) {
                        if(response.status == 1) {
                            self.$message({
                                type: 'success',
                                message: '修改成功!'
                            });
                            setTimeout(function() {
                                self.$router.push({
                                    path:'/user/userMgt'
                                })
                            },1500)
                            
                        }else{
                            self.$message({
                            type: 'error',
                            message: '修改失败'
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
