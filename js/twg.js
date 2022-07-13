// var menu = ['HOME', 'ABOUT', 'PROJECT A', 'PROJECT B', 'CONTACT'];
var swiper = new Swiper('.myswiper', {
    slidesPerView: 1,
    effect : 'fade',
    mousewheel: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
    pagination: {
        el: '.swiper-pagination',
              clickable: true,
        // renderBullet: function (index, className) {
        // return '<span class="' + className + '">' + (menu[index]) + '</span>';
        // },
    },
});

//로고 클릭시 스와이퍼 원하는 페이지로 이동
jQuery(document).ready(function(){
    $('.logo').click(function(){
        
        swiper.slideTo(0);
        //index넘버링으로 처리
    });
});


// 갤러리 미리보기
$(document).ready(function() {
    var xOffset = 100;
    var yOffset = 30;

    //마우스 오버시 preview 생성
    $(document).on("mouseover",".gallery",function(e){
        var image_data = $(this).data("image");
        var add_caption = (image_data != undefined) ? "<br/>" + image_data : "" ;
        $("body").append("<p id='preview'><img src='"+ $(this).attr("src") +"' width='300px' />"+ add_caption +"</p>");
        $("#preview")
            .css("top",(e.pageY - xOffset) + "px")
            .css("left",(e.pageX + yOffset) + "px")
            .fadeIn("fast");
    });
    
    //마우스 이동시 preview 이동
    $(document).on("mousemove",".gallery",function(e){
        $("#preview")
            .css("top",(e.pageY - xOffset) + "px")
            .css("left",(e.pageX + yOffset) + "px");
    });
    
    //마우스 아웃시 preview 제거
    $(document).on("mouseout",".gallery",function(){
        $("#preview").remove();
    });
  
});


// 상품 이미지 슬라이드
(function($) { "use strict";
    
  //Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
    t.style.top = n.clientY + "px", 
    e.style.left = n.clientX + "px", 
    e.style.top = n.clientY + "px", 
    i.style.left = n.clientX + "px", 
    i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
  
  $(document).ready(function() {
    
    /* Hero Case study images */      
    
    $('.case-study-name:nth-child(1)').on('mouseenter', function() {
      $('.case-study-name.active').removeClass('active');
      $('.case-study-images li.show').removeClass("show");
      $('.case-study-images li:nth-child(1)').addClass("show");
      $('.case-study-name:nth-child(1)').addClass('active');
    })
    $('.case-study-name:nth-child(2)').on('mouseenter', function() {
      $('.case-study-name.active').removeClass('active');
      $('.case-study-images li.show').removeClass("show");
      $('.case-study-images li:nth-child(2)').addClass("show");
      $('.case-study-name:nth-child(2)').addClass('active');
    })
    $('.case-study-name:nth-child(3)').on('mouseenter', function() {
      $('.case-study-name.active').removeClass('active');
      $('.case-study-images li.show').removeClass("show");
      $('.case-study-images li:nth-child(3)').addClass("show");
      $('.case-study-name:nth-child(3)').addClass('active');
    })
    $('.case-study-name:nth-child(4)').on('mouseenter', function() {
      $('.case-study-name.active').removeClass('active');
      $('.case-study-images li.show').removeClass("show");
      $('.case-study-images li:nth-child(4)').addClass("show");
      $('.case-study-name:nth-child(4)').addClass('active');
    })
    $('.case-study-name:nth-child(1)').trigger('mouseenter')
          
  });

  
  
  
  })(jQuery); 

//   햄버거 메뉴

$('#toggle').click(function() {
	$('#toggle .bar').toggleClass('animate');
	$('#page').toggleClass('overlay');
});

$('#toggle_dark').click(function() {
	$('#toggle_dark .bar').toggleClass('animate');
	$('#page').toggleClass('overlay');
});


// 서브페이지 스와이퍼
new Swiper('.subswiper', {
    slidesPerView: 'auto',
    initialSlide: 1,
    speed: 1000,
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    mousewheel: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true } });