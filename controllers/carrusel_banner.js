const carrusel = document.querySelector('.carrusel');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  carrusel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Agrega eventos para los botones de siguiente y anterior
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Agrega el intervalo para el movimiento automático
const interval = setInterval(nextSlide, 8000); // Cambia de slide cada 3 segundos

// Pausa el intervalo cuando el mouse entra al carrusel
carousel.addEventListener('mouseenter', () => clearInterval(interval));

// Reanuda el intervalo cuando el mouse sale del carrusel
carousel.addEventListener('mouseleave', () => interval = setInterval(nextSlide, 3000));


// Inicia el carrusel mostrando el primer slide
showSlide(currentIndex);