<template>
    <div class="render-div">
        <div>
            <p class="dataTitle">今日数据</p>
            <div class="disInline">
                <div class="box">
                    <p>男厕</p>
                    <div class="boxData">111</div>
                </div>
                <div class="box">
                    <p>女厕</p>
                    <div class="boxData">111</div>
                </div>
                <div class="box ">
                    <p>累计人数</p>
                    <div class="boxData borderNo">300</div>
                </div>
            </div>
        </div>
       <div class="mt25">
           <p class="dataTitle">近期数据</p>
            <lineComp 
            class="chart-container" 
            ref="incomeTrendChart" 
            :_id="'incomeTrend'" 
            :_titleText="'近期数据'" 
            :_chartData="incomeTrendData">
            </lineComp>
        </div>
    </div>
</template>
<script>
import lineComp from '../../components/charts/LineComp.vue';
export default {
    data() {
        return {
            incomeTrendData: [
					{	name:'',
						data:{
							'05-01':3.592,
							'05-02':3.905,
							'05-03':4.003,
							'05-04':3.567,
							'05-05':3.876,
							'05-06':3.098,
							'05-07':3.200,
							'05-08':3.808,
							'05-09':2.988,
							'05-10':3.721,
							'05-11':3.770,
							'05-12':4.500,
							'05-13':4.098,
							'05-14':3.087,
							'05-15':4.098,
						}
					}
				],
        }
    },
    components:{
        lineComp
    },
    methods:{

    }
}
</script>
