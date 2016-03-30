var printImageArray = ["2-1-13_311.jpg", "2-1-13_316.jpg", "4-11-13_106.jpg", "4-11-13_107.jpg", "5-24-13_180.jpg", "5-24-13_183.jpg", "5-24-13_184.jpg", "5-24-13_185.jpg"];
var printLabelArray = ["Silent Night 2014 - Room", "Silent Night 2014 - Room", "Onglyza Pullout", "Onglyza Pullout", "Happy Fuel Boards", "Happy Fuel Clingzy Wall", "Happy Fuel Face in a Hole Stand", "Happy Fuel Banners"];
var displayedImage;




$(function() {
  sectionBlockHandler();

  $('nav').onePageNav({
    scrollThreshold: 0.4,
    navItems: 'a:not(.submenu a)'
  });

  $(window).scroll(sectionBlockHandler)

  $('#menu-button').click(toggleNav);

  $(window).resize(windowResized);

  // CLICK IMAGE - DISPLAY LIGHTBOX

  $(".image-link").click(function(e) {
    e.preventDefault();
    displayedImage = parseInt($(this).data('image'));
    $(".modal-wrapper").show();
    $(".modal").show();
    $("#open-modal-button").hide();
    displayImage(displayedImage);
    $('body').addClass('no-scroll');
  })

  // CLOSE LIGHTBOX

  $("#close-modal-button, .modal-wrapper").click(function(event) {
    $(".modal-wrapper").hide();
    $(".modal").hide();
    $("#open-modal-button").show();
    $('body').removeClass('no-scroll');
  })

  // PREVIOUS LIGHTBOX IMAGE

  $('#prev-modal-button').click(function() {
    if (displayedImage > 0) {
      displayedImage = (displayedImage - 1) % printImageArray.length;
    } else {
      displayedImage = printImageArray.length - 1;
    }
    displayImage(displayedImage);
  })

  // NEXT LIGHTBOX IMAGE

  $('#next-modal-button, #lightbox-image').click(function() {
    displayedImage = (displayedImage + 1) % printImageArray.length;
    displayImage(displayedImage);
  })

  // CLICKS ON LIGHTBOX DO NOTHING:

  $(".modal").click(function(event) {
    event.stopPropagation();
  })


  // CLICK BOXES TO SCROLL TO SECTION

  $('#menuC, #fixedC, #sectionC').click(function() {
    $(window).scrollTo("#home", 700);
  })

  $('#menuM, #fixedM, #sectionM').click(function() {
    $(window).scrollTo("#print", 700);
  })

  $('#menuR, #menuG, #menuB, #fixedRGB, #sectionRGB').click(function() {
    $(window).scrollTo("#digital", 700);
  })

  $('#menuY, #fixedY, #sectionY').click(function() {
    $(window).scrollTo("#resume", 700);
  })

  $('#menuK, #fixedK, #sectionK').click(function() {
    $(window).scrollTo("#interests", 700);
  })

})


function toggleNav() {
  var hidden = $('nav ul').is(':hidden');
  $('nav ul').slideToggle();

  if (hidden) {
    $('.sections').css('padding-top',225);
  } else {
    $('.sections').css('padding-top',35);
  }
}

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
}

function sectionBlockHandler() {
  
  // CYAN BOXES
  if ($('#home-head').offset().top - $(window).scrollTop() < 55) {
    $('.windows').css('fill', '#80FFFF');
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
    $('.winR').css('fill', '#FF8080');
    $('.winG').css('fill', '#80FF80');
    $('.winB').css('fill', '#8080FF');
    $('#fixedRGB').css('opacity', '1');
    $('#sectionRGB').css('opacity', '0');
  } else {
    $('#fixedRGB').css('opacity', '0');
    $('#sectionRGB').css('opacity', '1');
  }

  // YELLOW BOXES
  if ($('#resume-head').offset().top - $(window).scrollTop() < 145) {
    $('.windows').css('fill', '#FFFF80');
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
}
  
function displayImage(imageNumber) {
  var image = "images/comps/" + printImageArray[imageNumber]; 
  var label = printLabelArray[imageNumber];
  $("#lightbox-image").attr('src', image);
  $("#lightbox-label").html(label);
}




