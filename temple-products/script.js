var swiper = new Swiper(".mySwiper", {
  spaceBetween: 6,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });