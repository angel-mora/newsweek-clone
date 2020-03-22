$(window).on("scroll", function() {
    if ($(this).scrollTop() < 170) {
        $(".header").addClass("none");
    } else {
        $(".big-header").removeClass("none");
    }
});