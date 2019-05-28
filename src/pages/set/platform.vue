<template>
    <div>
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
                <el-form-item label="开发商：">
                    <el-input v-model="form.developer"></el-input>
                </el-form-item>
                <el-form-item label="固定电话：">
                    <el-input v-model="form.telephone"></el-input>
                </el-form-item>
                <el-form-item label="所属区域：">
                    <el-input v-model="form.region"></el-input>
                </el-form-item>
                <el-form-item>
                    <!-- <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button> -->
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
    }
}
</script>
