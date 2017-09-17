$(document).ready(function() {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        if ($(window).scrollTop() > 2*($('#nav_bar').height())) {
            $('#nav_bar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < $('#nav_bar').height() +1) {
            $('#nav_bar').removeClass('navbar-fixed');
        }
    });
});