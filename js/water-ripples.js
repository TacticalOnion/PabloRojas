$(document).ready(function() {
	$('.water-ripples-background').ripples({
		resolution: 512,
		dropRadius: 20,
		perturbance: 0.04,
	});

	// Automatic drops
	setInterval(function() {
		var $el = $('.water-ripples-background');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 200);
});
