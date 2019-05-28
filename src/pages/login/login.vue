<template>
    <div>
        <div class="login-container">
            <div>
                <img src=""/>
                <p class="MainTitle">智慧公厕管理平台</p>
            </div>
            <div>
                <el-form ref="form" :model="form" >
                    <el-form-item label="">
                        <el-input v-model="form.name"  placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="form.password" type='password'  placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item class="loginBtn">
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    </el-form-item>
                </el-form>
            </div>
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
            }
        }
    },
    methods:{
        
    }
}
</script>
