<template>
    <div class="render-div">
        <div class="dataTitle">
            <span>修改密码</span>
        </div>
        <el-form ref="form" :model="form" label-width="160px" :rules="rules" class="addForm">
            <el-form-item label="原密码：" prop="deviceCode">
                <el-input v-model="form.deviceCode"></el-input>
            </el-form-item>
            <el-form-item label="新密码：" prop="deviceName">
                <el-input v-model="form.deviceName"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="productor">
                <el-input v-model="form.productor"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onAdd()">修改密码</el-button>
                <!-- <el-button @click="back()">取消</el-button> -->
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
            } else if(reg.test(this.form.telephone)) {
                callback();			
            } else {
                if( value <0 || value > 255){
                    callback(new Error('设备ID为0~255之间的整数'));
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
                positionId:''
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
                productor:[
                    // { message:'请输入设备厂家',trigger: 'blur'},
                ],
                positionId:[
                    { required:true,message:'请选择设备所属区域',trigger: 'change'},
                ]
            }
        }
    },
    created() {
        
    },
    methods:{
        back() {
            this.$router.back(-1)
        },
        onAdd() {
            let self = this;
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let params = new FormData();
                    params.append('deviceCode', self.form.deviceCode)
                    params.append('toiletId', self.form.toiletId)
                    params.append('deviceName', self.form.deviceName)
                    params.append('status', self.form.status)
                    params.append('productor', self.form.productor)
                    params.append('toiletTypeId', self.form.toiletTypeId)
                    params.append('positionId', self.form.positionId)
                    self.$http.post(self.api.addDevice, params, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                    }, function (response) {
                        if(response.status == 1) {
                            self.$message({
                                type: 'success',
                                message: '添加成功!'
                            });
                            setTimeout(function() {
                                self.$router.push({
                                    path:'/device/configure'
                                })
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
