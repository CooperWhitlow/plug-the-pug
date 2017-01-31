//begin jquery after DOM loaded
$( document ).ready(function() {

	//declare variable(s) for later use
	var currentTime = formatTimeOfDay($.now());

	//page setup
	$( "#content-box-left" ).hide();
	$( "#content-box-middle" ).hide();
	$( "#content-box-right" ).hide();
	$( "#treat-notification" ).hide();

	//click-to-zoom for video
	$( "#mjpeg_dest" ).click(function() {
		$( this ).toggleClass("zoom-video");
	});

	//click events for background
	$( "#content-background").click(function() {
		$(".content-box").hide();
		$( "#face-left" ).removeClass("face-active").fadeIn();
    	$( "#face-middle" ).removeClass("face-active").fadeIn();
    	$( "#face-right" ).removeClass("face-active").fadeIn();
    	$( "audio" ).trigger("pause");
    	$( ".face" ).each(function() {
    		var oldSrc = $( this ).attr("src");
    		var newSrc = oldSrc.replace(/-photo.png/g, ".png");
    		$( this ).attr("src", newSrc);
    	});
    });

	//insert univeral error message for HTML5 media tracks
	$( "audio" ).html("Your browser doesn't support pug sounds : ( Update it yo!");
	
	//hover events for pug faces
    $( "#face-left" ).hover(function() {
    	$( this ).attr("src","media/face-left-photo.png");
	}, function() {
		var isClicked = $( this ).hasClass("face-active");
		if ( !isClicked ) { 
			$( this ).attr("src","media/face-left.png");
		}
	});

    $( "#face-middle" ).hover(function() {
    	$( this ).attr("src","media/face-middle-photo.png");
	}, function() {
		var isClicked = $( this ).hasClass("face-active");
		if ( !isClicked ) { 
			$( this ).attr("src","media/face-middle.png");
		}
	});

    $( "#face-right" ).hover(function() {
    	$( this ).attr("src","media/face-right-photo.png");
    }, function() {
		var isClicked = $( this ).hasClass("face-active");
		if ( !isClicked ) { 
			$( this ).attr("src","media/face-right.png");
		}
	});

	//click events for pug faces
    $( "#face-left" ).click(function() {
    	$( "#content-box-left" ).fadeIn();
    	$( ".speaker-paused" ).fadeIn();
    	$( ".speaker-playing" ).hide();
    	$( "#face-middle" ).hide();
    	$( "#face-right" ).hide();
    	$( this ).attr("src","media/face-left-photo.png");
    	$( this ).addClass("face-active")
    });

    $( "#face-middle" ).click(function() {
    	$( "#content-box-middle" ).fadeIn();
    	$( "#treat-notification").hide();
    	$( "#face-left" ).hide();
    	$( "#face-right" ).hide();
    	$( this ).attr("src","media/face-middle-photo.png");
    	$( this ).addClass("face-active")
    });

    $( "#face-right" ).click(function() {
    	$( "#content-box-right" ).fadeIn();
    	$( "#face-middle" ).hide();
    	$( "#face-left" ).hide();
    	$( this ).attr("src","media/face-right-photo.png");
    	$( this ).addClass("face-active")
    });

	//click events for soundboard
	$( ".speaker-paused" ).click(function() {
		$( this ).toggle();
		$( this ).next().toggle();
		$( this ).siblings().last().trigger("play");

	});

	$( ".speaker-playing" ).click(function() {
		$( this ).toggle();
		$( this ).prev().toggle();
		$( this ).siblings().last().trigger("pause");
	});

	//click events for treats
	function formatTimeOfDay(millisSinceEpoch) {
  		var secondsSinceEpoch = (millisSinceEpoch / 1000) | 0;
  		var secondsInDay = ((secondsSinceEpoch % 86400) + 86400) % 86400;
  		var minutes = ((secondsInDay / 60) | 0) % 60;
  		var hours = (secondsInDay / 3600 - 8) | 0;
  		return hours + (minutes < 10 ? ":0" : ":") + minutes;
	}

	$( "#treat-drop-button" ).one("click", function() {
		$( "#treat-drop-audio" ).trigger("play");
		$( this ).html("FED @ " + currentTime);
		$( "#treat-notification" ).slideDown();
		$.ajax("http://plugthepug.ngrok.io/test.cgi", "GET");

	});
});