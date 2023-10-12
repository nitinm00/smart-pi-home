<!doctype html>

<html>

<head>
	
	<link rel="stylesheet" href="css/style.css">
	
</style>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"

  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="

  crossorigin="anonymous"></script>

<meta charset="utf-8">

<title>jank ass smart home type beat</title>

</head>
<h1 align="center">Light Switch</h1>

<body>
	<div id="lightsbtn"></div>
	<img id="fanbtn" src="css/images/ceiling-fan.png">
</body>

<script type="text/javascript">
	//var images = ["css/images/offbtn.svg", "css/images/onbtn.svg"]
	//var state = 0;
	// document.getElementById("lightsbtn").className = "lightsoff";
	var lights_are_off;
	var fan_is_off;
	$(document).ready(function() {
		init();
		$("#lightsbtn").click(function() {
			$.ajax({
				type: 'get',
				url: 'scripts/php/lighttoggle.php'
			}).done(function(data) {
				lights_are_off = (data == 1) ? true : false;
				changeImage()
				console.log("lights success")

			}).fail(function() {
				console.log("lights error")
			});

		});
		$("#fanbtn").click(function() {
			$.ajax({
				type: 'get',
				url: 'scripts/php/fantoggle.php'
			}).done(function(data) {
				fan_is_off = (data == 1) ? true : false;
				console.log("fan btn is " + fan_is_off)
				console.log("fan success")

			}).fail(function() {
				console.log("fan error")
			});
		});
	});
	function init() {
		$.ajax("init.php")
		.done(function(data) {
			lights_are_off = (data == 1) ? true : false;
			if (lights_are_off) {
				document.getElementById("lightsbtn").className = 'lightsoff'
				console.log('lights are off')
			} else {
				document.getElementById("lightsbtn").className = 'lightson'
				console.log('lights are on')
			}
			console.log("initialized")
			console.log(lights_are_off)
		}).fail(function() {
			console.log("error initializing")
		});
	}
	function changeImage() {
	console.log("changing img")
        if (lights_are_off) 
        {
		document.getElementById("lightsbtn").className = 'lightson';
		console.log("on")
        }
        else 
        {
		document.getElementById("lightsbtn").className = 'lightsoff';
		console.log("off")
        }
		
    }
</script>

</html>

