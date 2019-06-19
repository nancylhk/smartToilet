<template>
    <div class="headTop">
        <!-- <div class="first-Head-Box">江苏<em class="dian"></em>苏州</div> -->
        <!-- <div class="first-Head-Box">
            <img src="../../../assets/img/logo.png" class="logoPic"/>
            <div class="logoSign">
                <p class="sign">苏高速<em class="dian"></em>茉莉花</p>
                <p class="englishSign">JS EXPRESSWAY JASMINE</p>
            </div>
        </div> -->
        <div class="first-Head-Box" @click="goBack">
            <img src="../../../assets/img/logoTeam5.png" class="logoPic2"/>
        </div>
        <div class="second-Head-Box">
            <img src="../../../assets/img/title.png" />
        </div>
        <div class="last-Head-Box">
            <p class="nowDate">{{nowDate}}({{nowWeek}})</p>
            <p class="nowTime">{{nowTime}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:['lastPath'],
    data() {
        return {
            nowDate:'',
            nowWeek:'',
            nowTime:'',
        }
    },
    mounted(){
        var self = this;
        var week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        var timerID = setInterval(updateTime, 1000);
        updateTime();
        function updateTime() {
            var cd = new Date();
            self.nowTime = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
            // self.nowDate = zeroPadding(cd.getFullYear(), 4) + '年' + zeroPadding(cd.getMonth()+1, 2) + '月' + zeroPadding(cd.getDate(), 2) + '日' ;
            self.nowDate = zeroPadding(cd.getMonth()+1, 2) + '月' + zeroPadding(cd.getDate(), 2) + '日' ;
            self.nowWeek = week[cd.getDay()]
        };
        function zeroPadding(num, digit) {
            var zero = '';
            for(var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        }      
    },
    methods:{
        goBack() {
            if(this.lastPath == '/login' || this.lastPath == '/'){
                this.$store.dispatch('LogOut');
                location.reload()
            }else{
                this.$router.back(-1)
            }
        },
    }
}
</script>
