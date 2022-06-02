$(document).ready(function(){
    var currentPosition = parseInt($(".quick_wrap").css("top"));
    $(window).scroll(function() {
        var position = $(window).scrollTop(); 
        $(".quick_wrap").stop().animate({"top":position+currentPosition+"px"},1000);
    });
});