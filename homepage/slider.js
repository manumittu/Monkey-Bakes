let currentIndex = 0;

const slides = document.getElementById('slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000);
