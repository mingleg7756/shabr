$(function() {
<<<<<<< HEAD
    $(document).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
=======

    $('.nav-item').click(function() {
        $("#navbarSupportedContent").collapse('hide');
    });

    var scroll = $(window).scrollTop();
    if (scroll > $(window).height()) {
        $(".navbar").css("background", "rgba(255,255,255,.75)");
    }

    $(document).scroll(function() {


        var scroll = $(window).scrollTop();
        if (scroll > $(window).height()) {
>>>>>>> 49e64500bb80e214f1dcfadd031241f443ab3798
            $(".navbar").css("background", "rgba(255,255,255,.75)");
        }
        else {
            $(".navbar").css("background", "rgba(255,255,255,0)");
        }
    });
});
