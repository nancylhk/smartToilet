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
                            <h2>男厕(东)</h2>
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
                                            <li v-for="o in 5" :key="o" >
                                                <img src="../../assets/img/13.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col class="colspan2">
                                <el-row >
                                    <el-col :span="6">
                                        <ul class="toiletL5">
                                            <li v-for="o in 5" :key="o" >
                                                <img src="../../assets/img/14.png" />
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="9" :offset="9">
                                        <ul class="toiletR6">
                                            <li v-for="o in list1" :key="o.toiletId" >
                                                <img src="../../assets/img/6.png" v-if="o.status=='0'"/>
                                                <img src="../../assets/img/4.png" v-if="o.status=='1'"/>
                                                <img src="../../assets/img/5.png" v-if="o.status=='2'"/>
                                            </li>
                                        </ul>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col class="colspan3">
                                <el-row >
                                    <el-col :span="7">
                                        <ul class="toiletL6">
                                            <li v-for="o in list2" :key="o.toiletId">
                                                <img src="../../assets/img/1.png" v-if="o.status=='2'"/>
                                                <img src="../../assets/img/2.png" v-if="o.status=='1'"/>
                                                <img src="../../assets/img/3.png" v-if="o.status=='0'"/>
                                            </li>
                                        </ul>
                                    </el-col>
                                    <el-col :span="7" :offset="10">
                                        <ul class="toiletR6">
                                            <li v-for="o in list3" :key="o.toiletId" class="borderRNo">
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
                            <div class="my-position-container my-position-container2">
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
                            <h3>12344</h3>
                            <h4>累计人数</h4>
                            <img src="../../assets/img/11.png" class="bgLight"/>
                        </div>
                        <div class="lightBox">
                            <h3>18</h3>
                            <h4>总厕位数</h4>
                             <img src="../../assets/img/11.png" class="bgLight"/>
                        </div>
                        <div class="lightBox">
                            <h3>8</h3>
                            <h4>已使用数</h4>
                             <img src="../../assets/img/11.png" class="bgLight"/>
                        </div>
                        <div class="lightBox">
                            <h3>36</h3>
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
  </div>
  </template>
  <script>
//  import SockJS from  'sockjs-client';
// import  Stomp from 'stompjs';
export default {
    data(){
        return {
            nowDate:'',
            nowWeek:'',
            nowTime:'',
            stompClient:'',
            timer:'',
            list1:[ 
                {toiletId:'96',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'97',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'98',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'99',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'100',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'115',deviceCode:'',deviceId:'',status:'0'},
            ],
            list2:[ 
                {toiletId:'116',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'117',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'118',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'119',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'120',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'121',deviceCode:'',deviceId:'',status:'0'},
            ],
            list3:[ 
                {toiletId:'122',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'123',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'124',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'125',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'126',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'127',deviceCode:'',deviceId:'',status:'0'},
            ],
            allList:[]
        }
    },
    methods:{
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
            // 向服务器发起websocket连接
            this.stompClient.connect({},() => {
                this.stompClient.subscribe('/topic/callback', (msg) => { // 订阅服务端提供的某个topic
                    // console.log(msg.body);  // msg.body存放的是服务端发送给我们的信息
                    let statusObj = JSON.parse(msg.body);
                    statusObj = statusObj.data;
                    let allList = []
                    self.list1.forEach(e=>{
                        for( var i in statusObj){
                            if(i == e.toiletId){   			
                                if(statusObj[i] == '00'){
                                    e.status = '0'
                                }else if(statusObj[i] == '01'){
                                    e.status = '1'
                                }
                                break;
                            }else{
                                e.status = '0'
                            }
                        }                  
                    })
                    self.list2.forEach(e=>{
                        for( var i in statusObj){
                            if(i == e.toiletId){   			
                                if(statusObj[i] == '00'){
                                    e.status = '0'
                                }else if(statusObj[i] == '01'){
                                    e.status = '1'
                                }
                                break;
                            }else{
                                e.status = '0'
                            }
                        }                  
                    })
                    self.list3.forEach(e=>{
                        for( var i in statusObj){
                            if(i == e.toiletId){   			
                                if(statusObj[i] == '00'){
                                    e.status = '0'
                                }else if(statusObj[i] == '01'){
                                    e.status = '1'
                                }
                                break;
                            }else{
                                e.status = '0'
                            }
                        }                  
                    })
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
        // this.initWebSocket();
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
 