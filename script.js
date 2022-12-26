// agregar modo oscuro

// Carruzel
document.addEventListener('DOMContentLoaded', () => {
	const elementosCarousel = document.querySelectorAll('.carousel');
	M.Carousel.init(elementosCarousel, {
		duration: 150,
		indicators: true,
	});
});

// validar formulario
let form = document.querySelector('#form');
let enviado = document.querySelector('.enviado');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	enviado.style.left = '0';
	setTimeout(() => {
		enviado.style.left = '-1000px';
	}, 3000);
});
