let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateSlidePosition();
}

function updateSlidePosition() {
    const offset = -currentSlide * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}
