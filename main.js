import "./style.css";

// document.querySelector("#app").innerHTML = `
//   <h1>Vite app</h1>
// `;
var frameNumber = 0;
var playbackConst = 500;
var bodyHeight = document.getElementById("body");
var vid = document.getElementById("rose-video");

// dynamically set the page height according to video length
vid.addEventListener("loadedmetadata", function () {
  bodyHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

// Use requestAnimationFrame for smooth playback
function scrollPlay() {
  var frameNumber = window.pageYOffset / playbackConst;
  vid.currentTime = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);
