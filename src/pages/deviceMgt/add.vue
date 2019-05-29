<template>
    <div>
        <el-form ref="form" :model="form" label-width="120px" class="addForm">
            <el-form-item label="设备ID：">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="设备名称：">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="设备使用状态：">
                <el-select v-model="form.status" >
                    <el-option label="禁用" value="0"></el-option>
                    <el-option label="启用" value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="设备厂家：">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return{
            form:{
                status:''
            }
        }
    },
    methods:{
        
        onSubmit() {

        }
    }
}
</script>
