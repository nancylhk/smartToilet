<template>
    <div class="render-div"> 
        <p class="dataTitle" style="margin-bottom:0;">今日数据</p>
        <div class="toiletInfo-container">
            <el-row >
                <el-col :span="12">
                    <div class="cinfo-content borderR contentHeight">
                        <p class="info-title" v-if="firstDataInfo.length>0">{{firstDataInfo[0].positionName}}</p>
                        <el-row>
                            <el-col :span="12" class="content" v-for="(item,index) in firstDataInfo" :key='index'>
                                <p class="left-title">{{item.toiletTypeName}}<img :src="item.toiletTypeId=='1'?nanIcon:nvIcon" class="nanicon" /></p>
                                <div class="listContent">设备数：{{item.deviceCount}}</div>
                                <div class="listContent">今日流量：{{item.amount}}</div>
                            </el-col>
                        </el-row>
                        <p class="noData" v-if="firstDataInfo.length==0">无数据</p>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="cinfo-content contentHeight">
                        <p class="info-title" v-if="thirdDataInfo.length>0">{{thirdDataInfo[0].positionName}}</p>
                        <el-row>
                            <el-col :span="12" class="content" v-for="(item,index) in thirdDataInfo" :key='index'>
                                <p class="left-title">{{item.toiletTypeName}}<img :src="item.toiletTypeId=='1'?nanIcon:nvIcon" class="nanicon" /></p>
                                <div class="listContent">设备数：{{item.deviceCount}}</div>
                                <div class="listContent">今日流量：{{item.amount}}</div>
                            </el-col>
                        </el-row>
                        <p class="noData" v-if="thirdDataInfo.length==0">无数据</p>
                    </div>
                </el-col>
            </el-row>
            <!-- <el-row v-if="secondDataInfo.length>0 || forthDataInfo.length>0">
                <el-col :span="12">
                    <div class="cinfo-content borderR contentHeight">
                        <p class="info-title" v-if="secondDataInfo.length>0">{{secondDataInfo[0].positionName}}</p>
                        <el-row>
                            <el-col :span="12" class="content" v-for="(item,index) in secondDataInfo" :key='index'>
                                <p class="left-title">{{item.toiletTypeName}}<img :src="item.toiletTypeId=='1'?nanIcon:nvIcon" class="nanicon" /></p>
                                <div class="listContent">设备数：{{item.deviceCount}}</div>
                                <div class="listContent">今日流量：{{item.amount}}</div>
                            </el-col>
                        </el-row>
                        <p class="noData" v-if="secondDataInfo.length==0">无数据</p>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="cinfo-content contentHeight">
                        <p class="info-title" v-if="forthDataInfo.length>0">{{forthDataInfo[0].positionName}}</p>
                        <el-row>
                            <el-col :span="12" class="content" v-for="(item,index) in forthDataInfo" :key='index'>
                                <p class="left-title">{{item.toiletTypeName}}<img :src="item.toiletTypeId=='1'?nanIcon:nvIcon" class="nanicon" /></p>
                                <div class="listContent">设备数：{{item.deviceCount}}</div>
                                <div class="listContent">今日流量：{{item.amount}}</div>
                            </el-col>
                        </el-row>
                        <p class="noData" v-if="forthDataInfo.length==0">无数据</p>
                    </div>
                </el-col>
            </el-row> -->
            <el-row>
                <el-col :span="12">
                    <div class=" borderR contentHeight">
                        <p class="info-title">第三卫生间</p>
                        <el-row>
                            <el-col :span="12" class="content">
                                <p class="left-title">南区</p>
                                <div class="listContent">设备数：0</div>
                            </el-col>
                            <el-col :span="12" class="content">
                                <p class="left-title">北区</p>
                                <div class="listContent">设备数：0</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="contentHeight">
                        <p class="info-title">母婴室</p>
                        <el-row>
                            <el-col :span="12" class="content">
                                <p class="left-title">南区</p>
                                <div class="listContent">隔间：0</div>
                                <div class="listContent">已使用：0</div>
                            </el-col>
                            <el-col :span="12" class="content">
                                <p class="left-title">北区</p>
                                <div class="listContent">隔间：0</div>
                                <div class="listContent">已使用：0</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            dataInfo:[],
            firstDataInfo:[],
            secondDataInfo:[],
            thirdDataInfo:[],
            forthDataInfo:[],
            nanIcon:require('../../assets/img/nan.png'),
            nvIcon:require('../../assets/img/nv.png'),
        }
    },
    created() {
        this.getDeviceCountByToiletType()
    },
    methods:{
        getDeviceCountByToiletType() {
            let self = this;
            self.$http.get(self.api.getDeviceCountByToiletType, {}, function(response) {
                if(response){
                    self.dataInfo = response.data;
                    self.firstDataInfo = self.dataInfo.filter( e=>{
                        return e.positionId == '1'
                    })
                    self.secondDataInfo = self.dataInfo.filter( e=>{
                        return e.positionId == '2'
                    })
                    self.thirdDataInfo = self.dataInfo.filter( e=>{
                        return e.positionId == '3'
                    })
                    self.forthDataInfo = self.dataInfo.filter( e=>{
                        return e.positionId == '1'
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
