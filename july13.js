// scripts.js

function changeSlide(element, n) {
  let slider = element.parentNode;
  let images = slider.getElementsByTagName('img');
  let currentIndex;

  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains('active')) {
      currentIndex = i;
      break;
    }
  }

  images[currentIndex].classList.remove('active');
  currentIndex += n;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  images[currentIndex].classList.add('active');
}

function showCategory(category) {
  let categories = document.querySelectorAll('.category');
  categories.forEach(cat => {
    if (cat.id === category) {
      cat.style.display = 'block';
    } else {
      cat.style.display = 'none';
    }
  });
}

// Show the first category by default
document.addEventListener('DOMContentLoaded', function() {
  showCategory('cybersecurity');
});
