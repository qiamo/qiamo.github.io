////首页京东秒杀部分的效果（倒计时）
//function countTime() {
//    if(m==undefined,h==undefined,s==undefined){
//        h=0,m=0,s=0
//    }
//    var date = new Date();
//    var now = date.getTime();
//    var str = "2018/5/31 15:12:00";
//    var endDate = new Date(str);
//    var end = endDate.getTime();
//    var leftTime = end - now;
//    var d, h, m, s;
//    if (leftTime >= 0) {
//        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
//        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
//        m = Math.floor(leftTime / 1000 / 60 % 60);
//        s = Math.floor(leftTime / 1000 % 60);
//    }
//    document.getElementById("_h").innerHTML = h;
//    document.getElementById("_m").innerHTML = m;
//    document.getElementById("_s").innerHTML = s;
//    setTimeout(countTime, 1000);
//
//}
//
//countTime();
//      
var fanhui=document.querySelector(".dingbu");
//
fanhui.addEventListener("click",function(){
    var t=setInterval(function(){
        document.body.scrollTop=document.body.scrollTop-20;
        document.documentElement.scrollTop=document.documentElement.scrollTop-20;
        if(document.body.scrollTop===0){
            clearInterval(t);
        }
    },10)
})



var search=document.querySelector(".search")
window.onscroll=function(){
    if(document.body.scrollTop>150){
        search.style.backgroundColor="red";
        fanhui.style.opacity="1";
    }else{
      search.style.backgroundColor="transparent";
        fanhui.style.opacity="0";
    }
}

function a(){
    $(".news .center .text").css({"transform":"translateY(-22px)","transition":"1s"});
}
function b(){
    $(".news .center .text").css({"transform":"translateY(0px)","transition":"0s"});
    $(".news .center .text").eq(0).appendTo($(".news .center"));
}
setInterval(function(){
    a();
    setTimeout(function(){
        b();
    },1000)
},2000)


var mySwiper = new Swiper ('.banner .swiper-container', {
    loop: true,
    pagination:{
      el:'.swiper-pagination',
    }
})  

var swiper = new Swiper('.pics .swiper-container', {
      loop: true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
});



new Vue({
    el:"#tui",
    data:{
        arrs:[
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/1_02.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"ziying",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/1_02.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"qqg",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/1_02.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/1_02.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"ziying",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/1_02.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"qqg",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/1_02.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"qqg",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/1_02.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"qqg",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/1_02.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"qqg",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/1_02.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"qqg",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/1_02.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"qqg",xiang:"看相似"}
        ]
    }
})


new Vue({
    el:"#shou",
    data:{
        ars:[
            {name:"小米",img:"img/sotr/main/1.png",link:""},
            {name:"华为",img:"img/sotr/main/2.jpg",link:""},
            {name:"荣耀",img:"img/sotr/main/3.jpg",link:""},
            {name:"iPhone",img:"img/sotr/main/4.jpg",link:""},
            {name:"vivo",img:"img/sotr/main/5.png",link:""},
            {name:"oppo",img:"img/sotr/main/6.png",link:""},
            {name:"魅族",img:"img/sotr/main/7.jpg",link:""},
            {name:"三星",img:"img/sotr/main/8.png",link:""},
            {name:"一加",img:"img/sotr/main/9.jpg",link:""},
            {name:"360手机",img:"img/sotr/main/10.jpg",link:""},
            {name:"锤子手机",img:"img/sotr/main/11.jpg",link:""},
            {name:"努比亚",img:"img/sotr/main/12.jpg",link:""}
        ],
        ars1:[
            {name:"小米",img:"img/sotr/main/1.png",link:""},
            {name:"华为",img:"img/sotr/main/2.jpg",link:""},
            {name:"荣耀",img:"img/sotr/main/3.jpg",link:""},
            {name:"iPhone",img:"img/sotr/main/4.jpg",link:""},
            {name:"vivo",img:"img/sotr/main/5.png",link:""},
            {name:"oppo",img:"img/sotr/main/6.png",link:""},
            {name:"魅族",img:"img/sotr/main/7.jpg",link:""},
            {name:"三星",img:"img/sotr/main/8.png",link:""},
            {name:"一加",img:"img/sotr/main/9.jpg",link:""},
            {name:"360手机",img:"img/sotr/main/10.jpg",link:""},
            {name:"锤子手机",img:"img/sotr/main/11.jpg",link:""},
            {name:"努比亚",img:"img/sotr/main/12.jpg",link:""}
        ],
        ars2:[
            {name:"小米",img:"img/sotr/main/1.png",link:""},
            {name:"华为",img:"img/sotr/main/2.jpg",link:""},
            {name:"荣耀",img:"img/sotr/main/3.jpg",link:""},
            {name:"iPhone",img:"img/sotr/main/4.jpg",link:""},
            {name:"vivo",img:"img/sotr/main/5.png",link:""},
            {name:"oppo",img:"img/sotr/main/6.png",link:""},
            {name:"魅族",img:"img/sotr/main/7.jpg",link:""},
            {name:"三星",img:"img/sotr/main/8.png",link:""},
            {name:"一加",img:"img/sotr/main/9.jpg",link:""},
            {name:"360手机",img:"img/sotr/main/10.jpg",link:""},
            {name:"锤子手机",img:"img/sotr/main/11.jpg",link:""},
            {name:"努比亚",img:"img/sotr/main/12.jpg",link:""}
        ]
    }
})



/*-----------------jquery返回顶部------------*/
//$(".dingbu").click(function(){
//    $("html,body").animate({scrollTop:0},500);
//})



var mins = document.querySelectorAll(".main  ul>li");
console.log(mins);

var min1 = document.querySelectorAll(".min");
console.log(min1);

 for(var i=0;i<mins.length;i++){
     mins[i].index = i;
     mins[i].onclick = function(){
         for(var i=0;i<mins.length;i++){
             mins[i].classList.remove("active");
             min1[i].classList.remove("active");
         }
         mins[this.index].classList.add("active");
         min1[this.index].classList.add("active");
     }
 }






















































            
