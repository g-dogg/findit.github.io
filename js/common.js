$(document).ready(function() {

	$(".section_header").animated("fadeInUp", "fadeOutDown");


	//Ьутг
	$('.menuButton .menuLink').click(function(e) {
	e.preventDefault();
	$(this).toggleClass('close');

	if ($(".topMenu").is(":visible")) {
			$(".topText").css("opacity", "1");
			$(".topMenu").fadeOut(600);
			$(".topMenu li a").removeClass("fadeInUp animated");
		} else {
			$(".topText").css("opacity", ".1");
			$(".topMenu").fadeIn(600);
			$(".topMenu li a").addClass("fadeInUp animated");
		};
	});

		$(".topMenu ul a").click(function() {
		$(".topMenu").fadeOut(600);
		$(".menuLink").toggleClass("active");
		$(".topText").css("opacity", "1");
	}).append("<span>");

	function heightDetect() {
		$(".mainHead").css("height", $(window).height());
	};

	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

});

$(window).load(function() {

	$(".loaderInner").fadeOut();
	$(".loader").delay(300).fadeOut("slow");

});