// JavaScript Document
$(function(){
	//导航下拉菜单hover显示效果	
	$('.nav_l li').hover(function(e) {
			$(this).children('ul').stop().slideDown(200)
		},function(){	
			$(this).children('ul').stop().slideUp(200)
		});
		
		
	//banner轮播图
	$(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
	$('.slideBox ul li').hover(function(e) {
			$(this).addClass('current')
		});
		$('.slideBox .jb li').mouseover(function(e) {
			$(this).addClass('current').siblings().removeClass();//完成角标的工作
			
			$('.slideBox .bd li').eq($(this).index()).hide().stop().fadeIn().siblings().hide()
			
			num=$(this).index();
		});

	//医院排行图片切换
	
	
	$('.ph_b_r').hover(function(e) {
			$(this).toggleClass('current');
			$('.ph_b_r:eq(0)').children().toggle();
    });
	
	$('.ph_b_r').hover(function(e) {
		$(this).siblings().css({display:'none'})
    },function(){	
		$(this).siblings().css({display:'block'})
	});
	
	//搜索框获取焦点和失去焦点
//	$('.zzfw input').focus(function(){
//		if( $(this).val == '请输入关键字' ){	
//			$(this).val=''
//			$(this).style.color='#000'
//		}
//	})
//	$('.zzfw input').blur(function(){
//		if( $(this).val == '' ){	
//			$(this).val ='请输入内容'
//			$(this).style.color='#ccc'
//		}
//	})
//	
//
})



	









