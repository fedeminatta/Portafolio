// agregar modo oscuro
let dark = document.querySelector('#dark');
let rootStyle = document.documentElement.style;
dark.addEventListener('click', darkMode);
function darkMode() {
	if (dark.classList.contains('fa-sun-o')) {
		dark.classList.remove('fa-sun-o');
		dark.classList.add('fa-moon-o');
		rootStyle.setProperty('--bg-primary', '#191919');
		rootStyle.setProperty('--bg-secundary', '#202020');
		rootStyle.setProperty('--text', '#fff');
	} else if (dark.classList.contains('fa-moon-o')) {
		dark.classList.remove('fa-moon-o');
		dark.classList.add('fa-sun-o');
		rootStyle.setProperty('--bg-primary', '#f7f7ee');
		rootStyle.setProperty('--bg-secundary', '#ece9e1');
		rootStyle.setProperty('--text', '#000');
	}
}

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
