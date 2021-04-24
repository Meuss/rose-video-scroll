import "./style.css";

const media = document.querySelector("video");
media.pause();
media.currentTime = 0;
const pageHeight = document.body.offsetHeight - window.innerHeight;

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let scrollPercent = scrollTop / pageHeight;
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  let amount = ((media.duration / 100) * scrollPercentRounded).toFixed(1);
  media.currentTime = amount;
});
