<template>
    <div id="app">
        <table>
            <tr>
                <th>序号</th>
                <th>名称</th>
                <th>价格</th>
                <th>数量</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item,index) in alist" :key="index">
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>
                    <button @click="jian(index)">-</button>
                        <input type="text" v-model="item.num">
                    <button @click="add(index)">+</button>
                </td>
                <td><button @click="pop(index)">移除</button></td>
            </tr>
        </table>

        <!-- 总计数 -->
        <div>
            总数量:{{ count() }}
            总价格:{{ totalprice() }}

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            alist:[
                {name:'iPhone8',price:20,num:1},
                {name:'iPhone9',price:21,num:2},
                {name:'iPhoneX',price:22,num:1},
            ],
        }
    },
    methods: {
        add(index){
            this.alist[index].num++
        },
        jian(index){
            if(this.alist[index].num<=1){
                this.alist[index].num===1
            }else{
                this.alist[index].num--
            }
        },
        // 总计数
        count(){
            // 初始化总数量
            let total=0;
            // 遍历列表的num,当i小于l的时候,累加给total
            for(let i=0,l=this.alist.length;i<l;i++){
                total += this.alist[i].num;
            }
            return total;
        },

        // 总价格
        totalprice(){
            let tp=0;
            for(let i=0,l=this.alist.length;i<l;i++){
                tp+=this.alist[i].num*this.alist[i].price
            }
            return tp
        },

        // 删除
        pop(index){
            this.alist.pop(index)
        }

    },

}
</script>

<style>

</style>
