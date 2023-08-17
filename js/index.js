const swiper_top = new Swiper(".top__swiper", {
	effect: "fade",
	pagination: {
		el: ".swiper-pagination",
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});

const swiper_blog = new Swiper(".blog__swiper", {
	effect: "fade",
	pagination: {
		el: ".swiper-pagination",
	},
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: false,
	// },
	navigation: {
		nextEl: '.blog__swiper-button-next',
		prevEl: '.blog__swiper-button-prev',
	},
});

const swiper_customers = new Swiper(".customers__swiper", {
	effect: "coverflow",
	pagination: {
		el: ".swiper-pagination",
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	coverflowEffect: {
		depth: 200,
		modifier: 0,
		rotate: 0,
		scale: 0,
		slideShadows: false,
		stretch: 0,
	},

	loop: true,
	allowTouchMove: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		469: {
			slidesPerView: 1.52,
		},
	}
});


// SPOILERS
let details = document.querySelectorAll("details");
for (i = 0; i < details.length; i++) {
	details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
	if (!event.target.open) return;
	let details = event.target.parentNode.children;
	for (i = 0; i < details.length; i++) {
		if (details[i].tagName != "DETAILS" ||
			!details[i].hasAttribute('open') ||
			event.target == details[i]) {
			continue;
		}
		details[i].removeAttribute("open");
	}
}

// BURGER
let menuBtn = document.querySelector('.menu__burger');
let menu = document.querySelector('.header__nav');
let body = document.querySelector('body');
menuBtn.addEventListener('click', function () {
	menu.classList.toggle('_active');
	body.classList.toggle('_lock');
})