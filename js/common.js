$(document).ready(function() {

	$("#portfolioGrid").mixItUp();

	$(".sPortfolio li").click(function() {
		$(".sPortfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popupContent").magnificPopup({type:"inline", midClick: true, closeOnContentClick: true, closeBtnInside: true});

	$(".topText h1").animated("zoomIn", "fadeOutUp");
	$(".topText p, .secHeader").animated("fadeInUp", "fadeOutDown");
	$(".animL").animated("fadeInRight","fadeOutRight");
	$(".animR").animated("fadeInLeft","fadeOutLeft");
	$(".animFoto").animated("flipInY","flipOutY");

	$(".left .resumeItem").animated("fadeInLeft","fadeOutLeft");
	$(".right .resumeItem").animated("fadeInRight","fadeOutRight");

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

	$(".pfItem").each(function(i) {
		$(this).find("a").attr("href", "#work" + i);
		$(this).find(".pfDescr").attr("id", "work" + i);
	});

});
$(window).load(function() {

	$(".loaderInner").fadeOut();
	$(".loader").delay(300).fadeOut("slow");

});