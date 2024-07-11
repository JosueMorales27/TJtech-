document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav__responsive__ul');

    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('show-menu');
    });

    const sliders = document.querySelectorAll('.image-slider');
    sliders.forEach(slider => {
        let currentSlide = 0;
        const slides = slider.querySelectorAll('img');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (index + totalSlides) % totalSlides;
            slides[currentSlide].classList.add('active');
        }

        slider.querySelector('.prev').addEventListener('click', function() {
            showSlide(currentSlide - 1);
        });

        slider.querySelector('.next').addEventListener('click', function() {
            showSlide(currentSlide + 1);
        });

        // Initialize the first slide as active
        slides[currentSlide].classList.add('active');
    });
});
