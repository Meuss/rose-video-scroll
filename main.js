import "./style.css";

var frameNumber = 0;
var playbackConst = 500;
var bodyHeight = document.getElementById("body");
var vid = document.getElementById("rose-video");

vid.addEventListener("loadedmetadata", function () {
  bodyHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

function scrollPlay() {
  var frameNumber = window.pageYOffset / playbackConst;
  vid.currentTime = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);
