
const videoPlayer = document.getElementById("video-player");
const switchBtn = document.getElementById("switch-btn");
const sources = [
  { src: "videos/1.mp4", id: "video-1" },
  { src: "videos/2.mp4", id: "video-2" },
  { src: "videos/3.mp4", id: "video-3" },
  { src: "videos/4.mp4", id: "video-4" },
  // add more sources as needed
];

let currentSourceIndex = 0;

switchBtn.addEventListener("click", switchVideo);
document.addEventListener("keydown", function(event) {
  if (event.key === " ") {
    event.preventDefault();
    switchVideo();
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    switchVideo();
  }
});

function switchVideo() {
  currentSourceIndex = (currentSourceIndex + 1) % sources.length;
  const newSource = sources[currentSourceIndex];
  videoPlayer.src = newSource.src;
  videoPlayer.id = newSource.id;
  videoPlayer.load();
  videoPlayer.play();
}