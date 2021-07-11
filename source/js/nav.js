"use strict"

let menu = document.querySelector('.menu');
let burger = document.querySelector('main-nav__toggle');

let openMenu = function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('.main-nav--active');
}

//прокрутка при клике

const siteLinks = document.querySelectorAll('.site-list__link[data-goto]');
if (siteLinks.length > 0) {
  siteLinks.forEach(siteLink => {
    siteLink.addEventListener("click", onSiteListClick);
  });
  function onSiteListClick(e) {
    const siteLink = e.target;
    if (siteLink.dataset.goto && document.querySelector(siteLink.dataset.goto)) {
      const gotoBlock = document.querySelector(siteLink.dataset.goto);
      window.scrollTo({

        behavior: "smooth"
      });

    }


  }

}

