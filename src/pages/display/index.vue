<template>
  <div class="display-container">
      <div class="content-container">
            <div class="headTop clearfix">
                <div class="left">
                    <h1>阳澄湖服务区智慧公厕系统</h1>
                    <p class="englishTitle">Intelligent Public Toilet System in Yangcheng Lake Service Area</p>
                </div>
                <div class="right">
                        <span>{{nowDate}}</span>
                        <span>{{nowWeek}}</span>
                        <span>{{nowTime}}</span>
                </div>
            </div>
            <div class="display-main-container">
                <div>
                    <div class="firstBox">
                        <div class="oneBox">
                            <img src="../../assets/img/7.png" />
                            <h2>女厕(东)</h2>
                            <p>Female East toilet</p>
                        </div>
                        <div class="twoBox">
                            <div>
                                <span class="unuse">未使用</span>
                                <img class="iconUse" src="../../assets/img/3.png"/>
                            </div>
                            <div>
                                <span class="using">已使用</span>
                                <img class="iconUse" src="../../assets/img/2.png"/>
                            </div>
                            <div>
                                <span class="cannotuse">修理中</span>
                                <img class="iconUse" src="../../assets/img/1.png"/>
                            </div>
                        </div>
                    </div>
                    <div class="secondBox">
                        <el-row class="toliet-display-container">
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="9">
                                        <ul class="toilet1">
                                            <li v-for="o in list1" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/3.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="9" :offset="6">
                                        <ul class="toiletR5">
                                            <li v-for="o in list2" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/3.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="9">
                                        <ul class="toiletL5">
                                            <li v-for="o in list2" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/3.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="9" :offset="6">
                                        <ul class="toiletR5">
                                            <li v-for="o in list2" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/3.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="9">
                                        <ul class="toiletL5">
                                            <li v-for="o in list2" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/3.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="9" :offset="6">
                                        <ul class="toiletR5">
                                            <li v-for="o in list2" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/3.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="9">
                                        <ul class="toiletL5">
                                            <li v-for="o in list2" :key="o.toiletId" @click="set(o.toiletId)" class="cp">
                                                <img src="../../assets/img/3.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="9" :offset="6">
                                        <ul class="toiletR5">
                                            <li v-for="o in list2" :key="o.toiletId" @click="set(o.toiletId)" class="cp borderRNo">
                                                <img src="../../assets/img/3.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="thirdBox">
                        <div class="lightBox">
                            <h3>12344</h3>
                            <h4>累计人数</h4>
                            <img src="../../assets/img/11.png" class="bgLight"/>
                        </div>
                        <div class="lightBox">
                            <h3>12344</h3>
                            <h4>累计人数</h4>
                             <img src="../../assets/img/11.png" class="bgLight"/>
                        </div>
                        <div class="lightBox">
                            <h3>12344</h3>
                            <h4>累计人数</h4>
                             <img src="../../assets/img/11.png" class="bgLight"/>
                        </div>
                        <div class="lightBox">
                            <h3>12344</h3>
                            <h4>累计人数</h4>
                             <img src="../../assets/img/11.png" class="bgLight"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-container">
                <ul class="clearfix">
                    <li v-for="o in 7" class="left">
                        <img src="../../assets/img/10.png"/>
                    </li>
                    <li  class="left washPen">洗手池</li>
                </ul>
            </div>
      </div>
      <div class="bg-box">
          <img src="../../assets/img/background.png" />
      </div>
  </div>
  </template>
  <script>
 import SockJS from  'sockjs-client';
import  Stomp from 'stompjs';
export default {
    data(){
        return {
            nowDate:'2019-05-30',
            nowWeek:'星期五',
            nowTime:'14:39',
            stompClient:'',
            timer:'',
            list1:[ 
                {toiletId:'45',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'46',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'47',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'48',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'49',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'50',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'51',deviceCode:'',deviceId:'',bind:false},
            ],
            list2:[ 
                {toiletId:'45',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'46',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'47',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'48',deviceCode:'',deviceId:'',bind:false},
                {toiletId:'49',deviceCode:'',deviceId:'',bind:false}
            ],
        }
    },
    methods:{
        initWebSocket() {
            this.connection();
            let that= this;
            // 断开重连机制,尝试发送消息,捕获异常发生时重连
            // this.timer = setInterval(() => {
            //     try {
            //         // that.stompClient.send("hahaha");
            //     } catch (err) {
            //         console.log("断线了: " + err);
            //         that.connection();
            //     }
            // }, 5000);
        },  
        connection() {
            // 建立连接对象
            let socket = new SockJS('/my-websocket');
            // 获取STOMP子协议的客户端对象
            this.stompClient = Stomp.over(socket);
            // 定义客户端的认证信息,按需求配置
            let headers = {
                Authorization:''
            }
            
            // 向服务器发起websocket连接
            this.stompClient.connect(headers,() => {
                // this.stompClient.subscribe('/topic/send', function (msg) {
                //         console.log('注册成功')
                //         console.log(msg)
                //     });
                    // 注册推送时间回调
                    this.stompClient.subscribe('/topic/callback', function (msg) {
                        console.log(msg.body)
                    });
            }, (err) => {
                // 连接发生错误时的处理函数
                console.log('失败')
                console.log(err);
            });
            
        },    //连接 后台
        disconnect() {
            if (this.stompClient) {
                this.stompClient.disconnect();
            }
        },  // 断开连接
    },
    mounted(){
        this.initWebSocket();
    },
    beforeDestroy: function () {
        // 页面离开时断开连接,清除定时器
        this.disconnect();
        // clearInterval(this.timer);
    }

}
  </script>
  <style >
 </style>
 