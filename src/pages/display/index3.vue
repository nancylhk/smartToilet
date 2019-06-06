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
                        <div class="oneBox blueColor">
                            <img src="../../assets/img/12.png" />
                            <h2>男厕(西)</h2>
                            <p>Male East toilet</p>
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
                        <el-row class="toliet-display-container2">            
                            <el-col class="colspan3">
                                <el-row >
                                    <el-col :span="6">
                                        <ul class="toiletL7">
                                            <li v-for="o in allList.slice(0,7)" :key="o.toiletId">
                                                <img src="../../assets/img/1.png" v-if="o.status=='2'"/>
                                                <img src="../../assets/img/2.png" v-if="o.status=='1'"/>
                                                <img src="../../assets/img/3.png" v-if="o.status=='0'"/>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="9" :offset="9">
                                        <ul class="toiletR4">
                                            <li v-for="o in allList.slice(7,11)" :key="o.toiletId" >
                                                <img src="../../assets/img/6.png" v-if="o.status=='0'"/>
                                                <img src="../../assets/img/4.png" v-if="o.status=='1'"/>
                                                <img src="../../assets/img/5.png" v-if="o.status=='2'"/>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col class="colspan2">
                                <el-row >
                                    <el-col :span="8">
                                        <ul class="toiletL4">
                                            <li v-for="o in allList.slice(11,15)" :key="o.toiletId">
                                                <img src="../../assets/img/1.png" v-if="o.status=='2'"/>
                                                <img src="../../assets/img/2.png" v-if="o.status=='1'"/>
                                                <img src="../../assets/img/3.png" v-if="o.status=='0'"/>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="6" :offset="10">
                                        <ul class="toiletR5">
                                            <li v-for="o in 5" :key="o" >
                                                <img src="../../assets/img/13.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col class="colspan1">
                                <el-row >
                                    <el-col :span="8">
                                        <ul class="toiletL5">
                                            <li v-for="o in 5" :key="o" >
                                                <img src="../../assets/img/14.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8">
                                        <ul class="toiletR5">
                                            <li v-for="o in 5" :key="o">
                                                <img src="../../assets/img/13.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col class="colspan1">
                                <el-row >
                                    <el-col :span="8">
                                        <ul class="toiletL5">
                                            <li v-for="o in 5" :key="o" >
                                                <img src="../../assets/img/14.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="8" :offset="8">
                                        <ul class="toiletR5">
                                            <li v-for="o in 5" :key="o" class="borderRNo">
                                                <img src="../../assets/img/13.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <div>
                            <div class="my-position-container my-position-container3">
                                <div class="textCenter">
                                    <img src="../../assets/img/9.png"/>
                                </div>
                                <div class="position-tip">
                                    <img src="../../assets/img/8.png"/>
                                    <div class="my-position">
                                        <span>您当前</span>
                                        <span>所在位置</span>
                                    </div>
                                </div>     
                                <div class="entrance">出入口</div>                 
                            </div>
                        </div>
                    </div>
                    <div class="thirdBox">
                        <div class="lightBox">
                            <h3>{{allFlow}}</h3>
                            <h4>累计人数</h4>
                            <img src="../../assets/img/11.png" class="bgLight"/>
                        </div>
                        <div class="lightBox">
                            <h3>{{allToilet}}</h3>
                            <h4>总厕位数</h4>
                             <img src="../../assets/img/11.png" class="bgLight"/>
                        </div>
                        <div class="lightBox">
                            <h3>{{inuse}}</h3>
                            <h4>已使用数</h4>
                             <img src="../../assets/img/11.png" class="bgLight"/>
                        </div>
                        <div class="lightBox">
                            <h3>{{allToilet-inuse}}</h3>
                            <h4>剩余数</h4>
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
        <div>
            <img src="../../assets/img/back.png" class="backIcon" @click="goBack()"/>
        </div>
  </div>
  </template>
  <script>
//  import SockJS from  'sockjs-client';
// import  Stomp from 'stompjs';
export default {
    data(){
        return {
            nowDate:'2019-05-30',
            nowWeek:'星期五',
            nowTime:'14:39',
            stompClient:'',
            timer:'',
            allFlow:0,
            allToilet:15,
            inuse:0,
            allList:[ 
                {toiletId:'81',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'82',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'83',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'84',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'85',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'86',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'87',deviceCode:'',deviceId:'',status:'0'},
                
                {toiletId:'88',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'89',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'90',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'91',deviceCode:'',deviceId:'',status:'0'},
                
                {toiletId:'92',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'93',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'94',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'95',deviceCode:'',deviceId:'',status:'0'},
            ],
            lastPath:''
        }
    },
    beforeRouteEnter(to, from, next) {
        next((vm)=>{ //参数vm就是当前组件的实例。
            vm.lastPath = from.path
        })
    },
    methods:{
        goBack() {
            console.log(this.lastPath)
            if(this.lastPath == '/login' || this.lastPath == '/'){
                this.$store.dispatch('LogOut');
                location.reload()
            }else{
                this.$router.back(-1)
            }
        },
        initWebSocket() {
            this.connection();
            let that= this;
            // 断开重连机制,尝试发送消息,捕获异常发生时重连
            this.timer = setInterval(() => {
                try {
                    that.stompClient.send("test");
                } catch (err) {
                    console.log("断线了: " + err);
                    that.connection();
                }
            }, 5000);
        },  
        connection() {
            let self = this;
            // 建立连接对象
            let socket = new SockJS('/my-websocket');
            // 获取STOMP子协议的客户端对象
            this.stompClient = Stomp.over(socket);
            // 定义客户端的认证信息,按需求配置
            // let headers = {
            //     Authorization:''
            // }
            // 向服务器发起websocket连接
            this.stompClient.connect({},() => {
                this.stompClient.subscribe('/topic/callback', (msg) => { // 订阅服务端提供的某个topic
                   let statusStr = JSON.parse(msg.body);
                    let statusObj = statusStr.data;
                    self.allFlow = statusStr.msg.split(';')[1];
                    let inuse = 0;
                    self.allList.forEach(e=>{
                        for( var i in statusObj){
                            if(i == e.toiletId){   			
                                if(statusObj[i] == '00'){
                                    e.status = '0'
                                }else if(statusObj[i] == '01'){
                                    e.status = '1'
                                    inuse ++;
                                }
                                break;
                            }else{
                                e.status = '0'
                            }
                        }                  
                    })
                    self.inuse = inuse
                    
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
        var self = this;
        var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        var timerID = setInterval(updateTime, 1000);
        updateTime();
        function updateTime() {
            var cd = new Date();
            self.nowTime = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
            self.nowDate = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) ;
            self.nowWeek = week[cd.getDay()]
        };
        function zeroPadding(num, digit) {
            var zero = '';
            for(var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        }
    },
    beforeDestroy: function () {
        // 页面离开时断开连接,清除定时器
        this.disconnect();
        clearInterval(this.timer);
    }

}
  </script>
  <style >
 </style>
 