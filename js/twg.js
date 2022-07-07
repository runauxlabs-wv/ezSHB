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
    var xOffset = 10;
    var yOffset = 30;

    //마우스 오버시 preview 생성
    $(document).on("mouseover",".gallery",function(e){
        var image_data = $(this).data("image");
        var add_caption = (image_data != undefined) ? "<br/>" + image_data : "" ;
        $("body").append("<p id='preview'><img src='"+ $(this).attr("src") +"' width='410px' />"+ add_caption +"</p>");
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