$(document).ready(function () {
	const $el = $('.water-ripples-background');

	$el.ripples({
		resolution: 512,
		dropRadius: 20,
		perturbance: 0.04,
	});

	// Drops automáticos
	setInterval(function () {
		const x = Math.random() * $el.outerWidth();
		const y = Math.random() * $el.outerHeight();
		const dropRadius = 20;
		const strength = 0.04 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 200);

	// Activar gotas con toque
	$el.on('click touchstart', function (e) {
		let x, y;
		if (e.type === 'touchstart') {
			x = e.originalEvent.touches[0].pageX - $el.offset().left;
			y = e.originalEvent.touches[0].pageY - $el.offset().top;
		} else {
			x = e.pageX - $el.offset().left;
			y = e.pageY - $el.offset().top;
		}

		$el.ripples('drop', x, y, 20, 0.04 + Math.random() * 0.04);
	});
});