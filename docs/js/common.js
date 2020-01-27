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

            btns.map(function (btn) {
                _this.dataset.id == btn.dataset.id ? btn.style.boxShadow = '0px 8px 16px rgba(47, 63, 82, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.12)' : btn.style.boxShadow = 'none';
            });

            prgs.map(function (prg) {
                _this.dataset.id == prg.dataset.id ? prg.style.display = 'block' : prg.style.display = "none";
            });
        });
    });


    //tel mask
    $('.mask-phone').mask("+38(999) 999 99 99");


    //tom menu button
    $('.mobile-menu-button').on('click', function () {
        $('.mobile-menu-button').toggleClass('active');
        $('.top-phone-link').toggleClass('d-none');
    });


});

//rotate button for FAQ
$('.faq-btn').click(function() {
    $(this).toggleClass('active');
});

//first form
$('.send_email_1').on('click', sendEmail1);

function sendEmail1() {
    var name1 = $('#name1').val(),
        phone1 = $('#phone1').val()
    if (name1!='' && phone1!='' ) {
        $.post (
            "core/mail.php",
            {
                "name" : name1,
                "phone" : phone1
            },
            function (data) {
                if (data==1) {
                    // alert('Email sent!');
                    // window.location.reload();

                    $('#subscribeModal').modal({
                        backdrop: 'static',
                        keyboard: true
                    });

                    name1.value.innerHTML = '';
                    phone1.value.innerHTML = '';
                }
                else {
                    alert('Заказ отправлено!');
                }
            }
        );
        return false;
    }
    else {
        alert('Заполните все поля!');
    }
    document.getElementById('name1').value = "";
    document.getElementById('phone1').value = "";
}

//second form
$('.send_email_2').on('click', sendEmail2);

function sendEmail2() {
    var name2 = $('#name2').val(),
        phone2 = $('#phone2').val()
    if (name2!='' && phone2!='' ) {
        $.post (
            "core/mail.php",
            {
                "name" : name2,
                "phone" : phone2
            },
            function (data) {
                if (data==1) {
                    // alert('Email sent!');
                    $('#subscribeModal').modal({
                        backdrop: 'static',
                        keyboard: true
                    });
                    name2.value.innerHTML = '';
                    phone2.value.innerHTML = '';


                }
                else {
                    alert('Заказ отправлено!');
                }
            }
        );
        return false;
    }
    else {
        alert('Заполните все поля!');
    }
    document.getElementById('name2').value = "";
    document.getElementById('phone2').value = "";
}

//modal form
$('.send_email_3').on('click', sendEmail3);

function sendEmail3() {
    var name3 = $('#name3').val(),
        phone3 = $('#phone3').val()
    if (name3!='' && phone3!='' ) {
        $.post (
            "core/mail.php",
            {
                "name" : name3,
                "phone" : phone3
            },
            function (data) {
                if (data==1) {
                    // alert('Email sent!');
                    $('#subscribeModal').modal({
                        backdrop: 'static',
                        keyboard: true
                    });
                    name3.value.innerHTML = '';
                    phone3.value.innerHTML = '';


                }
                else {
                    alert('Заказ отправлено!');
                }
            }
        );
        return false;
    }
    else {
        alert('Заполните все поля!');
    }
    document.getElementById('name3').value = "";
    document.getElementById('phone3').value = "";
}

$('#subscribeModal').on('hide.bs.modal', function() {
    window.location.reload();
});