var menu = ['HOME', 'ABOUT', 'PROJECT A', 'PROJECT B', 'CONTACT'];
var swiper = new Swiper('.myswiper', {
    slidesPerView: 1,
    direction: 'vertical',
    // effect : 'fade',
    speed : 1000,
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
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
});

//로고 클릭시 스와이퍼 원하는 페이지로 이동
jQuery(document).ready(function(){
    $('.logo').click(function(){
        
        swiper.slideTo(0);
        //index넘버링으로 처리
    });
});


$(function() {
    setTimeout(function() {
      $(".fly_in_text").removeClass("hidden");
    }, 700);
 });



//  테스트중
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

var modal = document.getElementsByClassName("modal")[0];
// modal.addEventListener("click", function(e) {
//   modal.classList.remove("active");
// });

var info = document.getElementsByClassName("about")[0];
info.addEventListener("click", function() {
  modal.classList.add("active");
});

var close = document.getElementsByClassName("modal__card__close")[0];
close.addEventListener("click", function() {
  modal.classList.remove("active");
});


 