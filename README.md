# Adapting for webflow

> Preview here:
> https://meuss.github.io/rose-video-scroll/

### Video element

The video html should be structured like this (replacing the url to the video):

```
<video id="rose-video" tabindex="0" autobuffer="autobuffer" preload="preload">
  <source type="video/mp4" src="URL_TO_VIDEO.mp4" />
</video>
```

This is the hardest part for you I guess, because the attributes have to be the same (id, tabindex, autobuffer, preload)

If you cannot do this, I can add them later by javascript on load event. But they should be somewhere in the Designer on the video element, maybe under _custom attributes_ or something like that.

Also, be sure that the video file size is not too huge...

### CSS

Add the css to the video element (via the Designer) - put it fixed, wherever you want:

```
#rose-video {
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 300px;
}
```

### Custom Code

Copy-paste this in the **Footer code**:

```
<script>
  // Script to play video on scroll
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
</script>
```
