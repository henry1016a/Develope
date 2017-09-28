videojs.registerPlugin('plugin_test', function() {
	console.log('login_to_function.js-plugin_test');
	$('.CoverBlockFadeIn').fadeIn('slow/400/fast');
	$(document).ready(function(){
		console.log('login_to_function.js-Jquery');
	// SlideDown Display ------------------------------------
		$("#SlideDown").click(function(){
			$('.CoverBlockSlideDown').stop().animate({
				top: '0px'
			}, 1000);
		});

		$(".CloseBlockSlideDown").click(function(){
			$(".CoverBlockSlideDown").animate({
				top:'-150%'
			}, 1000);
		});

	// FadeIn Display ----------------------------------------


		$(".CloseBlockFadeOut").click(function(){
			$('.CoverBlockFadeIn').fadeOut('slow/400/fast');
		});

	});
});

