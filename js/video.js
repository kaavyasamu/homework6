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
	vid.playbackRate -= 0.2;
  	console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
	var vid1= document.getElementById("myVideo");
	vid1.playbackRate +=1.25
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	var vid2= document.getElementById("myVideo");
	vid2.currentTime += 60;
	if (video.ended == true){
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
	color_gray = document.body.style.filter = "grayscale(100%)";
	console.log("In grayscale");
}

function color() {
	in_color = document.body.style.filter = "grayscale(0%)";
	console.log("In color");
}
