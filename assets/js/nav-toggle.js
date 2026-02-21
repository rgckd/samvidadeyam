document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');

  if (!toggleButton || !mainNav) {
    return;
  }

  toggleButton.addEventListener('click', function () {
    var isOpen = mainNav.classList.toggle('is-open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        mainNav.classList.remove('is-open');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      mainNav.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  });
});
