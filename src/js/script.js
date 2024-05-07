const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


$(document).ready(function() {
    $('#contacts-form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            text: {
                required: true
            },
            checkbox: {
                required: true
            }
        },
        messages: {
            name: "Пожалуйста, введите ваше имя",
            email: {
                required: "Пожалуйста, введите вашу почту",
                email: "Пожалуйста, введите корректный адрес почты"
            },
            text: "Пожалуйста, введите ваше сообщение",
            checkbox: "Пожалуйста, подтвердите свое согласие с политикой конфиденциальности"
        }
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    })


    $('form').submit(function(e) {
        e.preventDefault();

        if(!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });
});
