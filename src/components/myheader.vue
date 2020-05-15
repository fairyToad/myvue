 <template>
	<div>
		<section class="header text-center">
		<nav class="navbar navbar-expand-lg  navbar-custom">
			<div class="container"><a class="navbar-brand" href="/"><i class="fas fa-shopping-bag primary-color mr-1"></i>{{$t('m.index')}}</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-1" aria-controls="navbar-1" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
				<div class="collapse navbar-collapse pull-xs-right justify-content-end" id="navbar-1">
					<ul class="navbar-nav mt-2 mt-md-0">
						<li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li>
						<li class="nav-item dropdown mega-menu"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop </a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<div class="container">
									<div class="divider"></div>
									<div class="row">
										<div class="col-md-2">
											<h6 class="text-uppercase">Women's</h6>
											<ul class="nav flex-column">
												<li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
											</ul>
										</div>
										<div class="col-md-2">
											<h6 class="text-uppercase">Men's</h6>
											<ul class="nav flex-column">
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
											</ul>
										</div>
										<div class="col-md-2">
											<h6 class="text-uppercase">Girl's</h6>
											<ul class="nav flex-column">
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
											</ul>
										</div>
										<div class="col-md-2">
											<h6 class="text-uppercase">Boy's</h6>
											<ul class="nav flex-column">
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
											</ul>
										</div>
										<div class="col-md-4">
											<h6 class="text-uppercase">Featured Items</h6>
											<div class="row">
												<div class="col-6 text-center"><a href="item.html">
													<img src="images/placeholder-product.jpg" alt="" class="img-fluid mt-2 mb-3"></a>
													<h6 class="mb-0"><a href="item.html">Product Name</a></h6>
													<p><span class="emphasis">$49.00</span></p>
													<a href="#" class="btn btn-sm btn-outline-secondary mt-0">Buy Now</a>
										</div>
												<div class="col-6 text-center"><a href="item.html">
													<img src="images/placeholder-product.jpg" alt="" class="img-fluid mt-2 mb-3"></a>
													<h6 class="mb-0"><a href="item.html">Product Name</a></h6>
													<p><span class="emphasis">$49.00</span></p>
													<a href="#" class="btn btn-sm btn-outline-secondary mt-0">Buy Now</a>
										</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages </a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="index.html">Homepage</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="catalog.html">Catalog</a>
								<a class="dropdown-item" href="item.html">Item Detail</a>
								<a class="dropdown-item" href="cart.html">Cart</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="contact.html">Contact</a>
							</div>
						</li>
						<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>

					<!-- 搜索框 -->
					<li class="nav-item dropdown">
						<Search @search='search' v-model="text"></Search>
					</li>

						<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-shopping-cart"></i> <span class="badge badge-pill badge-primary">3</span></a>
							<div class="dropdown-menu dropdown-menu-right dropdown-cart" aria-labelledby="navbarDropdown">
								<h6>3 Items <span class="emphasis">$147.00</span></h6>
								<div class="dropdown-divider"></div>
								<ul class="shopping-cart-items">
									<li class="row">
										<div class="col-3">
											<img src="images/placeholder-product.jpg" width="60">
										</div>
										<div class="col-9">
											<h6><a href="item.html">Product Name</a></h6>
											<span class="text-muted">1x</span>
											<span class="emphasis">$49.00</span></div>
									</li>
									<li class="row">
										<div class="col-3">
											<img src="images/placeholder-product.jpg" width="60">
										</div>
										<div class="col-9">
											<h6><a href="item.html">Product Name</a></h6>
											<span class="text-muted">1x</span>
											<span class="emphasis">$49.00</span></div>
									</li>
									<li class="row">
										<div class="col-3">
											<img src="images/placeholder-product.jpg" width="60">
										</div>
										<div class="col-9">
											<h6><a href="item.html">Product Name</a></h6>
											<span class="text-muted">1x</span>
											<span class="emphasis">$49.00</span></div>
									</li>
								</ul>
								<a href="cart.html" class="btn btn-lg btn-full-width btn-primary" style="margin: 0;">View Cart</a></div>
						</li>
					</ul>
				</div>
			</div>
			<div v-if="username==''">
				<router-link to='/login' >登 录</router-link>
				/
				<router-link to='/register' >注 册</router-link>
			</div>
			<div v-else>
				欢迎您:<a href="/myprofile">{{ username }}</a>
				&nbsp;&nbsp;
				<Button color="black" @click="logout">登 出</Button>
			</div>

			<div>
				<!-- 开关 -->
				<h-switch v-model="lang" @change="lang_change">中/英</h-switch>
			</div>
		</nav>
	</section>
	</div>
</template>

<script>
export default{
	//定义数据
	data(){
		return {
			msg:'<h1>这是一个变量</h1>',
			// 模糊搜索关键词变量
			text:'',
			//用户名
			username:'',
			//开关变量
			lang:1
		}
	},
	// 监听属性(监听页面变化,解决search页面参数无法传递的问题)
	watch: {
		$route(to,from){
			this.$router.go(0);
		}
	},

	//钩子方法  
	mounted:function(){

		// 页面加载之前读取浏览器的语言,帮用户选择语言
		if (navigator.language=='zh-CN') {
			this.$i18n.locale='zh'
		}else{
			this.$i18n.locale='en'
		}

		// 客制化
		// 语言及切换按钮全局状态保持
		// 读取localStorage的信息,并赋值给变量lang_local
		var lang_local=localStorage.getItem('lang');
		// 如果lang_local有值,说明用户切换过语言按钮
		if (lang_local) {
			// 那么我们就让语言渲染为存储的语言
			this.$i18n.locale=lang_local;
			// 将lang赋值为对应的值(按钮的状态也应该跟随保持)
			if(lang_local == 'zh'){
				this.lang = 1;
			}else{
				this.lang = 0;
			}
		// 否则就说明用户没有自定义语言,
		} else {
			// 我们将其渲染为默认语言
			this.$i18n.locale='zh';
			// 将lang赋值为对应的值
			this.lang=1;
		}
		

		//接收三方参数
		var sina_id = this.$route.query.sina_id;
		var user_id = this.$route.query.uid;

		if(sina_id){
			//自动帮用户进行登录操作
			localStorage.setItem("username",sina_id);
			localStorage.setItem("uid",user_id);
		}

		//判断是否登录
		var uname = localStorage.getItem("username");
		if(uname==null){
			//没登录
			this.username = '';
		}else{
			//登录
			this.username = uname;
		}
	}, 

	//自定义方法
	methods:{
		// 模糊搜索
		search:function(){
			// 携带关键词跳转到检索页
			this.$router.push({path:'/search',query:{text:this.text}})

		},


		// 点击按钮切换语言,并且存储在前端,用作状态保持的依据
		lang_change:function(){
			console.log(this.lang);
			if (this.lang==1) {
				this.$i18n.locale='zh';
				localStorage.setItem('lang','zh')
			}else{
				this.$i18n.locale='en';
				localStorage.setItem('lang','en')
			}
		},

		//登出操作
			logout:function(){
				//删除localstorage
				localStorage.removeItem("username");
				localStorage.removeItem('uid');
				localStorage.removeItem('jwt');
				//跳转
				this.username = '';
				this.$router.push("/");
			}
	}
}

</script>


<style>


</style>