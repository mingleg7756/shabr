$(function() {

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
            $(".navbar").css("background", "rgba(255,255,255,.95)");
        }
        else {
            $(".navbar").css("background", "rgba(255,255,255,0)");
        }
    });
});
