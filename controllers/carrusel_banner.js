const carrusel = document.querySelector('[data-carrusel]');
const slide = document.querySelectorAll('[data-slide]');
let currentIndex = 0;

const showSlide = (index) => {
  carrusel.style.transform = `translateX(-${index * 100}%)`;
}

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slide.length;
    showSlide(currentIndex);
}

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    showSlide(currentIndex);
}

document.querySelector('[data-back-btn]').addEventListener('click', nextSlide);
document.querySelector('[data-next-btn]').addEventListener('click', prevSlide);

let interval = setInterval(nextSlide, 8000);

carrusel.addEventListener('mouseenter', () => clearInterval(interval));

carrusel.addEventListener('mouseleave', () => interval = setInterval(nextSlide, 8000));

showSlide(currentIndex);