let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('header__stop-scroll');
});

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('header__burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('header__stop-scroll');
    });
});

const buttonMore = document.querySelector('.articles__more');
const articlesItems = document.querySelectorAll('.articles__item');

buttonMore.addEventListener('click', function () {
    articlesItems.forEach(function (el) {
        el.classList.add('articles__item--visible');
        buttonMore.closest('.articles__center').classList.add('articles__center--hidden');
    });
});