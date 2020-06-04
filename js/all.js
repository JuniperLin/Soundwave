$(document).ready(function () {
  $("p").mouseenter(function (e) {
    $(this).addClass("animate__animated").addClass("animate__rubberBand");
  });
  $("p").mouseout(function (e) {
    $(this).removeClass("animate__animated").removeClass("animate__rubberBand");
  });
});
