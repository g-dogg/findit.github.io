$(document).ready(function() {

	function heightDetect($percentage) {
		$(".mainHead").css("height", $(window).height() * $percentage );
	};
	heightDetect(0.8);
	$(window).resize(function() {
		heightDetect();
	});

});

$(window).load(function() {

	$(".loaderInner").fadeOut();
	$(".loader").delay(300).fadeOut("slow");

});