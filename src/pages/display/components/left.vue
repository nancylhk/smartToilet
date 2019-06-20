<template>
    <div class="first-box">              
        <div class="side-container">
            <h2 class="wenTitle">今日天气</h2>
            <!-- <div ><span class="nowTemp">27</span><span class="special">℃<br/>实时</span></div> -->
            <div>
                <img :src="weatherIcon['img'+weatherInfo.REGIME_START_PIC_PATH.split('.')[0]]" class="weatherIcon"/>
                <img :src="weatherIcon['img'+weatherInfo.REGIME_END_PIC_PATH.split('.')[0]]" class="weatherIcon" v-if="weatherInfo.REGIME_START_PIC_PATH!=weatherInfo.REGIME_END_PIC_PATH"/>
            </div>
            <p class="weatherCont">{{weatherInfo.REGIME_NAME}}</p>
            <p class="weatherCont">{{weatherInfo.TEMPERATURE.split('/')[0]}} <span class="split" v-if="weatherInfo.TEMPERATURE.split('/').length>1">~</span> <span v-if="weatherInfo.TEMPERATURE.split('/').length>1">{{weatherInfo.TEMPERATURE.split('/')[1]}}</span></p>
            <p class="weatherCont">{{weatherInfo.ULTRAVIOLET_RAY}}</p>
            <p class="weatherCont">{{weatherInfo.AIR_QUALITY}}</p>
        </div>
        <div>
            <h3>当月累计使用人数：</h3>
            <div class="allUseNum">
                <div v-if="allUseNum.length>4"><span>{{allUseNum.length>4?allUseNum.split('')[allUseNum.length-5]:'0'}}</span></div>
                <div><span>{{allUseNum.length>3?allUseNum.split('')[allUseNum.length-4]:'0'}}</span></div>
                <div><span>{{allUseNum.length>2?allUseNum.split('')[allUseNum.length-3]:'0'}}</span></div>
                <div><span>{{allUseNum.length>1?allUseNum.split('')[allUseNum.length-2]:'0'}}</span></div>
                <div><span>{{allUseNum.length>0?allUseNum.split('')[allUseNum.length-1]:'0'}}</span></div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props:['allUseNum'],
    data() {
        return{
            weatherInfo:{
                "WIND": "东风3-4级",
                "REGIME_END_PIC_PATH": "10.png",
                "AIR_QUALITY": "空气质量：良",
                "WEATHER_DATE": 1560960000000,
                "CITY_ID": "1",
                "TEMPERATURE": "22℃/26℃",
                "REGIME_NAME": "中雨转暴雨",
                "WEATHER_ID": "20190620101825000000",
                "REGIME_START_PIC_PATH": "8.png",
                "WEATHER_WEEK": "星期四",
                "ULTRAVIOLET_RAY": "紫外线强度：最弱"
            },
            weatherIcon:{
                img0:require('../../../assets/img/weather/b_0.png'),
                img1:require('../../../assets/img/weather/b_1.png'),
                img2:require('../../../assets/img/weather/b_2.png'),
                img3:require('../../../assets/img/weather/b_3.png'),
                img4:require('../../../assets/img/weather/b_4.png'),
                img5:require('../../../assets/img/weather/b_5.png'),
                img6:require('../../../assets/img/weather/b_6.png'),
                img7:require('../../../assets/img/weather/b_7.png'),
                img8:require('../../../assets/img/weather/b_8.png'),
                img9:require('../../../assets/img/weather/b_9.png'),
                img10:require('../../../assets/img/weather/b_10.png'),
                img11:require('../../../assets/img/weather/b_11.png'),
                img12:require('../../../assets/img/weather/b_12.png'),
                img13:require('../../../assets/img/weather/b_13.png'),
                img14:require('../../../assets/img/weather/b_14.png'),
                img15:require('../../../assets/img/weather/b_15.png'),
                img16:require('../../../assets/img/weather/b_16.png'),
                img17:require('../../../assets/img/weather/b_17.png'),
                img18:require('../../../assets/img/weather/b_18.png'),
                img19:require('../../../assets/img/weather/b_19.png'),
                img20:require('../../../assets/img/weather/b_20.png'),
                img21:require('../../../assets/img/weather/b_21.png'),
                img22:require('../../../assets/img/weather/b_22.png'),
                img23:require('../../../assets/img/weather/b_23.png'),
                img24:require('../../../assets/img/weather/b_24.png'),
                img25:require('../../../assets/img/weather/b_25.png'),
                img26:require('../../../assets/img/weather/b_26.png'),
                img27:require('../../../assets/img/weather/b_27.png'),
                img28:require('../../../assets/img/weather/b_28.png'),
                img29:require('../../../assets/img/weather/b_29.png'),
                img30:require('../../../assets/img/weather/b_30.png'),
                img31:require('../../../assets/img/weather/b_31.png')
            },
            task:''
        }
    },
    mounted() {
        // this.getTodayWeather()
        var self = this;
        self.task = window.setInterval(function() {
            axios({
                method: 'post',
                url: '/weather/getTodayWeather',
                data: {},
            }).then((response) => {
                //  console.log(response.data)
                if(response) {
                    self.weatherInfo = response.data
                }
            })
        },1800000)
    },
    methods:{
        getTodayWeather() {
            let self = this;
            self.$http.get(self.api.getTodayWeather, {}, function(response) {
                if(response){
                    self.weatherInfo = response
                }else{

                }
            
            }, function(response) {
                //失败回调
            })
        }
    },
    beforeDestroy: function () {
        // 页面离开时清除定时器
        clearInterval(this.task);
    }
}
</script>
