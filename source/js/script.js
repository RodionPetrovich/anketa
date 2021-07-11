const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const navMenu = document.querySelector('.main-nav');
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle('_active');
    navMenu.classList.toggle('_active');
  })
}
