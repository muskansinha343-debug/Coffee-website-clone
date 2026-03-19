const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button"); // ✅ fix

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu"); // better than click()
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }
});