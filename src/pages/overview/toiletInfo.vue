<template>
    <div class="render-div"> 
        <p class="dataTitle" style="margin-bottom:0;">今日数据</p>
        <div class="toiletInfo-container">
            <el-row>
                <el-col :span="12">
                    <div class="cinfo-content borderR contentHeight">
                        <p class="info-title" v-if="dataInfo.length>0">{{dataInfo[0].positionName}}</p>
                        <el-row>
                            <el-col :span="12" class="content" v-for="(item,index) in dataInfo.slice(0,2)" :key='index'>
                                <p class="left-title">{{item.toiletTypeName}}<img :src="item.toiletTypeName=='男厕所'?nanIcon:nvIcon" class="nanicon" /></p>
                                <div class="listContent">设备数：{{item.deviceCount}}</div>
                                <div class="listContent">今日流量：{{item.amount}}</div>
                            </el-col>
                            <!-- <el-col :span="12" class="content">
                                <p class="left-title">女厕<img src="../../assets/img/nv.png" class="nanicon" /></p>
                                <div class="listContent">设备数：1</div>
                                <div class="listContent">今日流量：1</div>
                            </el-col> -->
                        </el-row>
                        <p class="noData" v-if="dataInfo.length==0">无数据</p>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="cinfo-content contentHeight">
                        <p class="info-title" v-if="dataInfo.length>2">{{dataInfo[2].positionName}}</p>
                        <el-row>
                            <el-col :span="12" class="content" v-for="(item,index) in dataInfo.slice(2,4)" :key='index'>
                                <p class="left-title">{{item.toiletTypeName}}<img :src="item.toiletTypeName=='男厕所'?nanIcon:nvIcon" class="nanicon" /></p>
                                <div class="listContent">设备数：{{item.deviceCount}}</div>
                                <div class="listContent">今日流量：{{item.amount}}</div>
                            </el-col>
                        </el-row>
                        <p class="noData" v-if="dataInfo.length<=2">无数据</p>
                    </div>
                </el-col>
            </el-row>
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
                }else{

                }
            
            }, function(response) {
                //失败回调
            })
        }
    }
}
</script>
