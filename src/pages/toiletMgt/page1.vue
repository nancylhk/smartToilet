<template>
    <div>
        <div class="dataTitle mb0">
            <span>东侧（男）</span>
        </div>
        <div class="toilet-set-box">
            <el-row :gutter="30">
                <el-col :span="24">
                    <div class="displayBox pad20">
                        <div class="bindExplain">
                            <span class="bind"><em></em>已绑定设备</span>
                            <span class="unbind"><em></em>未绑定设备</span>
                        </div>
                        <el-row class="toliet-set-container  maleBox">
                            <el-col :span="12">
                                <el-row  >
                                    <el-col :span="8">
                                        <ul class="toilet3">
                                            <li v-for="o in 4" :key="o">
                                                <img src="../../assets/img/toiletIcon3.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" class="borderR" :offset="8">
                                        <ul class="toilet1">
                                            <li v-for="o in allList.slice(0,6)" :key="o.toiletId" @click="set(o.toiletId)" class="cp hasBox">
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                                <img src="../../assets/img/toiletIcon1.png" v-if="o.style==1"/>
                                                <img src="../../assets/img/dun6.png" v-if="o.style==0"/>
                                                <div class="hoverBox">点击进行设备绑定</div>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="12">
                                <el-row >
                                    <el-col :span="8" class="borderL">
                                        <ul class="toilet2">
                                            <li v-for="o in allList.slice(6,12)" :key="o.toiletId" @click="set(o.toiletId)" class="cp hasBox">
                                                <img src="../../assets/img/toiletIcon2.png"  v-if="o.style==1"/>
                                                <img src="../../assets/img/dun5.png" v-if="o.style==0"/>
                                                <span class="toiletCode" :class="o.bind?'green':''">{{o.toiletId}}</span>
                                                <div class="hoverBox">点击进行设备绑定</div>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8">
                                        <ul class="toilet1">
                                            <li v-for="o in allList.slice(12,18)" :key="o.toiletId" @click="set(o.toiletId)" class="cp hasBox">
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
                {toiletId:'96',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'97',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'98',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'99',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'100',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'115',deviceCode:'',deviceId:'',bind:false,style:0 },

                {toiletId:'116',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'117',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'118',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'119',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'120',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'121',deviceCode:'',deviceId:'',bind:false,style:0 },
                
                {toiletId:'122',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'123',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'124',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'125',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'126',deviceCode:'',deviceId:'',bind:false,style:0 },
                {toiletId:'127',deviceCode:'',deviceId:'',bind:false,style:0 },
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
                    positionId:1
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
            let self = this;
            self.dialogVisible = false;
            self.$refs.form.resetFields();
        },
        handleClose2() {
            let self = this;
            self.unBindDialogVisible = false;
            self.$refs.unbindForm.resetFields();
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
                    params.append('toiletTypeId', '1')
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
