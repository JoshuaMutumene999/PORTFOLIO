document.addEventListener('DOMContentLoaded', function () {
    gsap.from('#mainH1', {
        duration: 3,
        scale: 0,
        opacity: 0,
        y: -300,
        ease: 'power3.out'
    })

    gsap.from('#mainH6', {
        duration: 3,
        scale: 0,
        opacity: 0,
        y: -300,
        ease: 'power3.out'
    })

    let images = document.querySelectorAll(".grid-gallery img");

    images.forEach(function (img) {

        img.addEventListener("click", function () {
            let lightbox = document.getElementById("lightbox");
            let lightboxImg = document.getElementById("lightbox-image");
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.style.display = "block";
        });
    });

    document.getElementById("close-lightbox").addEventListener("click", function () {
        document.getElementById("lightbox").style.display = "none";
    });
});

// /

let slides = document.querySelector('.slides');
let images = document.querySelectorAll('.slides img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let idx = 0;

function showSlide(i) {
    if (i < 0) {
        idx = images.length - 1;
    } else if (i >= images.length) {
        idx = 0;
    }

    const imgWidth = images[0].clientWidth;
    slides.style.transform = `translateX(${-idx * imgWidth}px)`;
}

next.addEventListener('click', function () {
    console.log('Clicked Next');
    idx++;
    showSlide(idx);
})

prev.addEventListener('click', function () {
    console.log('Clicked Previous');
    idx--;
    showSlide(idx);
})