<template>
    <div class="render-div">
        <div class="dataTitle">
            <span>平台信息</span>
        </div>
        <div class="platform-container">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="平台名称：" class="readOnly" >
                    <el-input v-model="form.name" readonly></el-input>
                </el-form-item>
                <el-form-item label="合作期限：" class="readOnly">
                    <el-input v-model="form.period" readonly></el-input>
                </el-form-item>
                <el-form-item label="联系人：" class="readOnly">
                    <el-input v-model="form.contactMan" readonly></el-input>
                </el-form-item>
                <el-form-item label="联系电话：" class="readOnly">
                    <el-input v-model="form.mobile" readonly></el-input>
                </el-form-item>
                <el-form-item label="开发商：" class="readOnly">
                    <el-input v-model="form.developer" readonly></el-input>
                </el-form-item>
                <el-form-item label="固定电话：" class="readOnly">
                    <el-input v-model="form.telephone" readonly></el-input>
                </el-form-item>
                <el-form-item label="所属区域：" class="readOnly">
                    <el-input v-model="form.region" readonly></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="update">修改</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            form:{
                name:'智慧公厕管理平台',
                period:'2017-03-30 ~ 2018-03-29',
                contactMan:'张三丰',
                mobile:'13098090909',
                developer:'江苏高速公路信息工程有限公司',
                telephone:'400-820-0000',
                region:'江苏省南京市建邺区康缘智汇港'
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
                    self.form.period = data.configStartTime + ' ~ ' + data.configEndTime ,
                    self.form.contactMan = data.contact,
                    self.form.mobile = data.telephone,
                    self.form.developer = data.developer,
                    self.form.telephone = data.celphone,
                    self.form.region = data.address
                }else{

                }     
            }, function(response) {
                //失败回调
            })
        },
        update() {
            this.$router.push({
                path:'/platform/update'
            })
        }
    }
}
</script>
