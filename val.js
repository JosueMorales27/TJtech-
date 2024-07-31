document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.menu-icon');
    const navUl = document.querySelector('.nav__ul');
  
    navToggle.addEventListener('click', function () {
      navUl.classList.toggle('nav__ul--visible');
    });
  });
  