<template>
    <div id="app">
        <tr>
            <th>序号</th>
            <th>名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
        </tr>
        <tr>
            <td>{{id}}</td>
            <td>iPhone8</td>
            <td>5099</td>
            <td>
                <button @click="jian()">-</button>
                    {{num1}}
                <button @click="add()">+</button>
            </td>
            <td><button>移除</button></td>
        </tr>

        <tr>
            <td>{{id}}</td>
            <td>iPhone8</td>
            <td>5099</td>
            <td>
                <button>-</button>
                    {{num2}}
                <button>+</button>
            </td>
            <td><button>移除</button></td>
        </tr>

        <tr>
            <td>{{id}}</td>
            <td>iPhone8</td>
            <td>5099</td>
            <td>
                <button>-</button>
                    {{num3}}
                <button>+</button>
            </td>
            <td><button>移除</button></td>
        </tr>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // id的初始值为1,再添加一个不同类别的商品,id++
            id:1,

            // 最小为1
            num1:1,
            num2:1,
            num3:1,
        }
    },
    methods: {
        add(){
            this.num1++
        },
        jian(){
            if(this.num1<=1){
                this.num1===1
            }else{
                this.num1--
            }
            
            
        }
    },

}
</script>

<style>

</style>
