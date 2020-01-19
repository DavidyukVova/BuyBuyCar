$("a.bottomLink").click(function() {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 900,
        easing: "swing"
    });
    return false;
});

$( document ).ready(function() {
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


    'use strict';
    let btns = Array.from(document.querySelectorAll('.filter-block .filter-btn'));
    let prgs = Array.from(document.querySelectorAll('.products-wrap'));

    btns.map(function (btn) {
        btn.addEventListener('click', function () {
            // $('.filter-block .filter-btn').removeClass('active');
            let _this = this;

            btns.map(function (btn) {
                _this.dataset.id == btn.dataset.id ? btn.style.background = '#ffffff' : btn.style.background = 'inherit';
            });

            prgs.map(function (prg) {
                _this.dataset.id == prg.dataset.id ? prg.style.display = 'block' : prg.style.display = "none";
            });
        });
    });

});

