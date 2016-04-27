$(document).ready(function() {
	$(".hamzmenu").click(function(e) {
		e.preventDefault();
		$(".menu").fadeIn();
	});

	$(".closemenu").click(function(e) {
		e.preventDefault();
		$(".menu").fadeOut();
	})
	
	$(".menu").click(function(e) {
		$(".menu").fadeOut();
	})
});

