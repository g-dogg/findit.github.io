$(document).ready(function() {



	function heightDetect($percentage) {
		$(".mainHead").css("height", $(window).height() * $percentage );
	};
	heightDetect(0.9);
	$(window).resize(function() {
		heightDetect();
	});

	$(".mainHead .titleWrapper h1").animated("slideInDown", "slideOutUp");
	$(".mainHead .titleWrapper .sendRequest").animated("pulse", "pulse");
	$(".mainHead .titleWrapper p").animated("fadeInLeft", "lightSpeedOut");

	$(".abWrapper img").animated("flipInX", "flipOutX");


});

$(window).load(function() {

	$(".loaderInner").fadeOut();
	$(".loader").delay(300).fadeOut("slow");

});