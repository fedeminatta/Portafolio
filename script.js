// agregar modo oscuro
const dark = document.querySelector('#dark');
const rootStyle = document.documentElement.style;
dark.addEventListener('click', darkMode);
function darkMode() {
	if (dark.classList.contains('fa-moon-o')) {
		dark.classList.remove('fa-moon-o');
		dark.classList.add('fa-sun-o');
		rootStyle.setProperty('--bg-primary', '#191919');
		rootStyle.setProperty('--bg-secundary', '#202020');
		rootStyle.setProperty('--text', '#fff');
		rootStyle.setProperty('--text-s', '#fff');
		rootStyle.setProperty('--text-categoria', '#fff');
	} else if (dark.classList.contains('fa-sun-o')) {
		dark.classList.remove('fa-sun-o');
		dark.classList.add('fa-moon-o');
		rootStyle.setProperty('--bg-primary', '#f7f7ee');
		rootStyle.setProperty('--bg-secundary', '#ece9e1');
		rootStyle.setProperty('--text', '#000');
		rootStyle.setProperty('--text-s', '#000');
		rootStyle.setProperty('--text-categoria', '#636363');
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
const form = document.querySelector('#form');
const enviado = document.querySelector('.enviado');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	enviado.style.left = '0';
	setTimeout(() => {
		enviado.style.left = '-1000px';
	}, 3000);
	form.reset();
});

// deshabilitar scroll
function disableScroll() {
	// Guarda la posición especifica
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	(scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
		// Si el evento se activa, setea la misma posición
		(window.onscroll = function () {
			window.scrollTo(scrollLeft, scrollTop);
		});
}

function enableScroll() {
	window.onscroll = function () {};
}
// info emergente
const fotoUser = document.querySelector('#foto-user');
const infoUser = document.querySelector('#info-user');
const header = document.querySelector('header');
const close = document.querySelector('#close');
fotoUser.addEventListener('click', () => {
	infoUser.style.top = '50%';
	scrollTo(0, 0);
	setTimeout(() => {
		disableScroll();
	}, 400);
});

header.addEventListener('click', quitarModal);
close.addEventListener('click', quitarModal);

function quitarModal() {
	infoUser.style.top = '-1000px';
	enableScroll();
}
