var menuToggle = document.querySelector('.js-toggle-mobile-menu')
var menuNav = document.querySelector('.js-menu-nav')
var menuToggle = document.querySelector('.header-toggle')
menuToggle.addEventListener('click', function (e) {
  e.stopPropagation()
  menuNav.classList.toggle('is-mobile-open')
  if (menuNav.classList.contains('is-mobile-open')) {
    menuToggle.classList.add('is-open')
  } else {
    menuToggle.classList.remove('is-open')
  }
})
document.addEventListener('click', function (e) {
  if (menuNav.classList.contains('is-mobile-open')
    && menuToggle.classList.contains('is-open')
    && e.target !== menuToggle
  ) {
    menuToggle.classList.remove('is-open')
    menuNav.classList.remove('is-mobile-open')
  }
})
