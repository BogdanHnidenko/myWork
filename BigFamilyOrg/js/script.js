// Меню бургер------------------------------------------------------------------
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__nav').toggleClass('active');
	});
});
// Відео--------------------------------------------------------------------------
let videoBtn = document.querySelector('.js-video-btn'),
	video = document.querySelector('.js-video');

videoBtn.onclick = function () {
	video.play();
	this.classList.add('hide');
};

video.onclick = function () {
	if (this.paused) {
		this.play();
	} else {
		this.pause();
	}
};

video.addEventListener('ended', videoHandler, false);
function videoHandler() {
	videoBtn.classList.remove('hide');
};
// Swiper---------------------------------------------------------------------------
new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	spaceBetween: 30,
	centeredSlides: true,
	initialSlide: 2,
	loop: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
});