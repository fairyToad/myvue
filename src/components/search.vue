// 首页

<template>
    <div>
		<myheader></myheader>

		
		<section class="products text-center">
			<div class="container">
				<h3 class="mb-4">商品检索</h3>
				<div class="row">
					<div v-for="i in goodslist" :key="i" class="col-sm-6 col-md-3 col-product">
						<figure>
							<img class="rounded-corners img-fluid" :src="'http://localhost:8000/static/upload/'+i.img" width="240" height="240">
							<figcaption>
								<div class="thumb-overlay"><a href="item.html" title="More Info">
									<i class="fas fa-search-plus"></i>
								</a></div> 
							</figcaption>
						</figure>
						<h4><a :href="'http://localhost:8080/item?id='+i.id">{{i.name}}</a></h4>
						<p><span class="emphasis">${{i.price}}</span></p>
					</div>
				</div>
				<!--简单版分页容器-->
				<div>
					<Pagination layout="pager,jumper" small @change="get_goods" v-model="pagination" ></Pagination>
				</div>
			</div>
			
		</section>
		
		<div class="divider"></div>
		
		
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

export default {
    data () {
		return {
			msg: "这是一个变量",
			// text关键字
			text:'',
			// 分页器变量
			pagination:{
				// 当前页
				page:1,
				size:1,
				total:4 
			},
			// 商品列表
			goodslist:[],
		}
},
	//注册组件标签
	components:{
		'myheader':myheader
	},

    mounted:function(){
		// 接收上个页面传递的关键字
		this.text=this.$route.query.text
		console.log(this.text)
		this.get_goods();

    },
	methods:{

		//获取商品列表接口
		get_goods:function(){
			//发送请求
			this.axios.get('http://localhost:8000/goodslist/',{params:{page:this.pagination.page,size:this.pagination.size,text:this.text}}).then((result) =>{
				// console.log(result);
				this.goodslist=result.data.data;
		        this.pagination.total = result.data.total;
			});
		},

    }
}


</script>



<style>

</style>