<template>
    <div class="left-container">
        <div class="headBox">
            <img src="../../../assets/img/headIcon.jpg" class="headIcon"/>
            <p>戚薇</p>
        </div>
        <el-menu
        router
        class="el-menu-vertical-demo">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item index="/overview/data">选项1</el-menu-item> 
                <el-menu-item index="/overview/toiletInfo">选项1</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
