<template>
  <div>

	<myheader></myheader>

	<section class="featured-block text-center">
		<div class="container">
			<div class="row">
				<div class="col-md-6 text-center">
					<div class="product-image mt-3">
						<img class="img-fluid" :src="'http://localhost:8000/static/upload/'+info.img">
					</div>
					<div class="product-thumbnails"><a href="#">
						<img class="mt-2 mr-2 img-fluid" src="../assets/images/placeholder-product.jpg" ></a>
						<a href="#">
							<img class="mt-2 mr-2 img-fluid" src="../assets/images/placeholder-product.jpg" ></a>
						<a href="#">
							<img class="mt-2 mr-2 img-fluid" src="../assets/images/placeholder-product.jpg" ></a>
						<a href="#">
							<img class="mt-2 mr-2 img-fluid" src="../assets/images/placeholder-product.jpg" ></a>
						<a href="#">
						<img class="mt-2 mr-2 img-fluid" src="../assets/images/placeholder-product.jpg" ></a></div>
				</div>
				<div class="col-md-6 mt-5 mt-md-2 text-center text-md-left">
					<h2 class="mb-3 mt-0">{{info.name}}</h2>
					<p class="lead mt-2 mb-3 primary-color">${{info.price}}</p>
					<!-- 涉及到类型转换,将字符串转回json -->
					颜色:{{JSON.parse(info.params).color}}<br>
					尺码:{{JSON.parse(info.params).size}}<br>
					季节:{{JSON.parse(info.params).season}}


					<h5 class="mt-4">Description</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis velit vestibulum massa sollicitudin auctor. Cras ac venenatis orci. Ut consequat, purus ut ultrices ultricies, nisi sem ornare quam, sed ultricies mi nisl sit amet purus.</p>
					<p>Suspendisse potenti. Nunc in libero luctus, sagittis leo sit amet, volutpat lacus. Quisque a porta risus. Integer aliquet nibh vitae vestibulum accumsan</p>
					<h5 class="mt-5">Care Instructions</h5>
					<p>Suspendisse cursus erat sed sem sagittis cursus. Etiam porta sem malesuada magna mollis euismod.</p>
					<select class="custom-select form-control mt-4 mb-4">
						<option selected>Size</option>
						<option value="1">Small</option>
						<option value="2">Medium</option>
						<option value="3">Large</option>
					</select>
					
					<!--Quantity: <input type="text" class="form-control quantity mb-4" name="" value="1">-->
					
					<a href="#" class="btn btn-full-width btn-lg btn-outline-primary">Add to cart</a></div>
			</div>
		</div>
	</section>
	
	<div class="divider"></div>
	
	<section class="products text-center">
		<div class="container">
			<h3 class="mb-4">Related Products</h3>
			<div class="row">
				<div class="col-sm-6 col-md-3 col-product">
					<figure>
						<img class="rounded-corners img-fluid" src="../assets/images/placeholder-product.jpg"	width="240" height="240">
						<figcaption>
							<div class="thumb-overlay"><a href="#" title="More Info">
								<i class="fas fa-search-plus"></i>
							</a></div>
						</figcaption>
					</figure>
					<h4><a href="#">Product Name</a></h4>
					<p><span class="emphasis">$19.00</span></p>
				</div>
				<div class="col-sm-6 col-md-3 col-product">
					<figure>
						<img class="rounded-corners img-fluid" src="../assets/images/placeholder-product.jpg"	width="240" height="240">
						<figcaption>
							<div class="thumb-overlay"><a href="#" title="More Info">
								<i class="fas fa-search-plus"></i>
							</a></div>
						</figcaption>
					</figure>
					<h4><a href="#">Product Name</a></h4>
					<p><span class="emphasis">$19.00</span></p>
				</div>
				<div class="col-sm-6 col-md-3 col-product">
					<figure>
						<img class="rounded-corners img-fluid" src="../assets/images/placeholder-product.jpg"	width="240" height="240">
						<figcaption>
							<div class="thumb-overlay"><a href="#" title="More Info">
								<i class="fas fa-search-plus"></i>
							</a></div>
						</figcaption>
					</figure>
					<h4><a href="#">Product Name</a></h4>
					<p><span class="emphasis">$19.00</span></p>
				</div>
				<div class="col-sm-6 col-md-3 col-product">
					<figure>
						<img class="rounded-corners img-fluid" src="../assets/images/placeholder-product.jpg"	width="240" height="240">
						<figcaption>
							<div class="thumb-overlay"><a href="#" title="More Info">
								<i class="fas fa-search-plus"></i>
							</a></div>
						</figcaption>
					</figure>
					<h4><a href="#">Product Name</a></h4>
					<p><span class="emphasis">$19.00</span></p>
				</div>
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

export default {
    data () {
        return {
			msg: "这是一个变量",
			id:1,
			// 商品详情(根据返回值(console.log)确定定义的数据类型)
			info:{},
        }
    },
    //注册组件标签
    components:{
        'myheader':myheader
    },
    mounted:function(){
		// 接收上个页 面传递的商品id
		this.id=this.$route.query.id;
		console.log(this.id)
		// 获取商品详情
		this.axios.get('http://localhost:8000/goodinfo/',{params:{id:this.id}}).then(res=>{
			console.log(res)
			this.info=res.data

		})
		
	},
	
    methods:{ 

    },
}


</script>
 
<style>



</style>