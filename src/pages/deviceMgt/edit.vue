<template>
    <div class="render-div">
        <div class="dataTitle">
            <span>修改设备信息</span>
        </div>
        <el-form ref="form" :model="form" label-width="160px" :rules="rules" class="addForm">
            <el-form-item label="设备编号：" prop="deviceCode">
                <el-input v-model="form.deviceCode"></el-input>
            </el-form-item>
            <el-form-item label="设备名称：" prop="deviceName">
                <el-input v-model="form.deviceName"></el-input>
            </el-form-item>
            <el-form-item label="设备状态：" prop="status">
                <el-select v-model="form.status" placeholder="请选择" > 
                    <el-option label="未使用" value="0" disabled></el-option>  
                    <el-option label="正常" value="1" :disabled="form.status=='0'"></el-option>
                    <el-option label="维修" value="2" :disabled="form.status=='0'"></el-option>
                </el-select>
            </el-form-item>          
            <el-form-item label="设备标识：" prop="deviceTypeId">
                <el-radio-group v-model="form.deviceTypeId">
                    <el-radio :label="1">男</el-radio>
                    <el-radio :label="2">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="设备厂家：" prop="productor">
                <el-input v-model="form.productor"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onEdit()">修改</el-button>
                <el-button @click="back()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        var validateDeviceCode = (rule, value, callback) => {
            const reg = /^[0-9]*[1-9][0-9]*$/ ;     
            if(value === '') {
                callback(new Error('请输入设备ID'));
                // console.log(value)
            }else if(!reg.test(this.form.deviceCode)){
                callback(new Error('请输入0~255之间的整数'));                   
            }else {
                if(value <0 || value > 255){
                    callback(new Error('设备ID为0~255之间的整数')); 
                }else{
                    callback();	
                } 
                		
            }
        };
        return {
            form:{
                deviceCode: "",
                toiletId: "",
                deviceName: '',
                status: '',
                productor: "",
                toiletTypeId:'',
                deviceTypeId:''
            },
            rules:{
                deviceCode:[
                   { required:true,validator:validateDeviceCode,trigger: 'blur'	}
                ],
                status:[
                    { required:true,message:'请选择设备使用状态',trigger: 'change'},
                ],
                deviceName:[
                    { required:true,message:'请输入设备名称',trigger: 'blur'},
                ],
                deviceTypeId:[
                    { required: true, message: '请选择设备标识', trigger: 'change' }
                ]
            }
        }
    },
    created() {
        this.getInfo()
        
    },
    methods:{
        back() {
            this.$router.back(-1)
        },
        getInfo() {
            let self = this;
            self.$http.get(self.api.getDevice, {
                params:{
                    satrt:'',
                    end:'',
                    status:self.$route.query.status,
                    deviceId:self.$route.query.id
                }
            }, function(response) {
                if(response){
                    if(response.data.length>0) {
                        self.form= response.data[0];
                        self.form.status = '' + self.form.status;
                    }
                    
                    
                }else{
                }     
            }, function(response) {
                //失败回调
            })
        },
        onEdit() {
            let self = this;
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let params = new FormData();
                     params.append('deviceId', self.$route.query.id)
                    params.append('deviceCode', self.form.deviceCode)
                    params.append('toiletId', self.form.toiletId)
                    params.append('deviceName', self.form.deviceName)
                    params.append('status', self.form.status)
                    params.append('productor', self.form.productor)
                    params.append('toiletTypeId', self.form.toiletTypeId)
                    params.append('deviceTypeId', self.form.deviceTypeId)
                    self.$http.post(self.api.editDevice, params, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                    }, function (response) {
                        if(response.status == 1) {
                            self.$message({
                                type: 'success',
                                message: '修改成功!'
                            });
                            setTimeout(function() {
                                self.$router.push({
                                    path:'/device/configure'
                                })
                            },1500)
                            
                        }else{
                            self.$message({
                            type: 'error',
                            message: '修改失败'
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