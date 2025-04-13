$(document).ready(function() {
	try {
		$('.water-ripples').ripples({
			resolution: 128,
			dropRadius: 10,
			perturbance: 0.04,
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}
	// Automatic drops
	setInterval(function() {
		var $el = $('.water-ripples');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 0;
		var strength = 0.04 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 400);
});
