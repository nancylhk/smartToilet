<template>
    <div class="new-display-container">
        <!-- 头部 -->
        <Header :lastPath='lastPath'></Header>
        <div class="display-container-part">
            <div class="display-Box clearfix">
                <!-- zuobian -->
                <Left :allUseNum='allUseNum' :weatherInfo='weatherInfo'></Left>
                <div class="second-box ">
                    <img src="../../assets/img/display4.png" class="toilet1Pic"/>
                    <div class="display-set4">
                        <ul class="left1">
                            <li class="zawuBox">
                                <img src="../../assets/img/zawu4.png" class="zawu"/>
                                <!-- <span>杂物间</span> -->
                            </li>
                            <li v-for="o in allList.slice(1,7)" :key="o.toiletId">
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
            allToilet:43,
            inuse:0,
            empty:0,
            lastPath:'',
           allList:[ 
                {toiletId:'',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'6',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'5',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'4',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'3',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'2',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'1',deviceCode:'',deviceId:'',status:'2',style:'0'},

                {toiletId:'7',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'8',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'9',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'10',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'11',deviceCode:'',deviceId:'',status:'2',style:'0'},
                
                {toiletId:'16',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'15',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'14',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'13',deviceCode:'',deviceId:'',status:'2',style:'1'},
                {toiletId:'12',deviceCode:'',deviceId:'',status:'2',style:'1'},
                
                {toiletId:'17',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'18',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'19',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'20',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'21',deviceCode:'',deviceId:'',status:'2',style:'0'},
                
                {toiletId:'26',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'25',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'24',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'23',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'22',deviceCode:'',deviceId:'',status:'2',style:'0'},
                
                {toiletId:'27',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'28',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'29',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'30',deviceCode:'',deviceId:'',status:'2',style:'1'},
                {toiletId:'31',deviceCode:'',deviceId:'',status:'2',style:'1'},
                
                {toiletId:'36',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'35',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'34',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'33',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'32',deviceCode:'',deviceId:'',status:'2',style:'0'},
                
                {toiletId:'37',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'38',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'39',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'40',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'41',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'42',deviceCode:'',deviceId:'',status:'2',style:'0'},
                {toiletId:'43',deviceCode:'',deviceId:'',status:'2',style:'0'},
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
                    self.inuse = inuse
                    self.empty = empty
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
 