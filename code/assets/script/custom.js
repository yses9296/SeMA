$(document).ready(function (){    
    //Swiper
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
//            600: {
//                slidesPerView: 1.4,
//                spaceBetween: 24
//            },
//            768: {
//                slidesPerView: 2,
//                spaceBetween: 24
//            },
//            960: {
//                slidesPerView: 3,
//                spaceBetween: 24
//            },
            1540: {
                slidesPerView: 4,
                spaceBetween: 24
            },
            1250: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        }
    });
});

//notice
var currentIndex = 0;
var position;

setInterval(function(){
    if (currentIndex < 2){
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    position = currentIndex * (-50)+"px";
    $(".notice > ul").animate({top: position},300);
},3000);



//knowledge section
$(".knowledge_img").find("img:gt(0)").hide();

var length = $(".knowledge_img > img").length;
var current = 0;

setInterval(function(){
    var next = (current + 1) % length;
    
    $(".knowledge_img").find("img").eq(current).fadeOut('slow');
    $(".knowledge_img").find("img").eq(next).fadeIn('slow');
    
    current = next;
}, 5000);


