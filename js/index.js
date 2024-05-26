var bar = document.getElementById("bar")
var nav = document.getElementById("nav")
bar.onclick = function () {
    nav.classList.toggle("display")
    // bar.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'
    bar.classList.toggle("marginleft")
}
/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        600: {
            slidesPerView: 3,
        },
        968: {
            slidesPerView: 3,
        },
    },
});