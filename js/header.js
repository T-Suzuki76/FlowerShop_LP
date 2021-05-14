$(function(){
    const spBreakPoint = 670;
    let headerTop = 40;
    let headerHeight = 0;

    if ($(window).width() > spBreakPoint) {
      headerHeight = 600;
    } else {
      headerHeight = 380;
    }

    $(window).on('scroll', function () {
      if ($(window).width() > spBreakPoint) {
        if ($(this).scrollTop() > headerTop) {
          $('.header-nav').addClass('position-change');
        } else {
          $('.header-nav').removeClass('position-change');
        }
      }
      if ($(this).scrollTop() > headerHeight) {
        $('.header-nav').addClass('color-change');
        $('.hamburger_line').addClass('color-change');
      } else {
        $('.header-nav').removeClass('color-change');
        $('.hamburger_line').removeClass('color-change');
      }
    });
})
