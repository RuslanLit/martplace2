$(function () {

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "14px",
        readOnly: true
    });

    $('.products__title-filter').click(function() {
        $('.products__sort').slideToggle('normal');
    });


    $('.slider-weekly__slides').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.svg" alt="prev arrow"></button>',
        centerMode: false,
        infinite: true,
        appendArrows: '.arrows-wrap'
    });

    $('.folowers__slides').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.svg" alt="prev arrow"></button>',
        appendArrows: '.folowers_arrows-wrap',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        infinite: true
    });

    var mixer = mixitup('.products__inner-box');

});