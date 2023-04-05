function watchVideo() {
	const videoId = "3-XLVkDPpcQ";
	const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  
  
	const width = 860;
	const height = 515;
	const left = (window.innerWidth - width) / 2;
	const top = (window.innerHeight - height) / 2;
  
	// Open the popup window and load the YouTube video
	window.open(
	  videoUrl,
	  "video-popup",
	  `width=${width},height=${height},left=${left},top=${top}`
	);
  }
  
  
  const watchVideoButton = document.querySelector("#watch-video");
  watchVideoButton.addEventListener("click", watchVideo);
  
  function watchVideo2() {
	  const videoId2 = '69DrL8_zvYI'
	  const videoUrl2 = `https://www.youtube.com/embed/${videoId2}?autoplay=1&rel=0`;
	
	
	  const width2 = 760;
	  const height2 = 515;
	  const left2 = (window.innerWidth - width2) / 2;
	  const top2 = (window.innerHeight - height2) / 2;
	
	  window.open(
		videoUrl2,
		"video-popup",
		`width=${width2},height=${height2},left=${left2},top=${top2}`
	  );
	}
  
  const watchVideoButton_2 = document.querySelector("#watch-video2");
  watchVideoButton_2.addEventListener("click", watchVideo2);
  
  
