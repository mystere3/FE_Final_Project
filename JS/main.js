$(function() {
  sectionBlockHandler();

  $('nav').onePageNav({
    scrollThreshold: 0.4,
    navItems: 'a:not(.submenu a)'
  });

  function toggleNav() {
    var hidden = $('nav ul').is(':hidden');
    $('nav ul').slideToggle();

    if (hidden) {
      $('.sections').css('padding-top',225);
    } else {
      $('.sections').css('padding-top',35);
    }
    
  }

  $(window).scroll(sectionBlockHandler)

// functions matching section heights to content height

  // var homeHeight = $('.home-content').css('height');
  // $('#home').css('height', homeHeight);

  // var aboutHeight = $('.about-content').css('height');
  // $('#about').css('height', aboutHeight);



  $('#menu-button').click(toggleNav);

  function windowResized() {
    var width = $(window).width();
    var menu = $('nav ul');

    if (width > 768 ) {  // && menu.is(':hidden')
      menu.removeAttr('style');
      $(".sections").css('padding-top', '35px');

    } else {
      $('.sections').css('padding-top', '35px');
    }
    sectionBlockHandler();

      // var homeHeight = $('.home-content').css('height');
      //   $('#home').css('height', homeHeight);

      //   var aboutHeight = $('.about-content').css('height');
      //   $('#about').css('height', aboutHeight);
  }

  $(window).resize(windowResized);

  // function toggleChildren(event) {
  //   event.preventDefault();
  //   $('nav ul ul li').slideToggle();
  // }

  // $('#blog-link').click(toggleChildren);


  // $(window).stellar({
  //   horizontalScrolling: true,
  //   verticalScrolling: true,
  // });

  // $.stellar.positionProperty.moon = {
  //   setTop: function($el, newTop, originalTop) {
  //       $el.css({
  //           'top': newTop,
  //           'left': $el.hasClass('moon') ? originalTop - newTop : 0
  //       });
  //   },
  //   setLeft: function($el, newLeft, originalLeft) {
  //       $el.css('left', newLeft);
  //   }
  // };

  // $('.moon').stellar({
  //   scrollProperty: 'transform',
  //   positionProperty: 'moon'
  // });





})

function sectionBlockHandler() {
  // var welcomeHeadTop = $('#home-head').offset().top;
  // console.log(welcomeHeadTop - $(window).scrollTop());

  // if ($(window).width() > 768) {
    // CYAN BOXES
    if ($('#home-head').offset().top - $(window).scrollTop() < 55) {
      $('.windows').css('fill', '#00FFFF');
      $('#fixedC').css('opacity', '1');
      $('#sectionC').css('opacity', '0');
     } else {
      $('#fixedC').css('opacity', '0');
      $('#sectionC').css('opacity', '1');
    }
    // MAGENTA BOXES
    if ($('#print-head').offset().top - $(window).scrollTop() < 85) {
      $('.windows').css('fill', '#FF80FF');
      $('#fixedM').css('opacity', '1');
      $('#sectionM').css('opacity', '0');
    } else {
      $('#fixedM').css('opacity', '0');
      $('#sectionM').css('opacity', '1');
    }

    // RGB BOXES
    if ($('#digital-head').offset().top - $(window).scrollTop() < 115) {
      $('.windows').css('fill', '#FF6666');
      $('#fixedRGB').css('opacity', '1');
      $('#sectionRGB').css('opacity', '0');
    } else {
      $('#fixedRGB').css('opacity', '0');
      $('#sectionRGB').css('opacity', '1');
    }

    // YELLOW BOXES
    if ($('#resume-head').offset().top - $(window).scrollTop() < 145) {
      $('.windows').css('fill', '#FFFF00');
      $('#fixedY').css('opacity', '1');
      $('#sectionY').css('opacity', '0');
    } else {
      $('#fixedY').css('opacity', '0');
      $('#sectionY').css('opacity', '1');
    }

    // BLACK BOXES
    if ($('#interest-head').offset().top - $(window).scrollTop() < 175) {
      $('.windows').css('fill', '#666666');
      $('#fixedK').css('opacity', '1');
      $('#sectionK').css('opacity', '0');
    } else {
      $('#fixedK').css('opacity', '0');
      $('#sectionK').css('opacity', '1');
    }


  // } else {
  //   $('#fixedC').css('opacity', '0');
  //   $('#sectionC').css('opacity', '1');
  //   $('#fixedM').css('opacity', '0');
  //   $('#sectionM').css('opacity', '1');
  //   $('#fixedRGB').css('opacity', '0');
  //   $('#sectionRGB').css('opacity', '1');
  //   $('#fixedY').css('opacity', '0');
  //   $('#sectionY').css('opacity', '1');
  //   $('#fixedK').css('opacity', '0');
  //   $('#sectionK').css('opacity', '1');
  // }
}
  





