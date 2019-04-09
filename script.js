$(function() {
    $(document).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
            $(".navbar").css("background", "rgba(255,255,255,.75)");
        }
        else {
            $(".navbar").css("background", "rgba(255,255,255,0)");
        }
    });
});
