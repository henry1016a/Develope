videojs.plugin('plugin_test', function() {
	console.log('login_to_function.js-plugin_test');
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

		$('.CoverBlockFadeIn').fadeIn('slow/400/fast');
		$(".CloseBlockFadeOut").click(function(){
			$('.CoverBlockFadeIn').fadeOut('slow/400/fast');
		});

	});
});

