$(function() {

  $('nav').onePageNav({
    scrollThreshold: 0.4,
    navItems: 'a:not(.submenu a)'
  });

  function toggleNav() {
    var hidden = $('nav ul').is(':hidden');
    $('nav ul').slideToggle();

    if (hidden) {
      $('section').css('padding-top',150);
    } else {
      $('section').css('padding-top',0);
    }
    
  }

// functions matching section heights to content height

  var homeHeight = $('.home-content').css('height');
  $('#home').css('height', homeHeight);

  var aboutHeight = $('.about-content').css('height');
  $('#about').css('height', aboutHeight);



  $('#menu-button').click(toggleNav);

  function windowResized() {
    var width = $(window).width();
    var menu = $('nav ul');

    if (width > 768 && menu.is(':hidden')) {
      menu.removeAttr('style');
      $("#about").css('padding-top', '25px');
    } else {
      $('#about').css('padding-top', '0px');
    }

      var homeHeight = $('.home-content').css('height');
        $('#home').css('height', homeHeight);

        var aboutHeight = $('.about-content').css('height');
        $('#about').css('height', aboutHeight);
  }

  $(window).resize(windowResized);

  function toggleChildren(event) {
    event.preventDefault();
    $('nav ul ul li').slideToggle();
  }

  $('#blog-link').click(toggleChildren);


  $(window).stellar({
    horizontalScrolling: true,
    verticalScrolling: true,
  });

  $.stellar.positionProperty.moon = {
    setTop: function($el, newTop, originalTop) {
        $el.css({
            'top': newTop,
            'left': $el.hasClass('moon') ? originalTop - newTop : 0
        });
    },
    setLeft: function($el, newLeft, originalLeft) {
        $el.css('left', newLeft);
    }
  };

  $('.moon').stellar({
    scrollProperty: 'transform',
    positionProperty: 'moon'
  });





})






