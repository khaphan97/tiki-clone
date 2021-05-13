$(document).ready(function () {
   $(".btn_modal").click(function (e) {
      e.preventDefault();
      let boxModal = $(this).data("modal");
      $(".user_modal").addClass("active");
      $(boxModal).addClass("active");
   });

   $(".user_box_tab_item").click(function (e) {
      e.preventDefault();
      let boxModals = $(".user_modal_box");
      let userBox = $(this).data("modal");
      boxModals.removeClass("active");
      $(`.${userBox}`).addClass("active");
   });

   $(".close_btn").click(function (e) {
      e.preventDefault();
      $(".user_modal").removeClass("active");
      $(this).parents(".user_modal_box").removeClass("active");
   });
});
