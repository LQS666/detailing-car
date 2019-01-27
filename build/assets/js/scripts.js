$(document).ready(function () {


    // Hamburger menu
    let menu = $(".nav-ham");
    let hamb = $(".ham-icon");
    let body = $("body");

    hamb.click(function () {
        menu.toggleClass("open");
        body.toggleClass("menu_open");
    });

    $(window).resize(function () {
        let curWidth = $(window).width();

        if (curWidth >= 580) {
            closeMenu();
        }
    });

    $(".nav-ham li").click(function () {
        closeMenu();
    });

    function closeMenu() {
        body.removeClass("menu_open");
        menu.removeClass("open");
    }


    // 1. No anchor in url adress
    // 2. Smooth Scroll
    // 3. Active Class
    $('a[href*="#"]:not([href="#"])').click(function (event) {
        event.preventDefault();
        let a = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            a = $(document).height() - $(window).height();
        } else {
            a = $(this.hash).offset().top - 24;
        }
        $('html,body').stop().animate({
            scrollTop: a
        }, 600, 'swing');
    });
    $('.main-nav-item a').click(function () {
        $(this).parent().find('a').removeClass('selected-a');
        $(this).addClass('selected-a');
    });
    $(window).scroll(function () {
        $('.section').each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 50) {
                let id = $(this).attr('id');
                $('.main-nav-item a').removeClass('selected-a');
                $('.main-nav-item a[href=#' + id + ']').addClass('selected-a');
            }
        });
    });


});