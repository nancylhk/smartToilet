<template>
    <div>
        <div class="dataTitle mb0">
            <span>东侧（女）</span>
        </div>
        <div class="toilet-set-box toilet-set-box2">
            <el-row :gutter="30">
                <el-col :span="24">
                    <div class="displayBox pad20">
                        <div class="bindExplain">
                            <span class="bind"><em></em>已绑定设备</span>
                            <span class="unbind"><em></em>未绑定设备</span>
                        </div>
                        <el-row class="toliet-set-container  female">
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="8">
                                        <ul class="toilet2">
                                            <!-- <li>
                                                <img src="../../assets/img/tuoba.png" />
                                            </li> -->
                                            <li v-for="o in allList.slice(0,7)" :key="o.toiletId" @click="set(o.toiletId)" class="cp hasBox">
                                                <img src="../../assets/img/dun5.png" v-if="o.style==0"/>
                                                <img src="../../assets/img/toiletIcon2.png" v-if="o.style==1"/>
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>    
                                                <div class="hoverBox">点击进行设备绑定</div>                                                                          
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8" class="borderR">
                                        <ul class="toilet1 sRbox5">
                                            <li v-for="o in allList.slice(7,12)" :key="o.toiletId" @click="set(o.toiletId)" class="cp hasBox">
                                                
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                                <img src="../../assets/img/toiletIcon1.png" v-if="o.style==1"/>
                                                <img src="../../assets/img/dun6.png" v-if="o.style==0"/>
                                                <div class="hoverBox">点击进行设备绑定</div>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="8" class="borderL2">
                                        <ul class="toilet2 sLbox5">
                                            <li v-for="o in allList.slice(12,17)" :key="o.toiletId" @click="set(o.toiletId)" class="cp hasBox">
                                                <img src="../../assets/img/toiletIcon2.png" v-if="o.style==1"/>
                                                <img src="../../assets/img/dun5.png" v-if="o.style==0"/>
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                                <div class="hoverBox">点击进行设备绑定</div>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8" class="borderR">
                                        <ul class="toilet1 sRbox5">
                                            <li v-for="o in allList.slice(17,22)" :key="o.toiletId" @click="set(o.toiletId)" class="cp hasBox">                                      
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                                <img src="../../assets/img/toiletIcon1.png" v-if="o.style==1"/>
                                                <img src="../../assets/img/dun6.png" v-if="o.style==0"/>
                                                <div class="hoverBox">点击进行设备绑定</div>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="8" class="borderL">
                                        <ul class="toilet2 sLbox5">
                                            <li v-for="o in allList.slice(22,27)" :key="o.toiletId" @click="set(o.toiletId)" class="cp hasBox">
                                                <img src="../../assets/img/toiletIcon2.png"  v-if="o.style==1"/>
                                                <img src="../../assets/img/dun5.png" v-if="o.style==0"/>
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                                <div class="hoverBox">点击进行设备绑定</div>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8" class="borderR">
                                        <ul class="toilet1 sRbox5">
                                            <li v-for="o in allList.slice(27,32)" :key="o.toiletId" @click="set(o.toiletId)" class="cp hasBox">
                                               
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                                 <img src="../../assets/img/toiletIcon1.png"  v-if="o.style==1"/>
                                                <img src="../../assets/img/dun6.png" v-if="o.style==0"/>
                                                <div class="hoverBox">点击进行设备绑定</div>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="8" class="borderL">
                                        <ul class="toilet2 sLbox5">
                                           <li v-for="o in allList.slice(32,37)" :key="o.toiletId" @click="set(o.toiletId)" class="cp hasBox">
                                                <img src="../../assets/img/toiletIcon2.png" v-if="o.style==1"/>
                                                <img src="../../assets/img/dun5.png" v-if="o.style==0"/>
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                                <div class="hoverBox">点击进行设备绑定</div>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8">
                                        <ul class="toilet1">
                                            <li v-for="o in allList.slice(37,44)" :key="o.toiletId" @click="set(o.toiletId)" class="cp hasBox">
                                                
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                                <img src="../../assets/img/toiletIcon1.png" v-if="o.style==1"/>
                                                <img src="../../assets/img/dun6.png" v-if="o.style==0"/>
                                                <div class="hoverBox">点击进行设备绑定</div>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <!-- <el-col :span="6" class="toiletSet-right-container">
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
                </el-col> -->
            </el-row>
            <!-- 设备和厕位绑定弹框 -->
            <el-dialog
            title="厕位配置"
            :custom-class="'toiletSetDialog'"
            :visible.sync="dialogVisible"
            width="380px"
            :before-close="handleClose1">
                <el-form ref="form" :model="form" label-width="100px" :rules="rules">
                    <el-form-item label="此厕位号：" prop="toiletId" >
                        <el-input v-model="form.toiletId" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="设备名称：" prop="deviceCode">
                        <el-select v-model="form.deviceCode" placeholder="请选择设备">
                            <el-option
                            v-for="item in unBindDeviceList"
                            :key="item.deviceId"
                            :label="item.deviceName"
                            :value="item.deviceId">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="handleClose1">取 消</el-button>
                    <el-button type="primary" @click="handleBind">绑 定</el-button>
                </span>
            </el-dialog>
            <!-- 解绑 -->
            <el-dialog
            title="解绑设备"
            :visible.sync="unBindDialogVisible"
            width="380px"
            :before-close="handleClose2">
                <el-form ref="unbindForm" :model="unbindForm" label-width="100px" :rules="rules">
                    <el-form-item label="此厕位号：" prop="toiletId" >
                        <el-input v-model="unbindForm.toiletId" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="设备名称：" prop="deviceCode">
                        <el-input v-model="unbindForm.deviceCode" readonly="readonly"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="handleClose2">取 消</el-button>
                    <el-button type="primary" @click="handleUnBind">解 绑</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nowTime:'',
            nowDate:'',
            nowWeek:'',
            dialogVisible:false,
            unBindDialogVisible:false,
            unBindDeviceList:[],
            allList:[ 
                {toiletId:'45',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'46',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'47',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'48',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'49',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'50',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'51',deviceCode:'',deviceId:'',bind:false,style:0 },
                
                {toiletId:'52',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'53',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'54',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'55',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'56',deviceCode:'',deviceId:'',bind:false,style:0 },
                
                {toiletId:'57',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'58',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'59',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'60',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'61',deviceCode:'',deviceId:'',bind:false,style:0 },
                
                {toiletId:'62',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'63',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'64',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'65',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'66',deviceCode:'',deviceId:'',bind:false,style:0 },
                
                {toiletId:'67',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'68',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'69',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'70',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'71',deviceCode:'',deviceId:'',bind:false,style:0 },
                
                {toiletId:'72',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'73',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'74',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'75',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'76',deviceCode:'',deviceId:'',bind:false,style:0 },
                
                {toiletId:'77',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'78',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'79',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'80',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'101',deviceCode:'',deviceId:'',bind:false,style:0 },
                
                {toiletId:'102',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'103',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'104',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'105',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'106',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'107',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'108',deviceCode:'',deviceId:'',bind:false,style:0 },
            ],
            form:{
                toiletId:'',
                deviceCode:''
            },
            unbindForm:{
                toiletId:'',
                deviceCode:''
            },
            rules:{
                toiletId:[
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                ],
                deviceCode:[
                    { required: true, message: '请选择设备编号', trigger: 'change' },
                ]
            }
        }
    },
    created() {
        this.getToiletIds()
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
    },
    methods:{
        getToiletIds() {
            let self = this;
            self.allList.forEach( e=>{
                e.bind = false
            })
            self.$http.get(self.api.getToiletIds, {}, function(response) {
                if(response.status == 1){           
                    response.data.forEach(toiletId => {
                        self.allList.forEach( e=>{
                            if(e.toiletId == toiletId ){
                                e.bind = true
                            }
                        })
                        
                    });
                }else{

                }
            
            }, function(response) {
                //失败回调
            })
        },
        set(id) {                  
            let self = this;
            self.$http.get(self.api.getDeviceByToiletId, {
                params:{
                    toiletId:id
                }
            }, function(response) {
                if(response.status == 1){           
                    if(response.data.length==0) {
                        self.getUnBindDevice();
                        self.dialogVisible = true;
                        self.form.toiletId = id;
                    }else{
                        self.unBindDialogVisible = true;
                        self.unbindForm.toiletId = response.data[0].toiletId;
                        self.unbindForm.deviceCode = response.data[0].deviceName;
                    }
                }else{

                }
            
            }, function(response) {
                //失败回调
            })
        },
        // 获取未绑定的所有设备
        getUnBindDevice() {
            let self = this;
            self.$http.get(self.api.getUnBindDevice, {
                params:{                  
                    deviceTypeId:2
                }
            }, function(response) {
                if(response.status == 1){
                    self.unBindDeviceList = response.data;
                }else{

                }
            
            }, function(response) {
                //失败回调
            })
        },
        handleClose1() {
            this.dialogVisible = false;
            this.$refs.form.resetFields();
        },
        handleClose2() {
            this.unBindDialogVisible = false;
            this.$refs.unbindForm.resetFields();
        },
        // 解绑
        handleUnBind() {
            let self = this;
            this.$refs.unbindForm.validate((valid) => {
                if (valid) {
                    let params = new FormData();
                    params.append('toiletId', self.unbindForm.toiletId)
                    self.$http.post(self.api.unBindDevice, params, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                    }, function (response) {
                        if(response.data == 1) {
                            self.$message({
                                type: 'success',
                                message: '解绑成功!'
                            });
                            setTimeout(function() {
                                self.handleClose2()
                                self.getToiletIds()
                            },500)
                        }else{
                            self.$message({
                            type: 'error',
                            message: response.msg
                            });
                        }
                    }, function (response) {
                    //失败回调
                    })
                } else {
                    return false;
                }
            });
        },
        handleBind() {
            let self = this;
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let params = new FormData();
                    params.append('deviceId', self.form.deviceCode)
                    params.append('toiletId', self.form.toiletId)
                    params.append('positionId', 1)
                    params.append('toiletTypeId', '2')
                    self.$http.post(self.api.bindDevice, params, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                    }, function (response) {
                        if(response.data == 1) {
                            self.$message({
                                type: 'success',
                                message: '绑定成功!'
                            });
                            setTimeout(function() {
                                self.handleClose1()
                                self.getToiletIds()
                            },500)
                        }else{
                            self.$message({
                            type: 'error',
                            message: response.msg
                            });
                        }
                    }, function (response) {
                    //失败回调
                    })
                } else {
                    return false;
                }
            });
        }
    }
}
</script>
