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
                    alert('Email sent!');
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
                    alert('Email sent!');
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
                    alert('Email sent!');
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