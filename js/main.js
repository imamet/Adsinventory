$(document).ready(function() {
    // Preload
    if (
        $(window).load(function() {
            $("#preloader").fadeOut("slow", function() {
                $(this).remove();
            });
        })
    );

    //Back To Top
    $(window).scroll(function() {

        if ($(this).scrollTop() >= 150) {
            $('.back-top').fadeIn('fast');
            $('header').addClass('is-sticky');
        } else {
            $('.back-top').fadeOut('fast');
            $('header').removeClass('is-sticky');
        }
    });

    // btnplay
    $('#submit').on('click', function() {
        if ($('#container').css('opacity') == 0) {
            $('#container').css('opacity', 1);
        } else {
            $('#container').css('opacity', 0);
        }
    });


});




// Mobile Version
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.slider-nav').slick({

        asNavFor: '.slider-for',
        centerPadding: '60px',
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
}