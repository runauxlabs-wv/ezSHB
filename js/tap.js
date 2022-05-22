$(function(){
    $(".tab ul li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });
});