<template>
    <div>
        <p class="dataTitle">今日数据</p>
        <div class="toiletInfo-container">
            <el-row>
                <el-col :span="12">
                    <div class="cinfo-content borderR contentHeight">
                        <p class="info-title">南区厕所</p>
                        <el-row>
                            <el-col :span="12" class="content">
                                <p class="left-title">男厕<img src="../../assets/img/nan.png" class="nanicon" /></p>
                                <div class="listContent">蹲位：1</div>
                                <div class="listContent">剩余：1</div>
                            </el-col>
                            <el-col :span="12" class="content">
                                <p class="left-title">女厕<img src="../../assets/img/nv.png" class="nanicon" /></p>
                                <div class="listContent">蹲位：1</div>
                                <div class="listContent">剩余：1</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="cinfo-content contentHeight">
                        <p class="info-title">北区厕所</p>
                        <el-row>
                            <el-col :span="12" class="content">
                                <p class="left-title">男厕<img src="../../assets/img/nan.png" class="nanicon" /></p>
                                <div class="listContent">蹲位：1</div>
                                <div class="listContent">剩余：1</div>
                            </el-col>
                            <el-col :span="12" class="content">
                                <p class="left-title">女厕<img src="../../assets/img/nv.png" class="nanicon" /></p>
                                <div class="listContent">蹲位：1</div>
                                <div class="listContent">剩余：1</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class=" borderR contentHeight">
                        <p class="info-title">第三卫生间</p>
                        <el-row>
                            <el-col :span="12" class="content">
                                <p class="left-title">南区</p>
                                <div class="listContent">当前使用状态：已使用</div>
                            </el-col>
                            <el-col :span="12" class="content">
                                <p class="left-title">北区</p>
                                <div class="listContent">当前使用状态：未使用</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="contentHeight">
                        <p class="info-title">母婴室</p>
                        <el-row>
                            <el-col :span="12" class="content">
                                <p class="left-title">南区</p>
                                <div class="listContent">隔间：1</div>
                                <div class="listContent">已使用：1</div>
                            </el-col>
                            <el-col :span="12" class="content">
                                <p class="left-title">北区</p>
                                <div class="listContent">隔间：1</div>
                                <div class="listContent">已使用：1</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
