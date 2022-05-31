$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    rows: 2,
    slidesPerRow: 1,
    appendDots: $('.dots'),
  });
});
