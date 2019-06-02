$(document).ready(function() {

    //錨點

    $('.container').on('click', '.anchor', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

    //判斷高度



    //圖片輪播

    $('.slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
    });

    // 手機版menu

    $('.phone-bar').click(function() {
        $('.menu-s').slideToggle();
    });

    // 文字閃爍

    var i = 0;

    function blinker() {
        if (i === 0) {
            $('.blink_me').text('dream of become a full-stack unicorn!').fadeIn(800).delay(2000).fadeOut(800);
            i = i + 1;
        } else {
            $('.blink_me').text('passiaonate to new things!').fadeIn(800).delay(2000).fadeOut(800);
            i = i - 1;
        }
    }
    setInterval(blinker, 4000);

});