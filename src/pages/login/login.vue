<template>
    <div >
        <div class="login-container">
            <div>
                <h1 class="MainTitle">智慧公厕管理平台</h1>
                <h6>Intelligent Public Toilet Management Platform</h6>
            </div>
            <div class="input-container">
                <el-form ref="form" :model="form" :rules="rules">
                    <el-form-item label="" prop="name">
                        <el-input v-model="form.name"  placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="password">
                        <el-input v-model="form.password" type='password'  placeholder="密码" @keyup.enter.native="onSubmit"></el-input>
                    </el-form-item>
                    <el-form-item class="loginBtn">
                        <el-button class="commonBg" @click="onSubmit">登&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="bgBox">
            <img src="../../assets/img/loginBg.png" class="loginBg"/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form:{
                name:'',
                password:''
            },
            rules:{
                name:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ]
            }
        }
    },
    methods:{
        onSubmit() {
            let self = this;
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let params = new FormData()
                    params.append('username',self.form.name)
                    params.append('password',self.form.password)
                    self.$http.post(self.api.login,params,{
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },                  
                    },function(response){ 
                        if(response.status == 1) {                      
                            self.$store.dispatch('LoginByUsername', 'aaa').then(() => {                           
                                self.$store.dispatch('GenerateRoutes').then(() => {
                                    self.$router.addRoutes(self.$store.getters.addRouters) // 动态添加可访问路由表
                                    
                                })          
                            }).catch(() => {
                            
                            })
                        }else{
                            self.$message.error(response.msg)
                        }
                    },function(response) {

                    })
                } else {
                    return false;
                }
            });
            
            
        }
    }
}
</script>
