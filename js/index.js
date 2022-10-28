window.onload=function(){
	// 1. 获取元素
	var hour = document.querySelector('.hour'); // 小时的黑色盒子
	var minute = document.querySelector('.minute'); // 分钟的黑色盒子
	var second = document.querySelector('.second'); // 秒数的黑色盒子
	var inputTime = +new Date('2022-10-28 23:00:00'); // 返回的是用户输入时间总的毫秒数
						   
					
	function countDown() {
		var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
		var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数 
		var h = parseInt(times / 60 / 60 % 24); //时
		h = h < 10 ? '0' + h : h;
		hour.innerHTML = h; // 把剩余的小时给 小时黑色盒子
		var m = parseInt(times / 60 % 60); // 分
		m = m < 10 ? '0' + m : m;
		minute.innerHTML = m;
		var s = parseInt(times % 60); // 当前的秒
		s = s < 10 ? '0' + s : s;
		second.innerHTML = s;
	}
	
	var myimg=document.getElementById("imgid");
	function imgscroll(){
				if(myimg.src.match("images/iooq10.jpg")){
					myimg.src="images/11.11bg.jpg";
				}
				else if(myimg.src.match("images/11.11bg.jpg")){
					myimg.src="images/iooqneo7.jpg";
				}
				else if(myimg.src.match("images/iooqneo7.jpg")){
					myimg.src="images/vivox8mainbg.png";
				}
				else if(myimg.src.match("images/vivox8mainbg.png")){
					myimg.src="images/iooqtwsbg.png";
				}
				else if(myimg.src.match("images/iooqtwsbg.png")){
					myimg.src="images/iooq10.jpg";
				}
			}
	countDown(); // 我们先调用一次这个函数，防止第一次刷新页面有空白
	// 2. 开启定时器
	var t;
	var timer=setInterval(countDown, 1000);
	var stopt=document.getElementById("stopt");
	clearInterval(t);
	t=setInterval(imgscroll,3000);
	stopt.onmouseover=function(){
	   clearInterval(t);
	}
	stopt.onmouseout=function(){
	   clearInterval(t);
	   t=setInterval(imgscroll,3000);
	}
}	
