<template>
    <div class="new-display-container">
        <!-- 头部 -->
        <Header :lastPath='lastPath'></Header>
        <div class="display-container-part">
            <div class="display-Box clearfix">
                <!-- zuobian -->
                <Left :allUseNum='allUseNum' :weatherInfo='weatherInfo'></Left>
                <div class="second-box ">
                    <img src="../../assets/img/display3.png" class="toilet1Pic"/>
                    <div class="display-set3">
                        <ul class="left1">
                            <li >
                                <img src="../../assets/img/a.png" />
                            </li>
                            <li v-for="o in allList.slice(1,7)" :key="o.toiletId">
                                <img src="../../assets/img/jing0.png" v-if="o.status=='0'"/>
                                <img src="../../assets/img/jing1.png" v-if="o.status=='1'"/>
                                <img src="../../assets/img/jing2.png" v-if="o.status=='2'"/>
                            </li>
                        </ul>
                        <ul class="right1">
                            <li v-for="o in allList.slice(7,11)" :key="o.toiletId">
                                <img src="../../assets/img/jing0.png" v-if="o.status=='0'"/>
                                <img src="../../assets/img/jing1.png" v-if="o.status=='1'"/>
                                <img src="../../assets/img/jing2.png" v-if="o.status=='2'"/>
                            </li>
                        </ul>
                        <ul class="left2">
                            <li v-for="o in allList.slice(11,15)" :key="o.toiletId">
                                <img src="../../assets/img/jing0.png" v-if="o.status=='0'"/>
                                <img src="../../assets/img/jing1.png" v-if="o.status=='1'"/>
                                <img src="../../assets/img/jing2.png" v-if="o.status=='2'"/>
                            </li>
                        </ul>
                        <div class="entrance entrance1">入口</div>
                    </div>
                </div>
                <Right :todayUseNum='todayUseNum' :allToilet='allToilet' :inuse='inuse' :badNum='badNum'></Right>
            </div>
        </div>
        <!-- dibu -->
        <Bottom></Bottom>
        <div class="bg-box">
            <img src="../../assets/img/bgNew2.png" />
        </div>
    </div>
</template>
<script>
import Header from './components/header';
import Left from './components/left';
import Right from './components/right';
import Bottom from './components/bottom';
 export default {
    components:{
        Header,
        Left,
        Right,
        Bottom,
    },
    data() {
        return {
            weatherInfo:'',
            todayUseNum:'123',
            allUseNum:'6102',
            stompClient:'',
            timer:'',
            allToilet:14,
            inuse:0,
            badNum:0,
            lastPath:'',
            allList:[ 
                {toiletId:'',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'86',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'85',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'84',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'83',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'82',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'81',deviceCode:'',deviceId:'',status:'0'},
                
                {toiletId:'87',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'88',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'89',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'90',deviceCode:'',deviceId:'',status:'0'},
                
                {toiletId:'94',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'93',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'92',deviceCode:'',deviceId:'',status:'0'},
                {toiletId:'91',deviceCode:'',deviceId:'',status:'0'},
            ],
        }
    },
    beforeRouteEnter(to, from, next) {
        next((vm)=>{ //参数vm就是当前组件的实例。
            vm.lastPath = from.path
        })
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
                    let statusStr = JSON.parse(msg.body);
                    let statusObj = statusStr.data;
                    self.todayUseNum = statusStr.msg.split(';')[1];
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
        // this.initWebSocket();
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
 