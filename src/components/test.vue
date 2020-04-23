<template>
    <div>
        <div>
            <!-- v-html不仅可以嵌入标签来输出变量,还可以解析html标签 -->
            <div v-html="msg"></div>
            {{msg}}
        </div>

        <div>
            <!-- v-show 隐藏或者展示-->
            <h2 v-show="ok">hello world</h2>
            <!-- v-if可以实现隐藏或展示,还可进行多重判断 -->
            <h2 v-if="ok">hello world</h2>

            <div v-if="type==='A'">A</div>
            <div v-else-if="type==='B'">B</div>
            <div v-else-if="type==='C'">C</div>
            <div v-else>
                D
            </div>
        </div>

        <div>
            <!-- 循环语句 -->
            <!-- 冒号语法糖代表v-bind,可以绑定属性 -->
            <!-- {on:index%2==0,off:index%2!=0}此为根据下标判断单偶行的表达式 -->
            <ul>
                <!-- 索引需要写在item后面 -->
                <li v-for="(item,index) in alist" :key='index' :class="{on:index%2==0,off:index%2!=0}">
                    {{item.name}}
                </li>
            </ul>
        </div>

        <div>
            <!-- 调用计算属性 -->
            {{reverse_msg}}

            <!-- 调用自定义方法 -->
            {{reverse_msg2()}}
            

            <!-- 侦听属性调用 -->
            {{count}}
            <button @click="count++">点击加一</button>

        </div>



    </div>
</template>

<script>
export default {
    // 初始化数据
    data() {
        return {
            msg:'<h3>这是一个变量</h3>',
            // 定义一个布尔值的变量,1也代表true
            ok:true,
            type:'A',
            alist:[
                {name:'iPhone8',price:20,num:1},
                {name:'iPhone9',price:21,num:2},
                {name:'iPhoneX',price:22,num:1},
            ],
            count:0
        }
    },

    // 钩子方法,模板渲染前加载
    mounted() {
        
    },
    // 在数据渲染之前加载
    created() {
        
    },
    // 自定义方法
    methods: {
        // 反转
        reverse_msg2(){
            return this.msg.split('').reverse().join('');
        }

    },

    // 计算属性,调用内部的方法名称实现一些操作,是一种理念,并不改变原有的值,
    // 也可以在自定义方法内部实现这些业务逻辑,
    computed: {
        // 反转
        reverse_msg(){
            return this.msg.split('').reverse().join('');
        }
    },

    // 侦听属性
    // 内部方法名称需要和其监听的变量同名
    watch: {
        count(nval,oval){
            console.log('计数器由'+oval+'变为'+nval )
        }
    },

}
</script>

<style>
.on {
    background: rebeccapurple;
    color: #000;
}
.off {
    background: red;
    color: #000;
}
</style>
