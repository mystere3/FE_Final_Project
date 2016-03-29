var printImageArray = ["2-1-13_311.jpg", "2-1-13_316.jpg", "4-11-13_106.jpg"];
var printLabelArray = ["Silent Night 2014 - Room", "Silent Night 2014 - Room", "Onglyza Pullout"];
var displayedImage;

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

  }

  $(window).resize(windowResized);

  $(".image-link").click(function(e) {
    e.preventDefault();
    displayedImage = parseInt($(this).data('image'));

    
    // alert(data);
    $(".modal-wrapper").show();
    $(".modal").show();
    $("#open-modal-button").hide();

    // var image = "images/comps/" + printImageArray[displayedImage]; 
    // var label = printLabelArray[displayedImage];
    // $("#lightbox-image").attr('src', image);
    // $("#lightbox-label").html(label);

    displayImage(displayedImage);

    $('body').addClass('no-scroll');
  })

  // $('.btn').click(function() {
  //     var d = $(this).data('datac');      
  //     alert(d);   
  // });

  $("#close-modal-button, .modal-wrapper").click(function(event) {
    $(".modal-wrapper").hide();
    $(".modal").hide();
    $("#open-modal-button").show();
    $('body').removeClass('no-scroll');
    // $("body").css('overflow', 'auto');
  })

  $('#prev-modal-button').click(function() {
    if (displayedImage > 0) {
      displayedImage = (displayedImage - 1) % printImageArray.length;
    } else {
      displayedImage = printImageArray.length - 1;
    }
    
    displayImage(displayedImage);
  })

  $('#next-modal-button').click(function() {
    displayedImage = (displayedImage + 1) % printImageArray.length;
    displayImage(displayedImage);
  })

  $(".modal").click(function(event) {
    event.stopPropagation();
  })

function displayImage(imageNumber) {
  var image = "images/comps/" + printImageArray[imageNumber]; 
  var label = printLabelArray[imageNumber];
  $("#lightbox-image").attr('src', image);
  $("#lightbox-label").html(label);
}
  // $('#fixedC').click(function() {
  //   console.log("we got here");
  //   window.location('http://google.com');
  // })



})




function sectionBlockHandler() {
  
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


  
}
  





