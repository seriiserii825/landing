$(function () {
  /*
      https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
      ===========================*/
  $("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 90,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true
  });

  let sandwitch = function () {
    let mainMenuList = $('.main-menu-list');

    if ($(window).width() < 520) {
      $(document).on('click', '.sandwitch', function () {
        $(this).toggleClass('sandwitch--active');
        mainMenuList.slideToggle();
      });
    }
  };

  sandwitch();


});



