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

	let reviewsSlider = function () {
		$('#reviews-slider').slick({
			'prevArrow': '.reviews-button--left',
			'nextArrow': '.reviews-button--right',
			'dots': true,
			responsive: [
					{
						breakpoint: 480,
						settings: {
							// 'dots': false,
							'arrows': false,
						}
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
				]
		});
	};

	let scrollMenu = function(){
		$('#js-main-menu-list a').on('click', function(e){
			e.preventDefault();

			let href = $(this).attr('href');
			let hrefOffset = $(href).offset().top;

			$('html, body').animate({
				scrollTop: hrefOffset
			}, 1000);
		});

		$('#js-up').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
		});
	};

	sandwitch();
	galleryPopup();
	certificatesPopup();
	reviewsSlider();
	scrollMenu();
});
