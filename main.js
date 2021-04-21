import "./style.css";

var frameNumber = 0;
var playbackConst = 200;
var body = document.getElementsByTagName("body");
var vid = document.getElementById("rose-video");

vid.addEventListener("loadedmetadata", function () {
  body.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

function scrollPlay() {
  var frameNumber = window.pageYOffset / playbackConst;
  vid.currentTime = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);
