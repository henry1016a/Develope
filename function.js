videojs.plugin('plugin_test', function() {
	$(document).ready(function(){

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
		$("#FadeIn").click(function(){
			$('.CoverBlockFadeIn').fadeIn('slow/400/fast');
		});
		$(".CloseBlockFadeOut").click(function(){
			$('.CoverBlockFadeIn').fadeOut('slow/400/fast');
		});

	});
});

