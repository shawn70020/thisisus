$(document).ready(function() {

    //頁面滑動

    $('.container').on('click', '.anchor', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 900);
    });

    //判斷高度

    $(window).scroll(function() {

        if ($(window).scrollTop() >= $('.personal-profile').offset().top) {
            $('.nav').addClass('fixed');
            $('.menu-s').addClass('fixed').css('top', '56px');

            $('.resume').removeClass('here');
            $('.slider').css('margin-right', '0');
            $('.intro').fadeIn(2000);
        } else {
            $('.nav').removeClass('fixed');
            $('.menu-s').removeClass('fixed');
            $('.profile').removeClass('here');
            $('.resume').removeClass('here');
        }

    });

    $(window).scroll(function() {

        if ($(window).scrollTop() >= $('.resume-wrap').offset().top) {
            $('.resume-article').slideDown(1500);
            $('.resume-article1').slideDown(1500);
            $('.sub-title').delay(1500).css('margin-left', '0');
            $('.sub-title1').delay(1500).css('margin-right', '0');
            $('.resume').addClass('here');
            $('.profile').removeClass('here');
            $('.skill').removeClass('here');

        }
    });

    $(window).scroll(function() {

        if ($(window).scrollTop() >= $('.skill-wrap').offset().top) {
            $('#bar-1').delay(850).css('height', '280px');
            $('#bar-2').delay(850).css('height', '300px');
            $('#bar-3').delay(850).css('height', '320px');
            $('#bar-4').delay(850).css('height', '410px');
            $('#bar-5').delay(850).css('height', '300px');
            $('#bar-6').delay(850).css('height', '320px');
            $('.skill').addClass('here');
            $('.resume').removeClass('here');
            $('.contact').removeClass('here');

        }
    });


    $(window).scroll(function() {

        if ($(window).scrollTop() >= $('.contact-wrap').offset().top - 10) {
            $('.contact-list').css('margin-left', '0');
            $('.contact-form').css('margin-right', '0');
            $('.contact').addClass('here');
            $('.skill').removeClass('here');

        }
    });

    //圖片輪播

    $('.slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 1500,
    });

    // 手機版menu

    $('.phone-bar').click(function() {
        $('.menu-s').slideToggle();
    });

    // 文字閃爍

    var i = 0;

    function blinker() {
        if (i === 0) {
            $('.blink_me').text('If three is a crowd and two is us').fadeIn(800).delay(2000).fadeOut(800);
            i = i + 1;
        } else {
            $('.blink_me').text('One slipped away!').fadeIn(800).delay(2000).fadeOut(800);
            i = i - 1;
        }
    }
    setInterval(blinker, 1600);

});