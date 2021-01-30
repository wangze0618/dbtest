$(function () {
    $('#nav>ul>li').click(function () {
        $(this).addClass('nav_style').siblings().removeClass('nav_style');
    })



    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('#return').css({
                "display": "inline-block"
            })
        } else {
            $('#return').css({
                "display": "none"
            })
        }
    });
    $('#return').click(function () {
        $("html,body").scrollTop(0);


    })


})