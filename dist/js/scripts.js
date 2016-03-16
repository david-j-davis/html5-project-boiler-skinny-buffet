jQuery(document).ready(function ($) {

  $(function () {
    $('.match-height').matchHeight();
  });


  if ($('#mobile-menu').length) {
    $('#mobile-menu').on('click', function () {
      $('#menu').slideToggle('fast');
    });
  }


  //  // run test on initial page load
  //  checkSize();
  //
  //  // run test on resize of the window
  //  $(window).resize(checkSize);
  //
  //  function checkSize() {
  //    var windowHeight = $(window).height();
  //    var headerHeight = $('.fit-header').height();
  //    var newHeight = windowHeight - headerHeight;
  //    //console.log(windowHeight, headerHeight, newHeight);
  //    $("#content-wrapper").css("margin-top", headerHeight);
  //    $(".fit-window").css("height", newHeight);
  //    $(".fit-window-full").css("height", windowHeight);
  //  }
  //
  //  $('.slicker').slick({
  //    infinite: true,
  //    speed: 300,
  //    slidesToShow: 1,
  //    slidesToScroll: 1,
  //    swipe: true,
  //    autoplay: true,
  //    autoplaySpeed: 4000,
  //    responsive: [
  //      {
  //        breakpoint: 768,
  //        settings: {
  //          slidesToShow: 1,
  //          slidesToScroll: 1
  //        }
  //    }
  //    // You can unslick at a given breakpoint now by adding:
  //    // settings: "unslick"
  //    // instead of a settings object
  //  ]
  //  });
  //
  //  $(window).stellar({
  //    // Set scrolling to be in either one or both directions
  //    horizontalScrolling: false,
  //    verticalScrolling: true,
  //
  //    // Set the global alignment offsets
  //    horizontalOffset: 0,
  //    verticalOffset: 0,
  //
  //    // Refreshes parallax content on window load and resize
  //    responsive: true,
  //
  //    // Select which property is used to calculate scroll.
  //    // Choose 'scroll', 'position', 'margin' or 'transform',
  //    // or write your own 'scrollProperty' plugin.
  //    scrollProperty: 'scroll',
  //
  //    // Select which property is used to position elements.
  //    // Choose between 'position' or 'transform',
  //    // or write your own 'positionProperty' plugin.
  //    positionProperty: 'position',
  //
  //    // Enable or disable the two types of parallax
  //    parallaxBackgrounds: true,
  //    parallaxElements: true,
  //
  //    // Hide parallax elements that move outside the viewport
  //    hideDistantElements: true,
  //
  //    //    // Customise how elements are shown and hidden
  //    //    hideElement: function ($elem) {
  //    //      $elem.hide();
  //    //    },
  //    //    showElement: function ($elem) {
  //    //      $elem.show();
  //    //    }
  //  });
  //
  //  if ($('.scrollify').length) {
  //    $.scrollify({
  //      section: ".scrollify",
  //      //  		sectionName : "scrollify",
  //      easing: "swing",
  //      scrollSpeed: 1100,
  //      offset: 0,
  //      //  		scrollbars: true,
  //      //  		before:function() {},
  //      //  		after:function() {},
  //      //  		afterResize:function() {}
  //    });
  //  }

  //  // smooth scroll to ID
  //  $(function () {
  //    $('a[href*=#]:not([href=#])').click(function () {
  //      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //        var target = $(this.hash);
  //        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //        if (target.length) {
  //          $('html,body').animate({
  //            scrollTop: target.offset().top
  //          }, 2000);
  //          return false;
  //        }
  //      }
  //    });
  //  });
  //
  //  $(window).scroll(function () {
  //    $('.fade').each(function () {
  //      if (($(this).offset().top - $(window).scrollTop()) < 500) {
  //        $(this).stop().fadeTo('slow', 1);
  //      } else {
  //        $(this).stop().fadeTo(100, 0);
  //      }
  //    });
  //  });

});