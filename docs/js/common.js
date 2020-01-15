if( $('main')) {
    $(window).scroll(function() {
        consoleBG();
    });
}  else {
    $('.header').css('background', '#ffffff');
    $('.header').css('z-index', '999');
    $('.header').addClass('active');
}

function consoleBG() {
    if ($(window).scrollTop() == 0) {
        $('.header').css('background', 'none');
        $('.header').removeClass('active');
    } else {
        $('.header').css('background', '#ffffff');
        $('.header').css('z-index', '999');
        $('.header').addClass('active');
    }
}