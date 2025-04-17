// JavaScript Document
$(document).ready(function() {
  $("#btn-mo").click(function() {
    $("#popup").fadeIn();
    $(".overlay").fadeIn();
  });

  $(document).on("click", "#btn-close", function() {
    $("#popup").fadeOut();
    $(".overlay").fadeOut(); // Bạn nên đóng cả overlay ở đây cho đồng bộ
  });

  $(".overlay").click(function() {
    $("#popup").fadeOut();
    $(this).fadeOut();
  });
});