$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    rows: 2,
    appendDots: $('.dots'),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          rows: 1,
          slidesToShow: 2,
        },
      },
    ],
  });
});
