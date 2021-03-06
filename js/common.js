$(document).ready(function() {

	$(".mainHead").parallax({imageSrc: "img/bg.jpg"});

	function heightDetect($percentage) {
		$(".mainHead").css("height", $(window).height() * $percentage );
		$(".about").css("height", $(window).height() * $percentage );
		$(".contacts").css("height", $(window).height() * $percentage );
	};
	heightDetect(1);
	$(window).resize(function() {
		heightDetect();
	});

	$("#pfGrid").mixItUp();

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
	//form validation
	/*$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();
	$(".newPassword, .confirmNewPassword").jqBootstrapValidation({sniffHtml: true});
*/
	$('#oldPassword').valid8('Введите старый пароль');
	function doesPasswordFieldsMatch(values){
    		if(values.password == values.verification) {
    			return {valid:true};
        			//$(".fa fa-check-square").removeClass("hidden");
    		}
    		else {
    			return {valid:false, message:'Passwords does not match'}
    		}

		}

	$('#inputPassword').valid8('Password is required');
	$('#inputConfirmPassword').valid8({
    	'jsFunctions': [
        		{ function: doesPasswordFieldsMatch, values: function(){
                		return { password: $('#inputPassword').val(), verification: $('#inputConfirmPassword').val() }
            		}
        		}
    	]
	});


//Вращаем цитатки в цикле
	 var j = 0;
	 var delay = 4000; //millisecond delay between cycles
	 function cycleThru(){
	         var jmax = $(".cites blockquote").length -1;
	         $(".cites blockquote:eq(" + j + ")")
	                 .animate({"opacity" : "1"} ,400)
	                 .animate({"opacity" : "1"}, delay)
	                 .animate({"opacity" : "0"}, 400, function(){
	                         (j == jmax) ? j=0 : j++;
	                         cycleThru();
	                 });
	         };

	 cycleThru();

    $(".titleWrapper .logo").animated("fadeInDown", "bounceOut");
	$(".titleWrapper h3").animated("fadeInDown", "fadeOutUp");
	$(".about .abImg1").animated("flipInX", "flipOutX");
	$(".about .abImg2").animated("flipInX", "flipOutX");
	$(".about .abImg3").animated("flipInX", "flipOutX");
	$(".about .abImg4").animated("flipInX", "flipOutX");

	$(".top_mnu ul a, .sendRequest a").mPageScroll2id();

});

$(window).load(function() {

	$(".loaderInner").fadeOut();
	$(".loader").delay(300).fadeOut("slow");
	$(".mainHead .titleWrapper h1").animated("fadeInDown", "fadeOutUp");
	$(".mainHead .titleWrapper p").animated("fadeInUp", "fadeOutDown");
	$(".mainHead .titleWrapper .sendRequest").animated("fadeIn", "pulse");

});