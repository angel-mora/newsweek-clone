$(window).on("scroll", function() {
    if ($(this).scrollTop() > 170) {
        $(".big-header").removeClass("d-lg-flex") && $(".header").removeClass("d-lg-none");
    } else {
        $(".big-header").addClass("d-lg-flex") && $(".header").addClass("d-lg-none");
    }
});