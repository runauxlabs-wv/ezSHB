$(document).ready(function () {

    // var $moreBtn = $('header .top .h_inner .more_button');
    $('header .top .h_inner .more_button').click(function () {
        $(this).toggleClass('active');
        $('header .top .h_inner .gnb').toggleClass('active');
        $('header .top .h_inner .global').toggleClass('active');
        $('header .top .h_inner .logo').toggleClass('active');
        $('header .top .h_inner .more_logo').toggleClass('active');
        $('header .top .h_inner .more_sns').toggleClass('active');
        $('#wrapper').toggleClass('active');
    })
});