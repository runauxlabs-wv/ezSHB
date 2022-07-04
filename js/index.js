var menu = ['HOME', 'ABOUT', 'PORTFOLIO', 'CONTACT', 'CONTACT'];
var swiper = new Swiper('.myswiper', {
    slidesPerView: 1,
    direction: 'vertical',
    // effect : 'fade',
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
