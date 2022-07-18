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
    
    // 메인페이지 슬라이드  
    
    $('.main_name:nth-child(1)').on('mouseenter', function() {
      $('.main_name.active').removeClass('active');
      $('.main_img li.show').removeClass("show");
      $('.main_img li:nth-child(1)').addClass("show");
      $('.main_name:nth-child(1)').addClass('active');
    })
    $('.main_name:nth-child(2)').on('mouseenter', function() {
      $('.main_name.active').removeClass('active');
      $('.main_img li.show').removeClass("show");
      $('.main_img li:nth-child(2)').addClass("show");
      $('.main_name:nth-child(2)').addClass('active');
    })
    $('.main_name:nth-child(3)').on('mouseenter', function() {
      $('.main_name.active').removeClass('active');
      $('.main_img li.show').removeClass("show");
      $('.main_img li:nth-child(3)').addClass("show");
      $('.main_name:nth-child(3)').addClass('active');
    })
    $('.main_name:nth-child(4)').on('mouseenter', function() {
      $('.main_name.active').removeClass('active');
      $('.main_img li.show').removeClass("show");
      $('.main_img li:nth-child(4)').addClass("show");
      $('.main_name:nth-child(4)').addClass('active');
    })
    $('.main_name:nth-child(1)').trigger('mouseenter')
          
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

// 스크롤 애니메이션

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();


    if (wScroll >= $(".conbox1").offset().top - $(window).height() / 2) {
        $(".conbox1").addClass("show");
    }
    if (wScroll >= $(".conbox2").offset().top - $(window).height() / 2) {
        $(".conbox2").addClass("show");
    }
    if (wScroll >= $(".conbox3").offset().top - $(window).height() / 2) {
        $(".conbox3").addClass("show");
    }
});

// 탭메뉴

$(".fadeTab .conBox").hide().eq(0).show();
$(".fadeTab li").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    $("#"+$(this).data('id')).fadeIn(1000)
    .siblings('.conBox').fadeOut(300);
});

// 스크롤 부드럽게
// class Scrooth {
//     constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
//       this.element = element;
//       this.distance = strength;
//       this.acceleration = acceleration;
//       this.deceleration = deceleration;
//       this.running = false;
  
//       this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
//       this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
//       this.scroll = this.scroll.bind(this);
//     }
  
//     scrollHandler(e) {
//       e.preventDefault();
  
//       if (!this.running) {
//         this.top = this.element.pageYOffset || this.element.scrollTop || 0;
//         this.running = true;
//         this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
//         this.isDistanceAsc = true;
//         this.scroll();
//       } else {
//         this.isDistanceAsc = false;
//         this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
//       }
//     }
  
//     scroll() {
//       if (this.running) {
//         this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
//         Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
//         Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
  
//         this.top += this.currentDistance;
//         this.element.scrollTo(0, this.top);
        
//         requestAnimationFrame(this.scroll);
//       }
//     }
//   }
  
//   const scroll = new Scrooth({
//     element: window,
//     strength: 8,
//     acceleration: 1.5,
//     deceleration: 0.965,
//   });

