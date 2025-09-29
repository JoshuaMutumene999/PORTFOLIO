let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const totalSlides = carousel.children.length;

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    carousel.style.transform = `translateX(-${currentIndex * 100}vw)`;
}, 3000);