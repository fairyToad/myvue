<template>
  <div>
	<myheader></myheader>
		<section class="featured-block text-center">
		<div class="container">
				<div>
				<Breadcrumb :datas="datas"></Breadcrumb>
			</div>
			<div>			
					<!-- <img :src="src" /> -->
					<Avatar :src="src" :width="150" fit="fill"></Avatar>
			</div>
			<div>
				绑定手机号:{{phone}}
			</div>
			<div>			
				<table>
					<tr>
						<td>
							用户头像:						
						</td>
						<td>
							<input type="file" @change="upload">
						</td>
					</tr>
					<tr>
						<td>
							七牛云上传:
						</td>
						<td>
							<input type="file" @change="upload_qiniu">
							{{load_percent}}
							<br>
							<!-- 进度条三方标签 发送请求如发邮件,视频,文件都可以使用-->
							<Progress color='green' :percent='load_int' v-show="load_int">
								<span slot="text">{{ load_int }}%</span>
							</Progress>

						</td>
					</tr>
					<tr>					
						<td>
							拖拽上传又拍云:
						</td>
						<td>
						<input type="file" @change="upload_upyun" />
						<div id="upload">
							拖拽上传
						</div>
						</td>
					</tr>
					<tr>
						<td></td>
						<td>	
							<video v-show="videosrc" width="300" height="200" :src="videosrc"  controls="controls" autoplay="autoplay" ></video>
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
	  //手机号变量
	  phone:'',
	  //整形进度
	  load_int:0,
	  //上传进度展示变量:
	  load_percent:'',
      //七牛云token
      token:'',
      //验证码图片地址
      src:'',
      //视频播放地址
      videosrc:'',
      //面包屑导航变量
      datas:[{title:'首页',route:{name:'index'}},{title:'用户中心->我的首页'}]
    }
  },
  //注册组件标签
  components:{

  	'myheader':myheader

  },
  mounted:function(){

    //获取最新的token
    this.get_token();
    //注册拖拽容器
    let upload = document.querySelector("#upload");
    //声明监听事件
    upload.addEventListener('dragenter',this.onDrag,false);
    upload.addEventListener('dragover',this.onDrag,false);
    upload.addEventListener('drop',this.onDrop,false);	

	// 进入用户中心,展示自己的头像
	this.axios({
		method:'get',
		url:"http://localhost:8000/userinfo/",
		params:{
			uid:localStorage.getItem('uid'),
			jwt:localStorage.getItem('jwt'),
		}
	}).then(res=>{
		if(res.data.code==200){
			console.log(res);
			this.src='http://localhost:8000/static/upload/'+res.data.img;
			this.phone=res.data.phone
		}else{	
			alert(res.data.message)
			this.$router.push('/login');
			localStorage.removeItem('uid');
			localStorage.removeItem('username');
			localStorage.removeItem('jwt');
			
		}
		
	})
		  



  
},
  methods:{

  	//监听用户鼠标
  	onDrag(e){

  		e.stopPropagation();
  		e.preventDefault();
  	},
  	onDrop(e){

  		e.stopPropagation();
  		e.preventDefault();

  		//调用自定义上传方法
  		this.upload_upyun(e.dataTransfer.files);

  	},
  	//又怕云拖拽上传
  	upload_upyun:function(files){



  		//获取拖拽的文件
  		let file = files[0];

  		console.log(file);

  		//声明参数
  		let param = new FormData();
  		param.append('file',file);

  		//声明头部信息
  		const config = {
  			headers:{'Content-Type':'multipart/form-data'}
  		}

  		//发送请求
  		this.axios.post('http://localhost:8000/upyun/',param,config).then((result) =>{

  			console.log(result);

  		});



  	},
  	get_token:function(){


  		//请求后台接口
  		this.axios.get('http://localhost:8000/qiniu/').then((result) =>{

  			console.log(result);

  			this.token = result.data.token;

  			console.log(this.token);

  		});

  	},
  	upload_qiniu:function(e){

  		//获取文件
  		let file = e.target.files[0];

  		//声明表单参数
  		let param = new FormData();

  		param.append('file',file,file.name);
  		param.append('token',this.token);

  		//自定义axios
  		const axios_qiniu = this.axios.create({withCredentials:false});

  		//发送请求
  		axios_qiniu({
  			method:'POST',
  			url:'http://up-z1.qiniup.com/',
  			data:param,
  			timeout:30000,
			//上传过程中的方法
			onUploadProgress:(e) =>{
				//计算上传百分比
				var complete = (e.loaded/e.total);
				if (complete < 1) {
					this.load_percent=(complete*100).toFixed(2)+"%";
					this.load_int=parseInt((complete*100).toFixed(2));	
				}
			}
  		}).then(result =>{

			//手动赋值100%(由于网络波动,e.loaded的值并不准确,需要人为的在上传完成后将其复制为100%)
			this.load_percent='100%';
			this.load_int=100;

  			console.log(result);
  			this.src = "http://q9kst4fjn.bkt.clouddn.com/"+result.data.key;
  			this.videosrc = config['baseurl']+result.data.key;
  		});
	  },
	  

  	//定义提交事件(上传文件)
  	upload:function(e){

  		//获取文件
  		let file = e.target.files[0];
  		//声明表单参数
  		let param = new FormData();
		// 文件的key,文件实体,文件名称
  		param.append('file',file,file.name);
  		param.append('uid',localStorage.getItem("uid"));

  		//声明请求头
  		let config = {headers:{'Content-Type':'multipart/form-data'}}
  		//请求后台接口
  		this.axios.post('http://localhost:8000/upload/',param,config).then((result) =>{
  			console.log(result);
  			this.src = "http://localhost:8000/static/upload/"+result.data.filename;
  		});
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

#upload{

	margin:100px auto;
	width:300px;
	height:150px;
	border:2px dashed #f00; 

}



</style>