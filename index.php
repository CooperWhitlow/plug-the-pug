<!DOCTYPE html>
<html>
<head>
	<title>Plug the Pug Interactive</title>
	<script src="js/script.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="main.js" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="main.css">
	<meta name="viewport" content="width=750">
</head>
<body onload="setTimeout('init(0,25,1);', 100);">
	<div id="content-background">
	</div>
		<div id="content-wrapper">
			<img class="face" id="face-left" src="media/face-left.png" alt=""/>
			<div class="content-box" id="content-box-left">
				<h1>SOUNDBOARD</h1>
				<div id="all-speaker-wrapper">
					<div class="single-speaker-wrapper">
						<img alt="" class="speaker-paused speaker-left" src="media/speaker-paused.png"/>
						<img alt="" class=" speaker-playing speaker-left" src="media/speaker-playing.png"/>
						<h3 id="single-speaker-left-caption">BREATH</h3>
						<audio id="breath-audio" src="media/breath.mp3" preload loop></audio>
					</div>
					<div class="single-speaker-wrapper">
						<img alt="" class="speaker-paused speaker-middle" src="media/speaker-paused.png"/>
						<img alt="" class="speaker-playing speaker-middle" src="media/speaker-playing.png"/>
						<h3 id="speaker-middle-caption">EAT</h3>
						<audio id="eat-audio" src="media/eat.mp3" preload loop></audio>
					</div>
					<div class="single-speaker-wrapper">
						<img alt="" class="speaker-paused speaker-right" src="media/speaker-paused.png"/>
						<img alt="" class="speaker-playing speaker-right" src="media/speaker-playing.png"/>
						<h3 id="speaker-right-caption">SLEEP</h3>
						<audio id="sleep-audio" src="media/sleep.mp3" preload loop></audio>
					</div>
				</div>
			</div>
			<img alt="" class="face" id="face-middle" src="media/face-middle.png"/>
			<div class="content-box" id="content-box-middle">
				<h1>FEED THE PLUG</h1>
				<img alt="" class="live-stream" id="mjpeg_dest" src="" />
				<div id="button-wrapper">
						<div class="buttons" id="treat-drop-button">FEED TREAT!</div>
					<a href="http://a.co/fbM3X6v" rel="noopener noreferrer" target="_blank">
						<div class="buttons" id="treat-donate-button">DONATE</div>
					</a>
					<audio id="treat-drop-audio" src="media/boxing-bell-sound.mp3" volume="0.8" onended="$('#treat-drop-audio').remove()" preload></audio>
				</div>
			</div>
			<img alt="" class="face" id="face-right" src="media/face-right.png"/>
			<div class="content-box" id="content-box-right">
				<a id="ig-link" href="https://www.instagram.com/plugthepug/">
					<img alt="" src="media/ig-custom.png"/>
				</a>
			</div>
			<p id="treat-notification">You dropped a treat! Watch to see if Plug comes to snatch it up. If not...quiet! He may be sleeping : )</p>
		</div>
</body>
</html>