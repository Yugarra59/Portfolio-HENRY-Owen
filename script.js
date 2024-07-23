$(document).ready(function(){
    $('.projet-slider').bxSlider({
        mode: 'fade',
        captions: true,
        controls: true,
        pager: true
    });
});

$(document).ready(function() {
    $('a[href*="#"]').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 2000);
    });
  });