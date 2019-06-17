<template>
    <div class="first-box">              
        <div class="side-container">
            <h2 class="wenTitle">今日天气</h2>
            <div ><span class="nowTemp">27</span><span class="special">℃<br/>实时</span></div>
            <div>
                <img src="../../../assets/img/weather/0.png" class="weatherIcon"/>
            </div>
            <p class="weatherCont">晴转多云</p>
            <p class="weatherCont">25℃ <span class="split">~</span> 32℃</p>
            <p class="weatherCont">紫外线：较强</p>
            <p class="weatherCont">空气质量：优</p>
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
export default {
    props:['allUseNum','weatherInfo'],
    data() {
        return{
            
        }
    }
}
</script>
