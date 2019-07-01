$(document).ready(function(){
				$(".iconlist img").fadeIn(3000);
				 $("p").fadeIn(3000);
			});
			
			
			//////////////////////////////////
			
			$().nav();
			
			
			//////////////////////////////////
			
			  jQuery(function($){
			    $('#swiper').swiper({
			        // 轮播图盒子宽高
			        width:450,
			        height:350,
			        // 轮播间隔时间
			        duration:3000,
			        // 轮播图片路径
			        imgs:[
					'img/index/s1.png',
					'img/index/s2.jpg',
					'img/index/s3.png',
					'img/index/s4.png'],
			        // 轮播类型：vertical垂直horizontal水平滚动fade淡入淡出
			        type:'fade',
			        // 是否加入页码默认为true
			        page:true,
			        // 是否无缝滚动默认为true，当你需要淡入淡出效果时，请设置为false
			        marquee:false,
			        // 是否加入前后按钮默认为true
			         // pre_next:false
			        btnImg:['img/swiper/left.png','img/swiper/right.png'],
			    });
			})	
			//////////////////////////////////////////////////////
			$(document).ready(function(){
				$(".newlist1 button").click(function(){
					$(".newlist1 button").siblings().show(1000);
					$(".newlist2 button").siblings().hide();
					$(".newlist3 button").siblings().hide();
				});
				$(".newlist2 button").click(function(){
					$(".newlist2 button").siblings().show(1000);
					$(".newlist1 button").siblings().hide();
					$(".newlist3 button").siblings().hide();
				});
				$(".newlist3 button").click(function(){
					$(".newlist3 button").siblings().show(1000);
					$(".newlist1 button").siblings().hide();
					$(".newlist2 button").siblings().hide();
				});
			})
			
			////////////////////////////////////////
			
			
		
			