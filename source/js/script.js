const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const navMenu = document.querySelector('.main-nav');
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle('_active');
    navMenu.classList.toggle('_active');
  })
}

let bDate = document.querySelector('.user-form__date');
let arrow = document.querySelector('.arrow');
if (bDate) {
  arrow.addEventListener("click", function (e) {
    bDate.classList.toggle('visually-hidden');
  })
};

let field = document.querySelector('input[id="birthday-date"]');
if (bDate) {
  field.addEventListener("click", function (e) {
    bDate.classList.toggle('visually-hidden');
  })
};

