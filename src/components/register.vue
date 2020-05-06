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
                <!-- 注册 -->
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
                                确认密码:
                            </td>
                            <td>
                                <input type="password" v-model="password2">
                            </td>
                        </tr>

                        <tr>
                            <td>
                                手机号:
                            </td>
                            <td>
                                <input type="text" v-model="phone">
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>
                                <Button color="blue" @click="submit">提交</Button>
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

export default {
    //注册组件标签
    components:{
        'myheader':myheader
    },

    // 定义变量
    data () {
        return {
            // 表单数据
            username: "",
            password:"",
            password2:"",
            phone:"",

            //面包屑导航变量
            datas:[
                {title:'首页',route:{name:'index'}},
                {title:'注册页面',route:{name:'register'}},
            ]
        }
    }, 
    
    mounted:function(){

    },
    methods:{
        // 定义提交事件
        submit(){
            // 非空验证
            if (this.username=='') {
                this.$Message('用户名不能为空');
                return false;
            }
            if (this.password!==this.password2) {
                this.$Message('密码输入不一致 ');
                return false;
            }
            if (!/^1[34578]\d{9}$/.test(this.phone)) {
                this.$Message('请输入正确手机号 ');
                return false;
            }

            // 请求后台接口
            this.axios.get(
                'http://localhost:8000/register/',
                {params:{
                    username:this.username,
                    password:this.password,
                    phone:this.phone,
                }}
            ).then(res=>{
                    console.log(res)
                    if (res.data.code==200) {
                        this.$Message(res.data.message);
                        this.$router.push("/login");
                    }
                }
            )
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


</style>