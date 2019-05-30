<template>
    <div>
        <div class="dataTitle">
            <span>新增设备信息</span>
        </div>
        <el-form ref="form" :model="form" label-width="160px" :rules="rules" class="addForm">
            <el-form-item label="设备ID：" prop="deviceCode">
                <el-input v-model="form.deviceCode"></el-input>
            </el-form-item>
            <el-form-item label="设备名称：" prop="deviceName">
                <el-input v-model="form.deviceName"></el-input>
            </el-form-item>
            <el-form-item label="设备使用状态：" prop="status">
                <el-select v-model="form.status" placeholder="请选择">
                    <el-option label="未使用" value="0"></el-option>
                    <el-option label="使用中" value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="设备厂家：" prop="productor">
                <el-input v-model="form.productor"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onAdd()">新增</el-button>
                <el-button @click="back()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form:{
                deviceCode: "",
                toiletId: "",
                deviceName: '',
                status: '',
                productor: "",
                toiletTypeId:''
            },
            rules:{
                deviceCode:[
                    { required:true,message:'请输入设备ID',trigger: 'blur'},
                ],
                status:[
                    { required:true,message:'请选择设备使用状态',trigger: 'change'},
                ],
                deviceName:[
                    { required:true,message:'请输入设备名称',trigger: 'blur'},
                ],
                productor:[
                    // { message:'请输入设备厂家',trigger: 'blur'},
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
