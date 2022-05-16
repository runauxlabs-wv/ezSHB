// pagingSlide2(fade)
$(function() {
    $("ul.images li:first").show();
    $("ul.paging li").click(function() { 
        $(this).addClass("on").siblings().removeClass("on");
        var imgIndex = $(this).index();
        $("ul.images li").eq(imgIndex).fadeIn(500).siblings().fadeOut(200);
    });
});