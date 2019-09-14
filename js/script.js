/*global console, $ */

$(function () {
    'use strict';
    // scroll-to-top button  
    $(window).scroll(function () {
        scrollToTop();
    });
    //cashing the main selector
    var Top = $('.scroll-to-top');
    // creating the function
    function scrollToTop() {
        if ($(window).scrollTop() >= 50) {
            Top.fadeIn(400);
        } else {
            Top.fadeOut(400);
        }
    }
    // to activate the scroll-to-Top Button
    Top.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // changing nav color while scrolling down

    $(window).scroll(function () {
        navScrolldown();
    });

    function navScrolldown() {
        if ($(window).scrollTop() > 50) {
            $('nav').addClass('nav-white separator');
        } else {
            $('nav').removeClass('nav-white separator');

        }
    }
    // change nav color on click
    $('nav li').on('click', function () {
        $(this).addClass('nav-clicked').siblings().removeClass('nav-clicked')
    });

    // make my own centering function 
    $.fn.centerIt = function () {
        $(this).css({
            'position': 'absolute',
            'left': ($(window).width() - $(this).width()) / 2,
            'top': ($(window).height() - $(this).height()) / 2
        });
    }


    // creating autoslider
    $(function () {
        // create specific function for Autoslider
        (function autoslider() {
            $(".quotes .active").each(function () {
                if (!$(this).is(":last-child")) {
                    $(this).delay(6000).fadeOut(2000, function () {
                        $(this).removeClass("active").next().addClass("active").fadeIn(2000);
                        // self-invoke function
                        autoslider();
                    });
                } else {
                    $(this).delay(6000).fadeOut(2000, function () {
                        $(this).removeClass("active");
                        $(".slide").eq(0).addClass("active").fadeIn(2000);
                        // self-invoke function
                        autoslider();
                    });
                }
            });
            // () self-invoke function
        }());
    });

    // portofolio slider 
    $(function () {
        // without flexbox
        $('.tabs-list li').on('click', function () {
            $(this).addClass('show').siblings().removeClass('show');
            $('.content-list > div').hide();
            $($(this).data('content')).fadeIn(500);

        });

        // alternative with flexbox


    });

    // scroll to section 
    $(function () {
        'use strict';
        $('.nav-links li a').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#' + $(this).data('scroll')).offset().top - $('nav').height() + 'px'
            }, 700);

        });
    });

    // clicked figures effect
    $('.figures .caption').on('click', function () {
        $(this).toggleClass('caption-clicked');
        $(this).parent().siblings().find('.caption').removeClass('caption-clicked');
    });
});


//  movie section toggle effect


$(".movie-list i").on("click", function () {
    $(this).toggleClass("fa-plus fa-times").next("p").slideToggle(500);

});



$('.bars i').on('click', function () {
    $(this).toggleClass('fa-bars fa-times');
    $(".bars .drop").slideToggle(500);

});
