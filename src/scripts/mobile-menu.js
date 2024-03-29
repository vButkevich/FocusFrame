'use strict';
{
  console.log('FocusFrame:[2024.01.19]:v1.001.dev');
  console.log('FocusFrame:[2024.01.19]:v2.001.dev');

  let menuBtnOpen = document.querySelector('.header-menu-btn');
  menuBtnOpen.addEventListener('click', function () {
    mobileMenuToggle();
  });

  let menuBtnClose = document.querySelector('.mobile-button');
  menuBtnClose.addEventListener('click', function () {
    mobileMenuToggle();
  });

  let menuItems = document.querySelectorAll('.menu-item');
  for (let menuItem of menuItems) {
    menuItem.addEventListener('click', function () {
      mobileMenuToggle();
    });
  }

  let menu = document.querySelector('.backdrop');
  function mobileMenuToggle() {
    menu.classList.toggle('active');
  }
}
