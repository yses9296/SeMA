//Swiper
$(document).ready(function (){    
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 25,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction : false,
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
});

//var height01 = $("#banner").height();
//var height02 = $("#se").height();
//var totalHeight = height01 + height02 + 50;

//var height = $("#container01").height();
//
//$("#aside").css("height", height);
////$("#aside").css("padding-bottom", 2+"em");
//console.log(height);


//var total = $("#aside").height();
//console.log(height01);
//console.log(height02);
//console.log(total);

//
//var swiper = new Swier ('.swiper-container', {
//    slidesPerView : 'auto',
//    spaceBetween : 20,
//});
//
//var slideSetting = {
//    slidesPerView : 'auto',
//    spaceBetween : 20,
//    loop : false,
//    loopAdditionalSlides : 1,
//    autoplay : {
//        delay : 3000,  
//        disableOnInteraction : false, 
//    }
//};
//
//var slide = new Swiper('.swiper-container', slideSetting);