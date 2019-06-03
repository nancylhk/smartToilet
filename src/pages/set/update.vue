<template>
    <div class="render-div">
        <div class="dataTitle">
            <span>修改平台信息</span>
        </div>
        <div class="platform-container">
            <el-form ref="form" :model="form" label-width="150px" :rules="rules" >
                <el-form-item label="平台名称："  prop="name" >
                    <el-input v-model="form.name" ></el-input>
                </el-form-item>
                <el-form-item label="合作开始时间：" prop="startTime">
                    <!-- <el-input v-model="form.startTime"></el-input> -->
                    <el-date-picker
                    v-model="form.startTime"
                    type="date"
                    value-format='yyyy-MM-dd'
                    placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="合作结束时间：" prop="endTime">
                    <!-- <el-input v-model="form.endTime"></el-input> -->
                     <el-date-picker
                    v-model="form.endTime"
                    type="date"
                    value-format='yyyy-MM-dd'
                    placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="联系人：" prop="contactMan">
                    <el-input v-model="form.contactMan"></el-input>
                </el-form-item>
                <el-form-item label="联系电话：" prop="mobile">
                    <el-input v-model="form.mobile"></el-input>
                </el-form-item>
                <el-form-item label="开发商：" prop="developer">
                    <el-input v-model="form.developer"></el-input>
                </el-form-item>
                <el-form-item label="固定电话：" prop="telephone">
                    <el-input v-model="form.telephone"></el-input>
                </el-form-item>
                <el-form-item label="所属区域：" prop="region">
                    <el-input v-model="form.region"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onEdit">修改</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        var validateTelephone = (rule, value, callback) => {
            const reg = /^\d{11}$/
            
            if(value === '') {
                callback(new Error('请输入手机号'));
                // console.log(value)
            } else if(reg.test(this.form.mobile)) {
                callback();			
            } else {
                callback(new Error('手机号码格式错误'));
            }
        };
        return{
            form:{
                name:'智慧公厕管理平台',
                startTime:'',
                endTime:'',
                contactMan:'张三丰',
                mobile:'13098090909',
                developer:'江苏高速公路信息工程有限公司',
                telephone:'400-820-0000',
                region:'江苏省南京市建邺区康缘智汇港',
                configId:''
            },
            rules:{
                name:[
                    { required: true, message: '请输入平台名称', trigger: 'blur' },
                ],
                period:[
                    { required: true, message: '请输入合作期限', trigger: 'blur' },
                ],
                contactMan:[
                    { required: true, message: '请输入联系人', trigger: 'blur' },
                ],
                mobile:[
                     { validator:validateTelephone,trigger: 'blur',required:true	}
                ],
                developer:[
                    { required: true, message: '请输入开发商', trigger: 'blur' },
                ],
                telephone:[
                    { required: true, message: '请输入固定电话', trigger: 'blur' },
                ],
                region:[
                    { required: true, message: '请输入所属区域', trigger: 'blur' },
                ],
            }
        }
    },
    created() {
        this.getInfo();
    },
    methods:{
        getInfo() {
            let self = this;
            self.$http.get(self.api.getConfigInfo, {}, function(response) {
                if(response){
                    let data = response[0];
                    self.form.name = data.configName,
                    self.form.startTime = data.configStartTime,
                    self.form.endTime =  data.configEndTime ,
                    self.form.contactMan = data.contact,
                    self.form.mobile = data.telephone,
                    self.form.developer = data.developer,
                    self.form.telephone = data.celphone,
                    self.form.region = data.address,
                    self.form.configId = data.configId
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
                    params.append('configName', self.form.name)
                    params.append('configStartTime', self.form.startTime)
                    params.append('configEndTime', self.form.endTime)
                    params.append('developer', self.form.developer)
                    params.append('contact', self.form.contactMan)
                    params.append('telephone', self.form.mobile)
                    params.append('celphone', self.form.telephone)
                    params.append('address', self.form.region)
                    params.append('configId', self.form.configId)
                    self.$http.post(self.api.updateConfig, params, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                    }, function (response) {
                        if(response) {
                            self.$message({
                                type: 'success',
                                message: '修改成功!'
                            });
                            setTimeout(function() {
                                self.$router.push({
                                    path:'/platform/info'
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
