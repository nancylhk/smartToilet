<template>
    <div>
        <div class="dataTitle mb0">
            <span>东侧（男）</span>
        </div>
        <div class="toilet-set-box">
            <el-row :gutter="30">
                <el-col :span="18">
                    <div class="displayBox pad20">
                        <el-row class="toliet-set-container  ">
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
                                            <li v-for="o in [96,97,98,99,100,115]" :key="o" @click="set(o)" class="cp">
                                                <span class="toiletCode">{{o}}</span>
                                                <img src="../../assets/img/toiletIcon1.png" />
                                                
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="12">
                                <el-row >
                                    <el-col :span="8" class="borderL">
                                        <ul class="toilet2">
                                            <li v-for="o in [116,117,118,119,120,121]" :key="o" @click="set(o)" class="cp">
                                                <img src="../../assets/img/toiletIcon2.png" />
                                                <span class="toiletCode">{{o}}</span>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8">
                                        <ul class="toilet1">
                                            <li v-for="o in [122,123,124,125,126,127]" :key="o" @click="set(o)" class="cp">
                                                 <span class="toiletCode">{{o}}</span>
                                                <img src="../../assets/img/toiletIcon1.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="6" class="toiletSet-right-container">
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
                </el-col>
            </el-row>
            <!-- 设备和厕位绑定弹框 -->
            <el-dialog
            title="厕位配置"
            :visible.sync="dialogVisible"
            width="380px"
            :before-close="handleClose">
            <el-form ref="form" :model="form" label-width="100px" :rules="rules">
                <el-form-item label="此厕位号：" prop="toiletId" readonly>
                    <el-input v-model="form.toiletId"></el-input>
                </el-form-item>
                <el-form-item label="此设备号：" prop="deviceId">
                    <el-input v-model="form.deviceId"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="handleBind">绑 定</el-button>
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
            form:{
                toiletId:'',
                deviceId:''
            },
            rules:{
                toiletId:[
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                ],
                deviceId:[
                    { required: true, message: '请输入设备编号', trigger: 'blur' },
                ]
            }
        }
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
        set(id) {
            this.dialogVisible = true;
            this.form.toiletId = id;
            this.form.deviceId = id;
        },
        handleClose() {
            this.dialogVisible = false;
            this.$refs.form.resetFields();
        },
        handleBind() {
            let self = this;
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let params = new FormData();
                    params.append('deviceId', self.form.deviceId)
                    params.append('toiletId', self.form.toiletId)
                    self.$http.post(self.api.toiletConfig, params, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                    }, function (response) {
                        if(response.status == 1) {
                            self.$message({
                                type: 'success',
                                message: '绑定成功!'
                            });
                            setTimeout(function() {
                                self.dialogVisible = false;
                            },1500)
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
