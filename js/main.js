$(document).ready(() => {
    $('.slider .container').height($('.slider').height());
    //Выбор города в хедер
    //Октрытие менюшки
    $('.js-select-city').on('click', (e) => {
        e.preventDefault();

        openCloseSelect();
    })
    //Выбор города
    $('.js-select-option').on('click', function(e){
        e.preventDefault();

        $(this).parent().prev().children('.header__box-link').text($(this).text());
        openCloseSelect();
    })
    //Закрытие этой выборки
    $(window).on('click', (e) => {
        if($('.js-select-city').hasClass('active') && !$('.js-select-city').hasClass('time')){
            if(e.target != document.querySelector('.js-select-box')){
                document.querySelectorAll('.js-select-box *').forEach((el) => {
                    if(e.target != el){
                        $('.js-select-city').removeClass('active');
                        $('.js-select').removeClass('active');
                    }
                })
            }
        }
    })

    // Слайдеры
    // Слайдер на главном экране
    $('.slider__background').slick({
        dots: false,
        arrow: true,
        prevArrow: '.slider__leftArrow',
        nextArrow: '.slider__rightArrow',
        fade: true,
        asNavFor: '.slider__inner',
        responsive: [
            {
              breakpoint: 961,
              settings: {
                arrows: false,
              }
            }
        ]
    });
    $('.slider__inner').slick({
        dots: false,
        arrow: true,
        prevArrow: '.slider__leftArrow',
        nextArrow: '.slider__rightArrow',
        fade: true,
        asNavFor: '.slider__background',
        responsive: [
            {
              breakpoint: 961,
              settings: {
                arrows: false,
              }
            }
        ]
    })
    // Отзывы
    $('.reviews__content').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 961,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    })
})

//Функции
//Открытие закрытие меню
function openCloseSelect(){
    $('.js-select-city').toggleClass('active');
    $('.js-select-city').toggleClass('time');
    $('.js-select').toggleClass('active');

    setTimeout(() => {
        $('.js-select-city').removeClass('time');
    }, 500);
}