// 스크롤 애니메이션

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  if (wScroll >= $(".company").offset().top - $(window).height() / 2) {
      $(".company").addClass("show");
  }
  if (wScroll >= $(".tab").offset().top - $(window).height() / 2) {
      $(".tab").addClass("show");
  }
});
