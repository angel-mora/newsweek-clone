$(window).on("scroll", function() {
    if ($(this).scrollTop() < 170) {
        $(".big-header").addClass("transparent");
    } else {
        $(".header-alt").removeClass("transparent");
    }
});