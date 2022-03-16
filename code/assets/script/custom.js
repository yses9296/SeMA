//영화차트 이미지 슬라이드
var swiper = new Swiper('.swiper-container',{
    slidesPerView: 4,
    spaceBetween: 24,
//            mousewheel: {
//                invert: true,
//            },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    autoplay: {
        delay: 6000,
    },
    breakpoints: {
        600: {
            slidesPerView: 1.4,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});