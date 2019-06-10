<template>
    <div class="render-div">
        <div>
            <p class="dataTitle">今日数据</p>
            <div class="disInline">
                <div class="box" v-for="item in todayAmount" :key='item.toiletTypeId'>
                    <p>{{item.toiletTypeName}}</p>
                    <div class="boxData">{{item.amount}}</div>
                </div>
                <!-- <div class="box">
                    <p>男厕</p>
                    <div class="boxData">111</div>
                </div>
                <div class="box">
                    <p>女厕</p>
                    <div class="boxData">111</div>
                </div> -->
                <div class="box ">
                    <p>累计人数</p>
                    <div class="boxData borderNo">{{total}}</div>
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
            todayAmount:[
                {
                    amount: 0,
                    toiletTypeId: 2,
                    toiletTypeName: "女厕所"
                },
                {
                    amount: 0,
                    toiletTypeId: 1,
                    toiletTypeName: "男厕所"
                }
            ],
            total:0,
            incomeTrendData: [
                // {	name:'',
                //     data:{
                //         '05-01':3.592,
                //         '05-02':3.905,
                //         '05-03':4.003,
                //         '05-04':3.567,
                //         '05-05':3.876,
                //         '05-06':3.098,
                //         '05-07':3.200,
                //         '05-08':3.808,
                //         '05-09':2.988,
                //         '05-10':3.721,
                //         '05-11':3.770,
                //         '05-12':4.500,
                //         '05-13':4.098,
                //         '05-14':3.087,
                //         '05-15':4.098,
                //     }
                // }
            ],
        }
    },
    components:{
        lineComp
    },
    created() {
        this.getTodayAmount();
        this.getRecentAmount()
    },
    methods:{
        getTodayAmount() {
            let self = this;
            self.$http.get(self.api.getTodayAmount, {}, function(response) {
                if(response){
                    if(response.length==0) {
                        self.todayAmount=[
                            {
                                amount: 0,
                                toiletTypeId: 2,
                                toiletTypeName: "女厕所"
                            },
                            {
                                amount: 0,
                                toiletTypeId: 1,
                                toiletTypeName: "男厕所"
                            }
                        ]
                    }else{
                        self.todayAmount = response;
                    }
                    
                    let total = 0;
                    self.todayAmount.forEach(e=>{
                        total += e.amount
                    })
                    self.total = total
                }else{

                }
            
            }, function(response) {
                //失败回调
            })
        },
        getRecentAmount() {
            let self = this;
            self.$http.get(self.api.getRecentAmount, {}, function(response) {
                if(response){
                    let incomeTrendData = response;
                    let data = {};
                    incomeTrendData.forEach(e=>{
                        data[e.date] = e.amount
                    })
                    self.incomeTrendData.push({
                        name:'',
                        data:data
                    })
                }else{

                }
            
            }, function(response) {
                //失败回调
            })
        }
    }
}
</script>
