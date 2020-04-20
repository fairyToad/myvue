<template>
  <div>

      <mh></mh>

    <main class="" id="main-collapse">

    <div class="hero-full-wrapper">
       <div v-masonry transition-duration="0.3s" item-selector=".grid-item" class="grid">
       <div class="gutter-sizer"></div>
         <div class="grid-sizer"></div>
         
         <div v-masonry-tile class="grid-item" v-for="item in datalist">
           <img class="img-responsive" alt="" :src="'http://localhost:8000/'+item.img+''" />
           <a :href="'http://localhost:8081/detail?id='+item.id" class="project-description">
             <div class="project-text-holder">
               <div class="project-text-inner">
                 <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>

                 <!-- <p><TextEllipsis :text="item.desc" :height="100" v-width="200">
                    <template slot="more">...</template>
                  </TextEllipsis>
                </p> -->


               </div>
             </div>
           </a>
         </div>


         
       </div>
     </div>


     <!--  分页 -->

    <div>        
        <p>pagination: {{pagination}}</p>
        <p><Pagination v-model="pagination" @change="change"></Pagination></p>
      </div>



      <div>
					<a v-show="lastpage" @click="mychange(lastpage)" >上一页</a>
					<ul >
						<li v-for="index in all">
							<a   @click="mychange(index)">{{ index }}</a>
						</li>
          </ul>
          <a v-show="nextpage" @click="mychange(nextpage)" >下一页</a>
				
        </div>
        
        <br /><br />


        <input v-model="mymsg" placeholder="输入要推送的消息">
        <button @click="sendmsg">推送</button>


    </main>

    
    
  

  </div>
</template>


 
<script>

import mh from './mh.vue'

export default {
  data () {
    return {
      msg: "这是一个变量",
      mymsg:'',
      datalist:[],
      pagination: {
        page: 1,
        size: 1,
        total: 0
      },
      total:0,
				cur: 1, //当前页码
        all: 0,  //总页数
        lastpage:0,//上一页
        nextpage:0//下一页
    }
  },
  components: {
        'mh':mh
  },
  mounted:function(){

    this.mychange(1);

    //获取数据
    var _this = this;
    this.axios.get('http://localhost:8000/clist/',{

      //设置参数
      params:{
      page:this.pagination.page,
      size:this.pagination.size
      }

}).then(function(result) {

          var mylist = [];
                 console.log(result);
                 _this.datalist = result.data.data;
                 _this.pagination.total = result.data.total;

                 for(let i=0;i<result.data.length;i++){

                  mylist.push(result.data[i].title);

                 }

                 console.log(mylist);


             }); 
  

},
  methods:{
    sendmsg(){

      //使用箭头函数
    this.axios.get('http://localhost:8000/send/',{params:{msg:this.mymsg}}).then((result) => {

            
        console.log(result);


        });



    }
    ,
      changetest(index){
          this.clicked = index;
      },
      mychange(page){

        //获取数据
    var _this = this;
    this.axios.get('http://localhost:8000/clist/',{
      //设置参数
      params:{
      page:page,
      size:1
      }

}).then(function(result) {        
                 _this.datalist = result.data.data;
                 //判断上一页
              if(page==1){
                      _this.lastpage = 0;
                    }else{
                      _this.lastpage = page - 1;
                    }
								//计算总页数
                _this.all =  Math.ceil(result.data.total / 1);
                
                 //判断下一页
              if(page==_this.all){
                      _this.nextpage = 0;
                    }else{
                      _this.nextpage = page + 1;
                    }



             });
      },
      //分页
      change(value) {
      console.log(value);


      //获取数据
    var _this = this;
    this.axios.get('http://localhost:8000/clist/',{

      //设置参数
      params:{
      page:this.pagination.page,
      size:this.pagination.size
      }

}).then(function(result) {        
                 _this.datalist = result.data.data;

             });




    },
  }
}


</script>
 
<style>



</style>