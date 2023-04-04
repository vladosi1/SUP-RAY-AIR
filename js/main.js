function watchVideo(videoId, width = 860, height = 515) {
	const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
 
	const left = (window.innerWidth - width) / 2;
	const top = (window.innerHeight - height) / 2;
 
	// Open the popup window and load the YouTube video
	window.open(
	  videoUrl,
	  "video-popup",
	  `width=${width},height=${height},left=${left},top=${top}`
	);
 }
 
 const watchVideoButton = document.getElementById("watch-video");
 watchVideoButton.addEventListener("click", function() {
	watchVideo("3-XLVkDPpcQ&ab",760);
 });
 
 const watchVideoButton2 = document.getElementById("watch-video2");
 watchVideoButton2.addEventListener("click", function() {
	watchVideo("69DrL8_zvYI", 760);
 });
 