$(document).ready(function () {
    // Obsługa responsywnego menu typu hamburger
    let menu = $(".nav-ham");
    let hamb = $(".ham-icon");
    let body = $("body");

    hamb.click(function () {
        menu.toggleClass("open");
        body.toggleClass("menu_open");
    });

    $(window).resize(function () {
        let curWidth = $(window).width();
        console.log(curWidth);

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

    // Efekt animowanej kreski" po najechaniu na elementy menu
    $(window).on('load resize', function () {
        let $thisnav = $('.current-menu-item').offset().left;

        $('.main-nav-item').hover(function () {
            let $left = $(this).offset().left - $thisnav;
            let $width = $(this).outerWidth();
            let $start = 0;
            $('.menu-sel').css({
                'left': $left,
                'width': $width
            });
        }, function () {
            let $initwidth = $('.current-menu-item').width();
            $('.menu-sel').css({
                'left': '0',
                'width': $initwidth
            });
        });
    });






});