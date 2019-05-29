<template>
    <div class="head-container">
        <div class="left">
            <img src="../../../assets/img/gslogo.png" class="gslogo"/>
            <span class="head-title">苏高信智慧公厕管理平台</span>
        </div>
        <div class="right headRight cp" @click="logout">
            <span>退出</span>
            <i class="fa fa-power-off" aria-hidden="true"></i>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        logout() {
            let self = this;
            self.$store.dispatch('LogOut');
            self.$message({
                type: 'success',
                message: '退出成功，页面即将跳转至登录页',
                duration: 1000,
                onClose: function() {
                    location.reload();
                }
            });
        }
    }
}
</script>
