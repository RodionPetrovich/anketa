let menu = document.querySelector('.main-nav');
let burger = document.querySelector('main-nav__toggle');

let openMenu = function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('.main-nav--active');
}
