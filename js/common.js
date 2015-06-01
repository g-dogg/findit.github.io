$(document).ready(function() {

	$(".mainHead").parallax({imageSrc: "img/bg.jpg"});

	function heightDetect($percentage) {
		$(".mainHead").css("height", $(window).height() * $percentage );
	};
	heightDetect(0.9);
	$(window).resize(function() {
		heightDetect();
	});

	$(".titleWrapper h3").animated("fadeInDown", "fadeOutUp");
	$(".about .abImg1").animated("flipInX", "flipOutX");


});

$(window).load(function() {

	$(".loaderInner").fadeOut();
	$(".loader").delay(300).fadeOut("slow");
	$(".mainHead .titleWrapper h1").animated("fadeInDown", "fadeOutUp");
	$(".mainHead .titleWrapper p").animated("fadeInUp", "fadeOutDown");
	$(".mainHead .titleWrapper .sendRequest").animated("fadeIn", "pulse");

});