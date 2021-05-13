$(document).ready(function () {
   $(".banner_left__slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      arrows: true,
      prevArrow: ".prev-arrow",
      nextArrow: ".next-arrow",
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1025,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   });

   $(".home_deal__wrap").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: true,
      prevArrow: ".home_deal.prev-arrow",
      nextArrow: ".home_deal.next-arrow",
      responsive: [
         {
            breakpoint: 1025,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               arrows: false,
            },
         },
      ],
   });

   if ($(window).width() < 1024) {
      $("#home_top_category_slider").slick({
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 4,
         arrows: false,
         autoplay: true,
      });
      $(".account_nav").slick({
         infinite: false,
         slidesToShow: 8,
         slidesToScroll: 4,
         arrows: false,
         autoplay: false,
      })
   }
});
