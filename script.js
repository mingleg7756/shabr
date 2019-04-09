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
        $(".navbar").css("background", "rgba(255,255,255,.95)");
    }

    $(document).scroll(function() {


        var scroll = $(window).scrollTop();
        if (scroll > $(window).height()) {
<<<<<<< HEAD
>>>>>>> 49e64500bb80e214f1dcfadd031241f443ab3798
            $(".navbar").css("background", "rgba(255,255,255,.75)");
=======
            $(".navbar").css("background", "rgba(255,255,255,.95)");
>>>>>>> b3199ac8b96de02da686880933ce7f8063a025d3
        }
        else {
            $(".navbar").css("background", "rgba(255,255,255,0)");
        }
    });
});
