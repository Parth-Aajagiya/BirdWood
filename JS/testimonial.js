$(document).ready(function() {
    function ptInitializeSlider() {
        $('.pt-testimonials-track').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="pt-slick-prev">&larr;</button>',
            nextArrow: '<button type="button" class="pt-slick-next">&rarr;</button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    ptInitializeSlider();
});
