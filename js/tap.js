$(function(){
    $(".tab ul li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });

    $(".indexBox ul li").click(function(){
        var tabindex = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(".indexBox .conBox").eq(tabindex).addClass('on').siblings().removeClass('on');
    });
});