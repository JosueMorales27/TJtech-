document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.menu-icon');
  const navResponsive = document.querySelector('.nav__responsive__ul');

  navToggle.addEventListener('click', function () {
    navResponsive.classList.toggle('nav__responsive__ul--visible');
  });

  function changeSlide(slider, n) {
    const images = slider.parentNode.querySelectorAll('img');
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + n + images.length) % images.length;
    images[activeIndex].classList.add('active');
  }

  const prevButtons = document.querySelectorAll('.prev');
  const nextButtons = document.querySelectorAll('.next');

  prevButtons.forEach(button => {
    button.addEventListener('click', function () {
      changeSlide(button, -1);
    });
  });

  nextButtons.forEach(button => {
    button.addEventListener('click', function () {
      changeSlide(button, 1);
    });
  });
});

function showCategory(categoryId) {
  const categories = document.querySelectorAll('.category');
  categories.forEach(category => {
    category.style.display = category.id === categoryId ? 'block' : 'none';
  });
}
