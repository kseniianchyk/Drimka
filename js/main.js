$(document).ready(() => {

    // init animation
    new WOW({
        animateClass: 'animate__animated'
    }).init();
    // /init animation

    // burger
    $('.burger').click(() => {
        $('.header').toggleClass('menu-burger');
    });
    $('.header__menu-link').click(() => {
        $('.header').removeClass('menu-burger');
    });
    // /burger


});