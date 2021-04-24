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
</script>
```
