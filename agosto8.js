document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.menu-icon');
    const navUl = document.querySelector('.nav__ul');

    navToggle.addEventListener('click', function () {
        navUl.classList.toggle('nav__ul--visible');
    });

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

    function changeSlide(button, direction) {
        const slider = button.parentElement;
        const images = slider.querySelectorAll('img');
        let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + direction + images.length) % images.length;
        images[currentIndex].classList.add('active');
    }
});