$(document).ready(function() {

	$(".popup").magnificPopup({type:"image"});

	$(".topText h1").animated("zoomIn", "fadeOutUp");
	$(".topText p, .secHeader").animated("fadeInUp", "fadeOutDown");
	$(".animL").animated("fadeInRight","fadeOutRight");
	$(".animR").animated("fadeInLeft","fadeOutLeft");
	$(".animFoto").animated("flipInY","flipOutY");

	function heightDetect() {
		$(".mainHead").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggleMenu").click(function() {
  $(".sandwich").toggleClass("active");
	});

	$(".topMenu ul a").click(function() {
		$(".topMenu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");

	$(".toggleMenu").click(function(){
			if($(".topMenu").is(":visible")){
				$(".topText").removeClass("opacify");
				$(".topMenu").fadeOut(600);
				$(".topMenu li a").removeClass("fadeInUp animated");
			}else{
				$(".topText").addClass("opacify");
				$(".topMenu").fadeIn(600);
				$(".topMenu li a").addClass("fadeInUp animated");
			}
	});
;

});
$(window).load(function() {

	$(".loaderInner").fadeOut();
	$(".loader").delay(300).fadeOut("slow");

});