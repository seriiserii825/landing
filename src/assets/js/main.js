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

  let galleryPopup = function(){
    $('#js-gallery').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
         // Delay in milliseconds before popup is removed
      removalDelay: 600,

      // Class that is added to popup wrapper and background
      // make it unique to apply your CSS animations just to this exact popup
      mainClass: 'mfp-fade'
    });

  };

  sandwitch();
  galleryPopup();


});



