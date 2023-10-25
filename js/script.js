//<!----------------------------------------------------- BAG CATAGORIES ------------>
var swiper = new Swiper(".bag-ctgrs-subcontnr", {
  slidesPerView: 3,
  spaceBetween: 8,
  slidesPerGroup: 3,
  loop: true,
  centerSlide: "false",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints:{
    0: {
      slidesPerView: 3,
      slidesPerGroup: 3,
     },
     520:{
      slidesPerView: 3,
      slidesPerGroup: 3,
     },
     810:{
      slidesPerView: 0,
      slidesPerGroup: 0,
     },
  },
  
});

// <------------------------- Top Products--------------------------->
var swiper = new Swiper(".topBag_slide_content", {
  slidesPerView: 2,
  spaceBetween: 5,
  slidesPerGroup: 2,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  centeredSlides: false,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    520: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    810: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
// -----------------------------------------------------

// var swiper = new Swiper(".card-img", {
//   slidesPerView: 1,
//   spaceBetween: 2,
//   slidesPerGroup: 1
//   loop: true,
//   centerSlide: "true",
//   fade: "true",
//   grabCursor: "true",
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
  
//   // navigation: {
//   //   nextEl: ".swiper-button-next",
//   //   prevEl: ".swiper-button-prev",
//   // },
// });
var swiper = new Swiper(".AmznAdsCont_", {
  slidesPerView:1,
  spaceBetween: 30,
  loop:true,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});
  
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

// <-------------------------------------Preloader Script------------------------------>

let preloader = document.getElementById("preloader")
function Loading(){
  preloader.style.display='none';
}

// 