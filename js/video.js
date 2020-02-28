var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume")
	vol.innerHTML=(video.volume * 100 + "%");
	console.log("Play Video");
	console.log(video)
} 

function pauseVid() {	 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	var vid = document.getElementById("myVideo");
		if (vid.playbackRate > 0.06871947673600004){
			vid.playbackRate *= .8;
		}
		else{
			vid.playbackRate = 1.0;
		}
		if (video.ended == true){
			vid.playbackRate = 1.0;
		}
		console.log("Speed is " + (vid.playbackRate));
} 

function increaseSpeed() {
	var vid= document.getElementById("myVideo");
		if (vid.playbackRate < 14.551915228366852){
			vid.playbackRate *= 1.25;
		}
		else{
			vid.playbackRate = 1.0
		}
		if (video.ended == true){
			vid.playbackRate = 1.0;
		}
	console.log("Speed is "+ (vid.playbackRate));
} 

function skipAhead() {
	var vid2= document.getElementById("myVideo");
	vid2.currentTime += 60;
	if (video.ended == true){
		video.currentTime = 0;
		vid2.playbackRate = 1.0;
		video.play()
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
	if (video.muted){
		console.log("Changing to Unmuted");
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
		
	}
	else{
		video.muted = true;
		console.log("Changed to Muted");
		document.getElementById("mute").innerHTML = "Unmute";
	}
}

function changeVolume() {
	// var vid = document.getElementById('myVideo')
	var vol = document.getElementById('volumeSlider')
	video.volume = vol.value/100;
	console.log("Volume is " + vol.value);
	volume.innerHTML = vol.value + "%";
}
       
//https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_js_filter//
function gray() { 
	var gray = document.getElementById("myVideo");
	gray.classList.add("grayscale");
	// color_gray = document.body.style.filter('grayscale=1');
	console.log("In grayscale");
}

function color() {
	var gray = document.getElementById("myVideo");
	gray.classList.remove("grayscale");
	console.log("In color");
}
