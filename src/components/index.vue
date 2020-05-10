// 首页

<template>
    <div>
		<myheader></myheader>
		<div id="carousel" class="carousel slide" data-ride="carousel">
				
			<div class="carousel-inner">
				<!--Text only with background image-->
				<div class="carousel-item active">
					<!--轮播图-->
					<Carousel @change="changeimg" @click="clickimg" pageTheme="circle" :datas="imgs"></Carousel>
				</div>			
			</div>
		</div>
        
		<section class="collections text-center ">
			<div class="container-fluid">
				<div class="row">
					<div class="collection col-md-6 alt-background">
						<div class="container container-right text-center">
							<div>
								<h1>Women's</h1>
								<p class="lead">Spring/Summer 2018 Collection</p>
								<a href="catalog.html" class="btn btn-outline-secondary">Browse Women's</a>
							</div>
						</div>
					</div>
					<div class="collection col-md-6 bg-secondary inverted">
						<div class="container container-left text-center">
							<div>
								<h1>Men's</h1>
								<p class="lead">Spring/Summer 2018 Collection</p>
								<a href="catalog.html" class="btn btn-outline-white">Browse Men's</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="featured-block text-center">
		<div class="container">
			<div class="row justify-center">
				<div class="col-md-6 text-center">
					<img class="mt-4 mb-4 img-fluid" src="../assets/images/placeholder-jacket.png" style="width: 100%;">
				</div>
				<div class="col-md-6 text-center text-md-left">
					<h2 class="mb-3">Spring/Summer Collection 2018</h2>
					<p class="lead mt-2 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed sem sagittis cursus.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Suspendisse cursus erat sed sem sagittis cursus. Etiam porta sem malesuada magna mollis euismod.</p>
					<a href="#" class="btn btn-md btn-outline-primary mt-3">Shop Now</a>
				</div>
			</div>
		</div>
		</section>
		
		<section class="products text-center">
			<div class="container">
				<h3 class="mb-4">Featured Products</h3>
				<div class="row">
					<div class="col-sm-6 col-md-3 col-product">
						<figure>
							<img class="rounded-corners img-fluid" src="../assets/images/placeholder-product.jpg"	width="240" height="240">
							<figcaption>
								<div class="thumb-overlay"><a href="item.html" title="More Info">
									<i class="fas fa-search-plus"></i>
								</a></div>
							</figcaption>
						</figure>
						<h4><a href="item.html">Product Name</a></h4>
						<p><span class="emphasis">$19.00</span></p>
					</div>
					<div class="col-sm-6 col-md-3 col-product">
						<figure>
							<img class="rounded-corners img-fluid" src="../assets/images/placeholder-product.jpg"	width="240" height="240">
							<figcaption>
								<div class="thumb-overlay"><a href="item.html" title="More Info">
									<i class="fas fa-search-plus"></i>
								</a></div>
							</figcaption>
						</figure>
						<h4><a href="item.html">Product Name</a></h4>
						<p><span class="emphasis">$19.00</span></p>
					</div>
					<div class="col-sm-6 col-md-3 col-product">
						<figure>
							<img class="rounded-corners img-fluid" src="../assets/images/placeholder-product.jpg"	width="240" height="240">
							<figcaption>
								<div class="thumb-overlay"><a href="item.html" title="More Info">
									<i class="fas fa-search-plus"></i>
								</a></div>
							</figcaption>
						</figure>
						<h4><a href="item.html">Product Name</a></h4>
						<p><span class="emphasis">$19.00</span></p>
					</div>
					<div class="col-sm-6 col-md-3 col-product">
						<figure>
							<img class="rounded-corners img-fluid" src="../assets/images/placeholder-product.jpg"	width="240" height="240">
							<figcaption>
								<div class="thumb-overlay"><a href="item.html" title="More Info">
									<i class="fas fa-search-plus"></i>
								</a></div>
							</figcaption>
						</figure>
						<h4><a href="item.html">Product Name</a></h4>
						<p><span class="emphasis">$19.00</span></p>
					</div>
				</div>
			</div>
		</section>
		
		<div class="divider"></div>
		
		<section class="cta text-center">
			<div class="container">
				<h3 class="mt-0 mb-4">Sign up now to save 10% on your first order</h3>
				<form class="subscribe">
					<div class="form-group row pt-3">
						<div class="col-sm-8 mb-3">
							<input type="text" class="form-control" id="inputName" placeholder="Your Name">
						</div>
						<div class="col-sm-4">
							<button type="submit" class="btn btn-lg btn-outline-primary">Sign me up</button>
						</div>
					</div>
				</form>
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

export default {
    data () {
		return {
			msg: "这是一个变量",
			//轮播图图片
			imgs:[
			{
				title:'广告活动页',
				link:'http://www.baidu.com',
				image:'http://localhost:8080/static/img/placeholder-jacket.f5996c6.png'
			},
			// {
			// 	title:'促销活动页',
			// 	link:'http://www.163.com',
			// 	image:'http://localhost:8080/static/img/placeholder-product.1011f1b.jpg'
			// }
			]
		}
},
	//注册组件标签
	components:{
		'myheader':myheader
	},

    mounted:function(){
		this.change_back();
		this.get_carousel();
    },

	methods:{
		//切换主题颜色
		change_back:function(){
			//获取样式表
			var styles = getComputedStyle(document.documentElement);
			//动态更改
			document.documentElement.style.setProperty("--bg-color","#292a2d");
			//字体颜色
			document.documentElement.style.setProperty("--a-color","white");
		},

		//获取轮播图接口
		get_carousel:function(){
			//发送请求
			this.axios.get('http://localhost:8000/getcarousel/').then((result) =>{
				console.log(result);
				var mylist = [];
				//遍历数组
				for(let i=0,l=result.data.length;i<l;i++){
						mylist.push({title:result.data[i].name,link:result.data[i].src,image:result.data[i].img});
				}
				this.img = mylist;
			});
		},

		//点击轮播图
		clickimg:function(index,data){
			//alert(data.link);
			//跳转
			window.location.href = data.link;
		},
		//切换轮播图
		changeimg:function(index,data){
			//console.log(data);
		}
    }
}


</script>



<style>

</style>