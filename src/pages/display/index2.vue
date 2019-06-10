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
                            <!-- <div>
                                <span class="cannotuse">修理中</span>
                                <img class="iconUse" src="../../assets/img/1.png"/>
                            </div> -->
                        </div>
                    </div>
                    <div class="secondBox">
                        <el-row class="toliet-display-container">
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="9">
                                        <ul class="toiletL7">
                                            <li v-for="o in allList.slice(0,7)" :key="o.toiletId" >
                                                <img src="../../assets/img/1.png" v-if="o.status=='2'"/>
                                                <img src="../../assets/img/2.png" v-if="o.status=='1'"/>
                                                <img src="../../assets/img/3.png" v-if="o.status=='0'"/>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="9" :offset="6">
                                        <ul class="toiletR5">
                                            <li v-for="o in allList.slice(7,12)" :key="o.toiletId">
                                                <img src="../../assets/img/6.png" v-if="o.status=='0'"/>
                                                <img src="../../assets/img/4.png" v-if="o.status=='1'"/>
                                                <img src="../../assets/img/5.png" v-if="o.status=='2'"/>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="9">
                                        <ul class="toiletL5">
                                            <li v-for="o in allList.slice(12,17)" :key="o.toiletId">
                                                <img src="../../assets/img/1.png" v-if="o.status=='2'"/>
                                                <img src="../../assets/img/2.png" v-if="o.status=='1'"/>
                                                <img src="../../assets/img/3.png" v-if="o.status=='0'"/>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="9" :offset="6">
                                        <ul class="toiletR5">
                                            <li v-for="o in allList.slice(17,22)" :key="o.toiletId">
                                                <img src="../../assets/img/6.png" v-if="o.status=='0'"/>
                                                <img src="../../assets/img/4.png" v-if="o.status=='1'"/>
                                                <img src="../../assets/img/5.png" v-if="o.status=='2'"/>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="9">
                                        <ul class="toiletL5">
                                            <li v-for="o in allList.slice(22,27)" :key="o.toiletId">
                                                <img src="../../assets/img/1.png" v-if="o.status=='2'"/>
                                                <img src="../../assets/img/2.png" v-if="o.status=='1'"/>
                                                <img src="../../assets/img/3.png" v-if="o.status=='0'"/>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="9" :offset="6">
                                        <ul class="toiletR5">
                                            <li v-for="o in allList.slice(27,32)" :key="o.toiletId" >
                                                <img src="../../assets/img/6.png" v-if="o.status=='0'"/>
                                                <img src="../../assets/img/4.png" v-if="o.status=='1'"/>
                                                <img src="../../assets/img/5.png" v-if="o.status=='2'"/>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="6">
                                <el-row >
                                    <el-col :span="9">
                                        <ul class="toiletL5">
                                            <li v-for="o in allList.slice(32,37)" :key="o.toiletId">
                                                <img src="../../assets/img/1.png" v-if="o.status=='2'"/>
                                                <img src="../../assets/img/2.png" v-if="o.status=='1'"/>
                                                <img src="../../assets/img/3.png" v-if="o.status=='0'"/>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="9" :offset="6">
                                        <ul class="toiletR7">
                                            <li v-for="o in allList.slice(37,44)" :key="o.toiletId" class=" borderRNo">
                                                <img src="../../assets/img/6.png" v-if="o.status=='0'"/>
                                                <img src="../../assets/img/4.png" v-if="o.status=='1'"/>
                                                <img src="../../assets/img/5.png" v-if="o.status=='2'"/>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                        <div>
                            <div class="my-position-container">
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
            allToilet:44,
            inuse:0,
            allList:[ 
                {toiletId:'45',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'46',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'47',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'48',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'49',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'50',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'51',deviceCode:'',deviceId:'',status:'0'},
                 
                {toiletId:'52',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'53',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'54',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'55',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'56',deviceCode:'',deviceId:'',status:'0'},
                 
                {toiletId:'57',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'58',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'59',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'60',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'61',deviceCode:'',deviceId:'',status:'0'},
                
                {toiletId:'62',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'63',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'64',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'65',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'66',deviceCode:'',deviceId:'',status:'0'},
                
                {toiletId:'67',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'68',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'69',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'70',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'71',deviceCode:'',deviceId:'',status:'0'},
                
                {toiletId:'72',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'73',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'74',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'75',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'76',deviceCode:'',deviceId:'',status:'0'},
                
                {toiletId:'77',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'78',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'79',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'80',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'101',deviceCode:'',deviceId:'',status:'0'},
                
                {toiletId:'102',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'103',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'104',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'105',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'106',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'107',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'108',deviceCode:'',deviceId:'',status:'0'},
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
                    // that.stompClient.send("test");
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
            // 向服务器发起websocket连接
            this.stompClient.connect({},() => {
                this.stompClient.subscribe('/topic/callback', (msg) => { // 订阅服务端提供的某个topic
                    let statusStr = JSON.parse(msg.body);
                    let statusObj = statusStr.data;
                    self.allFlow = statusStr.msg.split(';')[2];
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
 