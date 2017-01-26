
//begin JS
function playSleepAudio() { document.getElementById('player').play()
}

function pauseSleepAudio() { document.getElementById('player').pause()
}


//begin jquery
$( document ).ready(function() {

	//page setup
	$( "#ig-link" ).hide();
	$( ".speakers" ).hide();
	$( "figcaption" ).hide();
	$( "h1" ).hide();
	$( ".buttons" ).hide();
	$( "#live-stream" ).hide();
	$( "#treat-notification" ).hide();
	
	//click events for pug faces
    $( "#face-left" ).click(function() {
    	$( this ).attr("src","/media/face-left-photo.png");
    	$( this ).addClass("face-active");
    	$( "#content-left" ).addClass("box-active");
    	$( ".speakers:not(.speaker-playing)" ).fadeIn()
    	$( "figcaption" ).fadeIn()
    	$( "#soundboard-heading" ).fadeIn();
    });

    $( "#face-middle" ).click(function() {
    	$( this ).attr("src","/media/face-middle-photo.png");
    	$( this ).addClass("face-active");
    	$( "#content-middle" ).addClass("box-active");
    	$( "#treat-heading" ).fadeIn();
    	$( ".buttons" ).fadeIn();
		$( "#live-stream" ).fadeIn();
    });

    $( "#face-right" ).click(function() {
    	$( this ).attr("src","/media/face-right-photo.png");
    	$( this ).addClass("face-active");
    	$( "#content-right" ).addClass("box-active");
    	$( "#ig-link" ).fadeIn()
    });
	
	//click events for background
	$( "#background" ).not("img").click(function() {
		var oldSrc = $(".box-active > img").attr("src");
    	var newSrc = oldSrc.replace(/-photo.png/g, ".png");
    	$( ".box-active > img").attr("src", newSrc);
    	$( "img" ).removeClass("face-active").removeClass("hide");
    	$( ".content-box" ).removeClass("box-active");
    	$( "#ig-link" ).hide()
    	$( ".speakers" ).hide()
    	$( "figcaption" ).hide();
    	$( "h1" ).hide();
    	$( ".buttons" ).hide();
		$( "#live-stream" ).hide();
	});

	//click events for soundboard
	$( ".speaker-paused" ).click(function() {
		$ ( this ).next().toggle();
	});

	//click events for treats
	function formatTimeOfDay(millisSinceEpoch) {
  		var secondsSinceEpoch = (millisSinceEpoch / 1000) | 0;
  		var secondsInDay = ((secondsSinceEpoch % 86400) + 86400) % 86400;
  		var seconds = secondsInDay % 60;
  		var minutes = ((secondsInDay / 60) | 0) % 60;
  		var hours = (secondsInDay / 3600 - 8) | 0;
  		return hours + (minutes < 10 ? ":0" : ":") + minutes
}
	var currentTime = formatTimeOfDay($.now());

	$( "#treat-drop-button" ).click(function() {
		$( this ).html("fed @ " + currentTime);
		$( "#treat-notification").addClass("overlay-active");
		$( "#treat-notification" ).slideDown();
	});

	$( "#treat-buy-button" ).click(function() {
		$( "#treat-notification" ).css("color","red");
	});

    //hover events for pug faces
    $( "#face-left" ).hover(function() {
    	$( this ).attr("src","/media/face-left-photo.png");
	}, function() {
		var isClicked = $( this ).hasClass("face-active")
		if ( !isClicked ) { 
			$( this ).attr("src","/media/face-left.png");
		}
	});

    $( "#face-middle" ).hover(function() {
    	$( this ).attr("src","/media/face-middle-photo.png");
	}, function() {
		var isClicked = $( this ).hasClass("face-active")
		if ( !isClicked ) { 
			$( this ).attr("src","/media/face-middle.png");
		}
	});

    $( "#face-right" ).hover(function() {
    	$( this ).attr("src","/media/face-right-photo.png");
    }, function() {
		var isClicked = $( this ).hasClass("face-active")
		if ( !isClicked ) { 
			$( this ).attr("src","/media/face-right.png");
		}
	});

});