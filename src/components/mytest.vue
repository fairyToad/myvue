<template>
    <div>

            <mh_test :total='this.totalCount()'></mh_test>

            <input type="text" v-model="myfile" >
            <input  type="file"  @change="update" />



        <br /><br />

        <Select v-model="select2" :datas="param"></Select>
        
        <button @click="ask()">请求后台接口</button>


        <router-link :to="{path:'/',query:{setid:123456}}">
                点击跳转1
            </router-link>

        <input type="text" v-model="message" >

        <img src="http://localhost:8000/myc/" />

        {{ message + '不好啊' }}
        {{ message.split("").reverse().join("") }}
        <br /><br />
        翻转前 : {{ message }}
        <br />
        翻转后 : {{ reverse_message }}
        <br /><br />
        千米 : <input type = "text" v-model = "kilometers">
        米 : <input type = "text" v-model = "meters">
        <br /><br />
        <div v-show="flag">

            你能看见我

        </div>
        <div v-if="num==10">

            num = {{ num }}

        </div>
        <div v-else-if="num==9">

            num = 9

        </div>
        <div v-else>

            num != 10

        </div>


        <ul>
            <li v-for='(item,index) in tlist' :class="{on:index%2==0,off:index%2!=0}">
                {{ item.text }}
            </li>
        </ul>

        <br /><br />

        <table border=1 style="width:100%;">
            <tr v-for="(item,index) in datalist">
                <td>{{ item.name }}</td>
                <td>
                    <button @click="minus(index)" >-</button>
                    <input type="text" v-model="item.num" />
                    <button @click="add(index)" >+</button>
                </td>
                <td>
                        {{ item.price }}
                </td>
            </tr>
        </table>

        <br />

        <button @click="add_cart(baoma)">添加宝马</button>

        <button @click="add_cart('电脑')">添加电脑</button>

        
        
        <br /><br />

        总数量:{{ totalCount() }}

        


        <Form :label-width="110" >
                
            <FormItem label="课程描述">
            <textarea rows="10" v-autosize v-wordcount="50" ></textarea>
        </FormItem>

        </Form>



        <TextEllipsis :text="text" :height="100" v-width="200">
                <template slot="more">...</template>
              </TextEllipsis>



              <div>
                    <Breadcrumb :datas="datas"></Breadcrumb>
                  </div>



                  <!--  分页 -->

                  <div>
                  
                        
                        <p>pagination: {{pagination}}</p>
                        <p><Pagination v-model="pagination" @change="change"></Pagination></p>
                      </div>


                <!--头像-->

                <Avatar src="http://localhost:8000/static/upload/touxiang.png" :width="100" fit="fill" noInfo></Avatar>


                <!-- 开关  -->

                <div><h-switch v-model="check1" @change="sw">测试</h-switch></div>

                <!-- 标志数  -->

                <Badge :count="count"><div class="text-center"><a href="http://www.baidu.com">消息</a></div></Badge>


                <br /><br />

                <div class="text-ellipsis" v-width="100">超出内容省略超出内容省略</div>

                <br /><br />
                <Button @click="confirm">删除</Button>

                {{ 0 | myfilter }}

                <br /><br />

                <input v-model="mymsg" placeholder="输入要推送的消息">
                <button @click="sendmsg">推送</button>

                <br />

                {{ msglist }}
         

    </div>
</template>
   
  <script>

    import {config,formatXml} from '../config.js';
    //import mh_test from './mh_test.vue';

    import md5 from 'js-md5';


  export default {
    data () {
      return {
        myfile:'',
        mymsg:'',
        message:'hello world 你好',
        kilometers : 0,
        meters:0,
        baoma:'宝马',
        cartcount:0,
        tlist:[{text:'汽车'},{text:'面包'},{text:'牛奶'}],
        flag:false,
        num:9,
        count:1,
        check1:0,
        datalist:[],
        msglist:[],
        param: ['选择1', '选择2', '选择3'],
        select2:'选择1',
        text:'《华盛顿自由灯塔报》几天前报道称，美国国防部官员透露中国近日进行第十次东风-41洲际导弹的试射活动，这次试射中东风-41导弹投射了多个弹头并成功命中中国西部靶场目标。',
        datas: [{
                title: 'Home',
                route: { name: 'index' }
            }, {
                title: 'Component'
            }],
      pagination: {
        page: 1,
        size: 1,
        total: 3
      },
      timer: '',
    online: 0


      
      }
    },
    components: {
       // 'mh_test':mh_test
  },
  //过滤器
  filters: {
            myfilter: function (value) {

                if(value==1){
                    return '已支付';
                }else{
                    return '未支付';
                }
　　　　　　
　　　　}
　　},
    //计算属性
    computed:{

        reverse_message:function(){

            return this.message.split('').reverse().join('')

        }

    },
    //监听属性
    watch : {
        kilometers:function(val) {
            this.kilometers = val;
            this.meters = this.kilometers * 1000
        },
        meters : function (val) {
            this.kilometers = val/ 1000;
            this.meters = val;
        }
    },

    beforeDestroy() {
      clearInterval(this.timer);
    },
    //钩子方法
    mounted:function(){


        this.timer = setInterval(this.getonline,3000);

        console.log(md5('123'));
        console.log('202cb962ac59075b964b07152d234b70');

        //websocket

        var _this = this;
        //先判断浏览器是否支持websocket
        if ("WebSocket" in window) {
            console.log("您的浏览器支持 WebSocket!");
            // 打开一个 web socket
            var ws = new WebSocket("ws://localhost:8000/link/");
            ws.onopen = function () {
                // Web Socket 已连接上，使用 send() 方法尝试发送数据
                ws.send("test");
            };
            //监听服务端是否有消息发送过来，当有消息时执行方法
            ws.onmessage = function (evt) {
                //获取服务器发来的消息
                var received_msg = evt.data;
                //显示消息
                alert("收到消息："+received_msg);

                _this.msglist.push(received_msg);
            };
            //关闭页面或其他行为导致与服务器断开链接是执行
            ws.onclose = function () {
                // 关闭 websocket
                alert("连接已关闭...");
            };
        } else {
            // 浏览器不支持 WebSocket
            console.log("您的浏览器不支持 WebSocket!");
        }


        //初始化购物车
        var cardata = localStorage.getItem('test');
        if(cardata==null){
            var cartlist = [];
        }else{
            var cartlist = JSON.parse(cardata);
        }
        this.datalist = cartlist;
        this.cartcount = cartlist.length


        console.log(config['baseurl']);
        console.log(formatXml(123));

        //定义购物车数据
        var mydata = [{name:'汽车',num:0,price:1},{name:'电脑',num:0,price:2},{name:'手机',num:0,price:3}];

        //localStorage.setItem("mydata",JSON.stringify(mydata));
        //var sa = JSON.parse(localStorage.getItem('mydata'));

        //console.log(sa.length);


    },
    //绑定事件
    methods:{

        getonline() {
        this.online ++;
        console.log(this.online);
      },
        sendmsg(){

//使用箭头函数
this.axios.get('http://localhost:8000/send/',{params:{msg:this.mymsg}}).then((result) => {

      
  console.log(result);


  });



},
        confirm() {
   
   this.$Confirm('确定删除？', '自定义title').then(() => {
     this.$Message.success('确定删除！');
   }).catch(() => {
     this.$Message.error('取消');
   });
},

        sw(){

            if(this.check1==true){
                alert(1);
            }else{
                alert(0);
            }
            console.log(this.check1);


        },

        //分页
        change(value) {
      console.log(value);
    },
        update (e) {   // 上传照片
      let file = e.target.files[0]
      /* eslint-disable no-undef */
      let param = new FormData()  // 创建form对象
      param.append('file', file, file.name)
      
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }

      var _this = this;
     // 添加请求头
    this.axios.post('http://localhost:8000/uptest/', param, config)
        .then(function(result) {

            console.log(result)
            _this.myfile = result.data.filename;
       
									 
    })

    },

        ask:function(){

            //window.location.href = 'https://api.weibo.com/oauth2/authorize?client_id=2636039333&redirect_uri=http://127.0.0.1:8000/md_admin/weibo';

            this.axios.get('http://localhost:8000/product_json/',{
    params: {
        id: '你好啊',
        name: 'Henry',
        sex: 1,
        phone: 13333333
    }
}).then(function(result) {
       
                 console.log(result);
             }); 

        //this.$router.push({path:'/',query:{setid:123456}});

        },
        totalCount : function(){
      var total = 0;
      for (var i = 0,l = this.datalist.length;i<l;i++) {
        total+=this.datalist[i].num;
      }
      return total;
    },
        //添加购物车逻辑
        add_cart:function(name){

            let cartlist = this.datalist;
            let findgood = 0;

            for(let i=0,l=cartlist.length;i<l;i++){
                    if(name == cartlist[i]['name']){

                        cartlist[i]['num']++;
                        findgood = 1;
                        break;
                    }
            }
            if(findgood==0){
                cartlist.push({name:name,num:1,price:1});
            }
            this.datalist = cartlist;
            this.cartcount = cartlist.length;
            localStorage.setItem('test',JSON.stringify(cartlist));

        },
        add:function(index){

            this.datalist[index].num++;
            localStorage.setItem('test',JSON.stringify(this.datalist));

        },
        minus:function(index){

            if( this.datalist[index].num > 0){

            this.datalist[index].num--;

            localStorage.setItem('test',JSON.stringify(this.datalist));

        }

        }

    }
  }
  </script>
   
<style>

.on {
			background: #cdcbff;
		}
.off {
    background: #fefdff;

}

</style>