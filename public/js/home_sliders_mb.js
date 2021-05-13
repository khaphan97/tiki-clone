$(document).ready(function () {
   $(".banner_left__slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      arrows: false,
      prevArrow: ".prev-arrow",
      nextArrow: ".next-arrow",
      autoplaySpeed: 3000,
   });

   $(".home_deal__wrap").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      arrows: false,
      prevArrow: ".home_deal.prev-arrow",
      nextArrow: ".home_deal.next-arrow",
   });

   $(".home_quicklinks").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      arrows: false,
   })

});
