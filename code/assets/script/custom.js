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
        console.log(current);
        console.log(next);
}, 5000);












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