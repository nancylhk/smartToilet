<template>
    <div>
        <div class="dataTitle mb0">
            <span>大西侧（女）</span>
        </div>
        <div class="toilet-set-box">
            <el-row :gutter="30">
                <el-col :span="18">
                    <div class="displayBox pad20">
                        <el-row class="toliet-set-container  ">
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="8">
                                        <ul class="toilet2">
                                            <li v-for="o in 6">
                                                <img src="../../assets/img/toiletIcon2.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8" class="borderR">
                                        <ul class="toilet1">
                                            <li v-for="o in 6">
                                                <img src="../../assets/img/toiletIcon1.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="8">
                                        <ul class="toilet2">
                                            <li v-for="o in 6">
                                                <img src="../../assets/img/toiletIcon2.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8" class="borderR">
                                        <ul class="toilet1">
                                            <li v-for="o in 6">
                                                <img src="../../assets/img/toiletIcon1.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="8">
                                        <ul class="toilet2">
                                            <li v-for="o in 6">
                                                <img src="../../assets/img/toiletIcon2.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8" class="borderR">
                                        <ul class="toilet1">
                                            <li v-for="o in 6">
                                                <img src="../../assets/img/toiletIcon1.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="8">
                                        <ul class="toilet2">
                                            <li v-for="o in 6">
                                                <img src="../../assets/img/toiletIcon2.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8">
                                        <ul class="toilet1">
                                            <li v-for="o in 6">
                                                <img src="../../assets/img/toiletIcon1.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="6" class="toiletSet-right-container">
                    <div class='displayBox pad20 box1'>
                        <p>{{nowDate}}&nbsp;&nbsp;&nbsp;&nbsp;{{nowWeek}}</p>
                        <div class="nowTime">{{nowTime}}</div>
                    </div>
                    <div class='displayBox pad20 box2'>
                        <p class="first">气温数据</p>
                        <p>
                            <span class="cleft">温度：</span>
                            <span class="cright">27℃</span>
                        </p>
                        <p>
                            <span class="cleft">湿度：</span>
                            <span class="cright">27℃</span>
                        </p>
                        <p>
                            <span class="cleft">氮气：</span>
                            <span class="cright">27℃</span>
                        </p>
                        <p>
                            <span class="cleft">PM2.5：</span>
                            <span class="cright">56.8PA</span>
                        </p>
                    </div>
                    <div class='displayBox pad20 box3'>
                        <p>当日累计：<span class="commonColor ">110</span></p>
                        <p>累计入厕：<span class="commonColor">1010</span></p>
                    </div>
                </el-col>
            </el-row>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nowTime:'',
            nowDate:'',
            nowWeek:''
        }
    },
    mounted() {
        var self = this;
        var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        var timerID = setInterval(updateTime, 1000);
        updateTime();
        function updateTime() {
            var cd = new Date();
            self.nowTime = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
            self.nowDate = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) ;
            self.nowWeek = week[cd.getDay()]
        };

        function zeroPadding(num, digit) {
            var zero = '';
            for(var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        }
    }
}
</script>
