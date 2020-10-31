const cards = document.querySelectorAll('.card')
cards.forEach((card) => {
	card.addEventListener('click', () => {
		const cause_display = document.getElementById('cause-display')
		cause_display.style.display = 'flex'
		document.body.style.overflow = 'hidden'
	})
})

const cause_display_close = document.querySelector('#cause-display .closer')
cause_display_close.onclick = () => {
	const cause_display = document.getElementById('cause-display')
	cause_display.style.display = 'none'
	document.body.style.overflow = 'auto'
}

const thumbnails = document.querySelectorAll('.image-slide')
thumbnails.forEach((thumbnail) => {
	thumbnail.addEventListener('click', () => {
		const slide_id = thumbnail.getAttribute('data-slide-to')
		const slide = document.querySelector(`li[data-slide-to="${slide_id}"`)
		slide.click()
	})
})

// Auto slide off
$('.carousel').carousel({
	interval: false,
});

// Carousel Swipe Mobile
$(".carousel").on("touchstart", function (event) {
	var xClick = event.originalEvent.touches[0].pageX;
	$(this).one("touchmove", function (event) {
		var xMove = event.originalEvent.touches[0].pageX;
		if (Math.floor(xClick - xMove) > 5) {
			$(this).carousel('next');
		}
		else if (Math.floor(xClick - xMove) < -5) {
			$(this).carousel('prev');
		}
	});
	$(".carousel").on("touchend", function () {
		$(this).off("touchmove");
	});
});

// $('.carousel').on('slide.bs.carousel', function () {
// 	$('.carousel-item').css('display', 'block')
// })
// $('.carousel').on('slid.bs.carousel', function () {
// 	$('.carousel-item').css('display', 'flex')
// })