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


    // Płynne przewijanie do kolejnych sekcji
    // Brak # w pasku adresu
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    let $target = $(target);
                    $target.focus();
                    if ($target.is(':focus')) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });




});