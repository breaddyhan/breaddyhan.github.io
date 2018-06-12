$(document).ready(function() {
  var backBtn = $(".back-to-top");
  backBtn.on("click", function(e) {
    $("html, body").animate({ scrollTop: 0 }, 500);

    e.preventDefault();
  });
  $(window).scroll(function() {
    var windowNow = $(this),
      height = windowNow.height(),
      top = windowNow.scrollTop();

    if (top > height / 3) {
      if (!backBtn.is(":visible")) {
        backBtn.show();
      }
    } else {
      backBtn.hide();
    }
  });
});
