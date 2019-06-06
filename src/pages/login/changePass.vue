<template>
    <div class="render-div">
        <div class="dataTitle">
            <span>修改密码</span>
        </div>
        <el-form ref="form" :model="form" label-width="160px" :rules="rules" class="addForm">
            <el-form-item label="原密码：" prop="olderPassword">
                <el-input v-model="form.olderPassword" type="password"></el-input>
            </el-form-item>
            <el-form-item label="新密码：" prop="newPassword">
                <el-input v-model="form.newPassword" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="confirmPass">
                <el-input v-model="form.confirmPass" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="changePass()">修改密码</el-button>
                <!-- <el-button @click="back()">取消</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.form.newPassword) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        return {
            form:{
                olderPassword: "",
                newPassword: "",
                confirmPass:''
            },
            rules:{
                olderPassword:[
                    { required:true,message:'请输入原密码',trigger: 'blur'	}
                ],
                newPassword:[
                    { required:true,message:'请选择设备使用状态',trigger: 'change'},
                ],
                confirmPass:[
                    { required:true,validator:validatePass2,trigger: 'blur'},
                ]
            }
        }
    },
    created() {
        
    },
    methods:{
        back() {
            this.$router.back(-1)
        },
        changePass() {
            let self = this;
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let params = new FormData();
                    params.append('olderPassword', self.form.olderPassword)
                    params.append('newPassword', self.form.newPassword)
                    self.$http.post(self.api.userPasswordUpdate, params, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                    }, function (response) {
                        if(response.status == 1) {
                            self.$store.dispatch('LogOut');
                            self.$message({
                                type: 'success',
                                message: '修改成功，页面即将跳转至登录页',
                                duration: 1000,
                                onClose: function() {
                                    location.reload();
                                }
                            });
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
