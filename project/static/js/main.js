$(function () {
    $(".screen-height").height($(window).height());

    $(window).resize(function () {
        $(".screen-height").height($(window).height());
    });

    $('button').on('click', function (e) {
        e.preventDefault();
        if ($('#start').hasClass('active')) {
            $('#start').removeClass('active');
            $('#stop').toggleClass('active');
        } else {
            $('#start').toggleClass('active');
            $('#stop').removeClass('active');
        }
    });

});


