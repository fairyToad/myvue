// 骨架
<template>
    <div>
        <myheader></myheader>
        <section class="featured-block text-center">
            <div class="container">
                
                <div>
                    <!-- 面包屑导航 -->
                    <Breadcrumb :datas='datas'></Breadcrumb>
                </div>
                <!-- 登录 -->
                <div>
                    <table>

                        <tr>
                            <td>
                                用户名:
                            </td>
                            <td>
                                <input type="text" v-model="username"
                                placeholder='请输入用户名'>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                密    码:
                            </td>
                            <td>
                                <input type="password" v-model="password">
                            </td>
                        </tr>

                        <tr>
                            <td>
                                验证码:
                            </td>
                            <td>
                                <input type="text" v-model="code" />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td> 
                                <img class="imgcode" alt="点击刷新" :src="src"  @click="changecode" />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td> 
                                <!--滑块验证码-->
                                <drag-verify
                                :width="width"
                                :height="height"
                                :text="text"
                                ref="Verify"
                                ></drag-verify>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>
                                <Button color="blue" @click="submit">登录</Button>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        </section>

        <!-- 尾部组件 -->
        <footer class="footer">
            <div class="container">
                @v3u.cn
            </div>		
        </footer>
    </div>
</template>

// 行为
<script>
// 导入头部组件
import myheader from './myheader.vue'
//导入滑块验证码
import dragVerify from 'vue-drag-verify'; 

export default {
    //注册组件标签
    components:{
        'myheader':myheader,
        'dragVerify':dragVerify
    },

    // 定义变量
    data () {
        return {
            // 表单数据
            username: "",
            password:"",

            //面包屑导航变量
            datas:[
                {title:'首页',route:{name:'index'}},
                {title:'登录页面',route:{name:'login'}},
            ],

            //声明滑块验证码相关数据
            width:320,
            height:42,
            text:'请将滑块拖动到右边',

            //验证码图片地址
            src:'http://localhost:8000/code/',
            //验证码
            code:'',
        }
    }, 
    
    mounted:function(){

    },
    methods:{
        //刷新验证码
        changecode:function(){
            //生成随机数
            var num = Math.ceil(Math.random()*10);
            //进行传参
            this.src = this.src + "?num=" + num;
        },

        // 定义提交事件
        submit(){
            //判断是否拖动
            if (this.$refs.Verify.isPassing==false) {
                this.$Message('请将滑块挪至最右');
            }else{
                // 非空验证
                if (this.username=='') {
                    this.$Message('用户名不能为空');
                    return false;
                }

                // 请求后台接口
                this.axios.get(
                    'http://localhost:8000/login/',
                    {params:{
                        username:this.username,
                        password:this.password,
                        code:this.code,
                    }},
                ).then(res=>{
                        console.log(res)
                        // 先判定验证码是否成功
                        if(res.data.code==200){
                            localStorage.setItem('username',res.data.username)
                            localStorage.setItem('uid',res.data.uid)
                            this.$Message(res.data.message)
                            //跳转首页
                            this.$router.push('/') 
                        }else{
                            this.$Notice(res.data.message);
                        }
                    }
                )
            }
        }
    },
}

</script>


// 样式
<style>
    /* 标签选择器 */
    td{
        padding: 10px;
    }
    .imgcode {
	cursor:pointer;
    }


</style>