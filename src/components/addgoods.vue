<template>
    <div>

        <myheader></myheader>
        <section class="featured-block text-center">
            <div class="container">
                
                <div>
                    <!-- 面包屑导航 -->
                    <Breadcrumb :datas="datas"></Breadcrumb>
                </div>

                <div>
                    <table>	
                        <tr>
                            <td>
                                商品分类:
                            </td>
                            <td>
                                <Select v-model="selected" :datas="category" ></Select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                商品名称:
                            </td>
                            <td>
                                <input type="text" v-model="name" placeholder="请输入商品名称">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                商品价格:
                            </td>
                            <td>
                                <input type="number" v-model="price">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                颜色:
                            </td>
                            <td>
                                <input type="text" v-model="color" />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                号码:
                            </td>
                            <td>
                                <input type="text" v-model="size" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                季节:                    
                            </td>
                            <td>
                                <input type="text" v-model="season" />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Button @click="submit">添加商品</Button>                        
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

        </section>
        <footer class="footer">
            <div class="container">
                @v3u.cn
            </div> 
        </footer>
    </div>
</template>
<script>

//导入组件
import myheader from './myheader.vue'

//导入文件
import {config,formatXml} from '../config.js';

export default {
    data () {
        return {
            msg: "这是一个变量",
            // 默认选中的分类
            selected:'手机',
            // 商品分类
            category:['yifu','shouji'],
            //名称
            name:'',
            price:0,
            color:'',
            size:'',
            season:'',
            // 存放分类对应的id
            goods_dict:{},
            //面包屑导航变量
            datas:[{title:'首页',route:{name:'index'}},{title:'添加商品'}]
        }
    },
    //注册组件标签
    components:{
        'myheader':myheader
    },
    mounted:function(){
        // 调用获取分类方法
        this.get_cate()
    },
    methods:{
        //添加商品逻辑
        submit:function(){
            //将普通字段转换为json
            var param = {};
            param['color'] = this.color;
            param['size'] = this.size;
            param['season'] = this.season;
            console.log(param);
            //转换字符串
            param = JSON.stringify(param);
            console.log(param);
            //发送请求
            this.axios.get('http://localhost:8000/addgoods/',{params:{name:this.name,price:this.price,params:param,cid:this.goods_dict[this.selected]}}).then((result) =>{
                console.log(result);
                this.$Message(result.data.message);
            });
        },

        // 获取category数据的方法,并在mounted调用
        get_cate:function(){
            this.axios.get('http://localhost:8000/category/').then(res=>{
                console.log(res);
                var cate=[];
                for(let i=0;i<res.data.length;i++){
                    cate.push(res.data[i]['name']);
                    this.goods_dict[res.data[i]['name']]=res.data[i]['id']
                }
                this.category=cate
            })
        }
    }
}


</script>

<style>
    td {
        padding:10px;
    }

    .imgcode {
        cursor:pointer;
    }
</style>