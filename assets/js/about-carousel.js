document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.querySelector('[data-member-carousel]');
  if (!carousel) {
    return;
  }

  var slides = Array.from(carousel.querySelectorAll('[data-member-slide]'));
  var dots = Array.from(document.querySelectorAll('[data-carousel-dot]'));
  var prevButton = carousel.querySelector('[data-carousel-prev]');
  var nextButton = carousel.querySelector('[data-carousel-next]');

  if (!slides.length || !prevButton || !nextButton) {
    return;
  }

  var activeIndex = 0;

  function setActiveSlide(index) {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach(function (slide, slideIndex) {
      var isActive = slideIndex === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle('is-active', dotIndex === activeIndex);
      dot.setAttribute('aria-selected', String(dotIndex === activeIndex));
    });
  }

  prevButton.addEventListener('click', function () {
    setActiveSlide(activeIndex - 1);
  });

  nextButton.addEventListener('click', function () {
    setActiveSlide(activeIndex + 1);
  });

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var dotIndex = Number(dot.getAttribute('data-carousel-dot'));
      setActiveSlide(dotIndex);
    });
  });

  setActiveSlide(0);
});
