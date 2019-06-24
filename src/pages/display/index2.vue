<template>
    <div class="new-display-container">
        <!-- 头部 -->
        <Header :lastPath='lastPath'></Header>
        <div class="display-container-part">
            <div class="display-Box clearfix">
                <!-- zuobian -->
                <Left :allUseNum='allUseNum' :weatherInfo='weatherInfo'></Left>
                <div class="second-box ">
                    <img src="../../assets/img/display2.png" class="toilet1Pic"/>
                    <div class="display-set2">
                        <ul class="left1">
                            <!-- <li >
                                <img src="../../assets/img/tuoba2.png" />
                            </li> -->
                            <li v-for="o in allList.slice(0,7)" :key="o.toiletId">
                                <img src="../../assets/img/jing0.png" v-if="o.status=='0'"/>
                                <img src="../../assets/img/jing1.png" v-if="o.status=='1'"/>
                                <img src="../../assets/img/jing2.png" v-if="o.status=='2'"/>
                            </li>
                        </ul>
                        <ul class="right1">
                            <li v-for="o in allList.slice(7,12)" :key="o.toiletId">
                                <img src="../../assets/img/jing0.png" v-if="o.status=='0'"/>
                                <img src="../../assets/img/jing1.png" v-if="o.status=='1'"/>
                                <img src="../../assets/img/jing2.png" v-if="o.status=='2'"/>
                            </li>
                        </ul>
                        <ul class="left2">
                            <li v-for="o in allList.slice(12,17)" :key="o.toiletId">
                                <img src="../../assets/img/jing0.png" v-if="o.status=='0'"/>
                                <img src="../../assets/img/jing1.png" v-if="o.status=='1'"/>
                                <img src="../../assets/img/jing2.png" v-if="o.status=='2'"/>
                            </li>
                        </ul>
                        <ul class="right2">
                            <li v-for="o in allList.slice(17,22)" :key="o.toiletId">
                                <img src="../../assets/img/jing0.png" v-if="o.status=='0'"/>
                                <img src="../../assets/img/jing1.png" v-if="o.status=='1'"/>
                                <img src="../../assets/img/jing2.png" v-if="o.status=='2'"/>
                            </li>
                        </ul>
                        <ul class="left3">
                            <li v-for="o in allList.slice(22,27)" :key="o.toiletId">
                                <img src="../../assets/img/jing0.png" v-if="o.status=='0'"/>
                                <img src="../../assets/img/jing1.png" v-if="o.status=='1'"/>
                                <img src="../../assets/img/jing2.png" v-if="o.status=='2'"/>
                            </li>
                        </ul>
                        <ul class="right3">
                            <li v-for="o in allList.slice(27,32)" :key="o.toiletId">
                                <img src="../../assets/img/jing0.png" v-if="o.status=='0'"/>
                                <img src="../../assets/img/jing1.png" v-if="o.status=='1'"/>
                                <img src="../../assets/img/jing2.png" v-if="o.status=='2'"/>
                            </li>
                        </ul>
                        <ul class="left4">
                            <li v-for="o in allList.slice(32,37)" :key="o.toiletId">
                                <img src="../../assets/img/jing0.png" v-if="o.status=='0'"/>
                                <img src="../../assets/img/jing1.png" v-if="o.status=='1'"/>
                                <img src="../../assets/img/jing2.png" v-if="o.status=='2'"/>
                            </li>
                        </ul>
                        <ul class="right4">
                            <li v-for="o in allList.slice(37,44)" :key="o.toiletId">
                                <img src="../../assets/img/jing0.png" v-if="o.status=='0'"/>
                                <img src="../../assets/img/jing1.png" v-if="o.status=='1'"/>
                                <img src="../../assets/img/jing2.png" v-if="o.status=='2'"/>
                            </li>
                        </ul>
                        <div class="entrance entrance1">入口</div>
                    </div>
                </div>
                <Right :todayUseNum='todayUseNum' :allToilet='allToilet' :inuse='inuse' :empty='empty'></Right>
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
            todayUseNum:'',
            allUseNum:'',
            stompClient:'',
            timer:'',
            allToilet:44,
            inuse:0,
            empty:0,
            lastPath:'',
            allList:[ 
                {toiletId:'45',deviceCode:'',deviceId:'',status:'2',style:'1'},
                {toiletId:'46',deviceCode:'',deviceId:'',status:'2',style:'1'},
                {toiletId:'47',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'48',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'49',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'50',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'51',deviceCode:'',deviceId:'',status:'2',style:'0'},
                 
                {toiletId:'52',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'53',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'54',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'55',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'56',deviceCode:'',deviceId:'',status:'2',style:'0'},
                 
                {toiletId:'57',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'58',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'59',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'60',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'61',deviceCode:'',deviceId:'',status:'2',style:'0'},
                
                {toiletId:'62',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'63',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'64',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'65',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'66',deviceCode:'',deviceId:'',status:'2',style:'0'},
                
                {toiletId:'67',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'68',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'69',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'70',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'71',deviceCode:'',deviceId:'',status:'2',style:'0'},
                
                {toiletId:'72',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'73',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'74',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'75',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'76',deviceCode:'',deviceId:'',status:'2',style:'0'},
                
                {toiletId:'77',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'78',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'79',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'80',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'101',deviceCode:'',deviceId:'',status:'2',style:'0'},
                
                {toiletId:'102',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'103',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'104',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'105',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'106',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'107',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'108',deviceCode:'',deviceId:'',status:'2',style:'0'},
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
                    self.todayUseNum = statusStr.msg.split(';')[2];
                    self.allUseNum = statusStr.msg.split(';')[3];
                    let inuse = 0;
                    let empty = 0;
                    self.allList.forEach(e=>{
                        for( var i in statusObj){
                            if(i == e.toiletId){   			
                                if(statusObj[i] == '00'){
                                    e.status = '0'
                                    empty ++
                                }else if(statusObj[i] == '01'){
                                    e.status = '1'
                                    inuse ++;
                                }else if(statusObj[i] == '02'){
                                    e.status = '2'
                                }
                                break;
                            }else{
                                e.status = '2'
                            }
                        }                  
                    })
                    self.inuse = inuse;
                    self.empty = empty;
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
        clearInterval(this.timer);
    }

}
 </script>
 
<style >
 </style>
 