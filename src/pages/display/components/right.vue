<template>
    <div class="three-box">            
        <div class="side-container threeBox">
            <div class="useList">
                <span class="leftpan">全&nbsp;部：</span>
                <span class="rightpan blue1">{{allToilet}}</span>
            </div>
            <div class="useList">
                <span class="leftpan">使&nbsp;用：</span>
                <span class="rightpan red1">{{inuse}}</span>
            </div>
            <div class="useList">
                <span class="leftpan">空&nbsp;位：</span>
                <span class="rightpan green1">{{allToilet-inuse}}</span>
            </div>
            <div class="useList">
                <span class="leftpan">故&nbsp;障：</span>
                <span class="rightpan orange1">{{badNum}}</span>
            </div>
            <div>
                <ringComp class="ring-income" ref="yearOutcomeChart" 
                :_id="'yearOutcome'" 
                :_chartData="ringData" :_color="'#2aafaf'">
                </ringComp>
            </div>
        </div>
        <div>
            <h3>当日累计使用人数：</h3>
            <div class="allUseNum">
                <div v-if="todayUseNum.length>4"><span>{{todayUseNum.length>4?todayUseNum.split('')[todayUseNum.length-5]:'0'}}</span></div>
                <div><span>{{todayUseNum.length>3?todayUseNum.split('')[todayUseNum.length-4]:'0'}}</span></div>
                <div><span>{{todayUseNum.length>2?todayUseNum.split('')[todayUseNum.length-3]:'0'}}</span></div>
                <div><span>{{todayUseNum.length>1?todayUseNum.split('')[todayUseNum.length-2]:'0'}}</span></div>
                <div><span>{{todayUseNum.length>0?todayUseNum.split('')[todayUseNum.length-1]:'0'}}</span></div>
            </div>
        </div>
    </div>
</template>
<script>
import ringComp from '../../../components/charts/RingComp.vue';
export default {
    props:['todayUseNum','allToilet','inuse','badNum'],
    components:{
        ringComp
    },
    data() {
        return{

        }
    },
    computed: {
        ringData() {
            return parseFloat((this.inuse/this.allToilet*100).toFixed(2))
        }
    },
    mounted() {
        // this.console()
    },
    methods:{
        console() {
            console.log(this.inuse);
            console.log(this.allToilet)
            console.log(this.ringData)
        }
    }
}
</script>