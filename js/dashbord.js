function toggleVideo(videoId) {
    const videoOverlay = document.getElementById("videoOverlay");
    const videoFrame = document.getElementById("videoFrame");
  
    // Set the appropriate video URL based on videoId
    let videoURL = "";
    if (videoId === "video1") {
      videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    } else if (videoId === "video2") {
      videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    } else if (videoId === "video3") {
      videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    }
  
    // Set the iframe src to the selected video URL
    videoFrame.src = videoURL + "?autoplay=1";
  
    // Show the video overlay
    videoOverlay.style.display = "flex";
  }
  
  function closeVideo() {
    const videoOverlay = document.getElementById("videoOverlay");
    const videoFrame = document.getElementById("videoFrame");
  
    // Hide the video overlay
    videoOverlay.style.display = "none";
  
    // Stop the video playback by clearing the iframe src
    videoFrame.src = "";
  }
  