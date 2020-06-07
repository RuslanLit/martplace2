$(function () {

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "14px",
        readOnly: true
    });


    $('.slider-weekly__title').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.svg" alt="prev arrow"></button>',
        fade: true,
        asNavFor: '.slider-weekly__slides'
    });
    $('.slider-weekly__slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-weekly__title',
        variableWidth: true,
        arrows: false,
        infinite: true
    }); 




    $('.folowers-slider__title').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.svg" alt="prev arrow"></button>',
        fade: true,
        asNavFor: '.folowers-slider__slides'
    });
    $('.folowers-slider__slides').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.folowers-slider__title',
        variableWidth: true,
        arrows: false,
        infinite: true
    });   

    var mixer = mixitup('.products__inner-box');

});