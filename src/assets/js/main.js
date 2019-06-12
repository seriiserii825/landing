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

    $(document).on('click', '.sandwitch', function () {
      if ($(window).width() < 520) {
        if(mainMenuList.is(':visible')){
          $(this).removeClass('sandwitch--active');
          mainMenuList.slideUp();
        }else{
          $(this).addClass('sandwitch--active');
          mainMenuList.slideDown();
        }
      }
    });

  };

  let galleryPopup = function(){
    let gallery = $('#js-gallery');

    gallery.on('click', 'a', function (e) {
      if($(window).width() < 630){
        e.preventDefault();
      }
    });

    gallery.magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      disableOn: 630,
         // Delay in milliseconds before popup is removed
      removalDelay: 600,

      mainClass: 'mfp-fade'
    });

  };

  let certificatesPopup = function(){
      let certificates = $('#js-certificates');

      certificates.on('click', 'a', function (e) {
          if($(window).width() < 890){
            e.preventDefault();
          }
        });

    certificates.magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      disableOn: 890,
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
  certificatesPopup();
});
