$(document).ready(function(){
    $('.projet-slider').bxSlider({
        mode: 'fade',
        captions: true,
        controls: true,
        pager: true
    });
});

$(document).ready(function() {
    $('nav ul a').click(function(event) {
        event.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate ({
                scrollTop: target.offset().top
            }, 2000);
        }
    });
});