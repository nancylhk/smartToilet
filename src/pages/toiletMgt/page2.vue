<template>
    <div>
        <div class="dataTitle mb0">
            <span>东侧（女）</span>
        </div>
        <div class="toilet-set-box toilet-set-box2">
            <el-row :gutter="30">
                <el-col :span="24">
                    <div class="displayBox pad20">
                        <el-row class="toliet-set-container  ">
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="8">
                                        <ul class="toilet2">
                                            <li v-for="o in list1" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/toiletIcon2.png" />
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8" class="borderR">
                                        <ul class="toilet1 sRbox5">
                                            <li v-for="o in list2" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/toiletIcon1.png" />
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="8" class="borderL2">
                                        <ul class="toilet2">
                                            <ul class="toilet2 sLbox5">
                                            <li v-for="o in list3" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/toiletIcon2.png" />
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                            </li>
                                        </ul>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8" class="borderR">
                                        <ul class="toilet1 sRbox5">
                                            <li v-for="o in list4" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/toiletIcon1.png" />
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="8" class="borderL">
                                        <ul class="toilet2 sLbox5">
                                            <li v-for="o in list5" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/toiletIcon2.png" />
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8" class="borderR">
                                        <ul class="toilet1 sRbox5">
                                            <li v-for="o in list6" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/toiletIcon1.png" />
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="8" class="borderL">
                                        <ul class="toilet2 sLbox5">
                                            <li v-for="o in list7" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/toiletIcon2.png" />
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8">
                                        <ul class="toilet1">
                                            <li v-for="o in list8" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/toiletIcon1.png" />
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
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
                    <el-form-item label="此设备号：" prop="deviceCode">
                        <el-select v-model="form.deviceCode" placeholder="请选择设备号">
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
            list1:[ 
                {toiletId:'45',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'46',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'47',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'48',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'49',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'50',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'51',deviceCode:'',deviceId:'',bind:false},
            ],
            list2:[ 
                {toiletId:'52',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'53',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'54',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'55',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'56',deviceCode:'',deviceId:'',bind:false},
            ],
            list3:[ 
                {toiletId:'57',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'58',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'59',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'60',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'61',deviceCode:'',deviceId:'',bind:false},
            ],
            list4:[ 
                {toiletId:'62',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'63',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'64',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'65',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'66',deviceCode:'',deviceId:'',bind:false},
            ],
            list5:[ 
                {toiletId:'67',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'68',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'69',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'70',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'71',deviceCode:'',deviceId:'',bind:false},
            ],
            list6:[ 
                {toiletId:'72',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'73',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'74',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'75',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'76',deviceCode:'',deviceId:'',bind:false},
            ],
            list7:[ 
                {toiletId:'77',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'78',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'79',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'80',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'101',deviceCode:'',deviceId:'',bind:false}
            ],
            list8:[ 
                {toiletId:'102',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'103',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'104',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'105',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'106',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'107',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'108',deviceCode:'',deviceId:'',bind:false},
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
            self.list1.forEach( e=>{
                e.bind = false
            })
            self.list2.forEach( e=>{
                e.bind = false
            })
            self.list3.forEach( e=>{
                e.bind = false
            })
            self.list4.forEach( e=>{
                e.bind = false
            })
            self.list5.forEach( e=>{
                e.bind = false
            })
            self.list6.forEach( e=>{
                e.bind = false
            })
            self.list7.forEach( e=>{
                e.bind = false
            })
            self.list8.forEach( e=>{
                e.bind = false
            })
            self.$http.get(self.api.getToiletIds, {}, function(response) {
                if(response.status == 1){           
                    response.data.forEach(toiletId => {
                        self.list1.forEach( e=>{
                            if(e.toiletId == toiletId ){
                                e.bind = true
                            }
                        })
                        self.list2.forEach( e=>{
                            if(e.toiletId == toiletId ){
                                e.bind = true
                            }
                        })
                        self.list3.forEach( e=>{
                            if(e.toiletId == toiletId ){
                                e.bind = true
                            }
                        })
                        self.list4.forEach( e=>{
                            if(e.toiletId == toiletId ){
                                e.bind = true
                            }
                        })
                        self.list5.forEach( e=>{
                            if(e.toiletId == toiletId ){
                                e.bind = true
                            }
                        })
                        self.list6.forEach( e=>{
                            if(e.toiletId == toiletId ){
                                e.bind = true
                            }
                        })
                        self.list7.forEach( e=>{
                            if(e.toiletId == toiletId ){
                                e.bind = true
                            }
                        })
                        self.list8.forEach( e=>{
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
