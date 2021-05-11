$(function() {
    $('.hamburger-menu').on('click', function() {
      $('.hamburger-menu').toggleClass('active');
      $('.header-menu').toggleClass('height-change');
    });
    $('.header-menu').on('click', function() {
      $('.hamburger-menu').removeClass('active');
      $('.header-menu').toggleClass('height-change');
    });

    $('a[href^="#"').click(function(){
      var href = $(this).attr('href');
      var target = $(href == "#" || href == "" ? 'html':href);
      var position = target.offset().top;
      var speed = 500;
      $("html, body").animate({scrollTop:position}, speed, "swing");
    })

});