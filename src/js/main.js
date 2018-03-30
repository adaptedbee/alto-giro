(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let imagesSwiperSlider = new Swiper('.product__slider-inner', {
      direction: 'horizontal',
      loop: true
    });
    imagesSwiperSlider.on('slideChange', function () {
      const totalSlides = this.slides.length - 2;
      let currentIndex;
      if (this.activeIndex % totalSlides !== 0) {
        currentIndex = this.activeIndex % totalSlides;
      } else {
        currentIndex = totalSlides;
      }

      const currentActiveToggle = document.querySelector('.product__slider-control-item--active');
      currentActiveToggle.classList.remove('product__slider-control-item--active');
      const nextActiveToggle = document.querySelector(`.product__slider-control-item:nth-child(${currentIndex})`);
      nextActiveToggle.classList.add('product__slider-control-item--active');
    });

    const productSliderControls = document.querySelector('.product__slider-controls');
    productSliderControls.addEventListener('click', function (event) {
      if (!event.target.classList.contains('product__slider-control')) {
        return;
      }
      const currentIndex = parseInt(event.target.dataset.number, 10);
      imagesSwiperSlider.slideTo(currentIndex);
    });

    let productSwiperSlider = new Swiper('.product-slider__inner', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 3,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1023: {
          slidesPerView: 1
        }
      }
    });

    let s;
    if (device.desktop() && window.innerWidth >= 1024) {
      s = skrollr.init();
    }

    window.addEventListener('resize', function () {
      imagesSwiperSlider.update();
      productSwiperSlider.update();
    });
  });
})();
