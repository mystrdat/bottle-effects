const callback = () => {
  console.info("document loaded");

  // Config
  const durationSwipe = 1800;

  // References
  const btnPlay = document.getElementById('play');

  // Animations
  const bottleSwipeLeft = anime({
    targets: '#bottles',
    translateX: '-375px',
    autoplay: false,
    duration: durationSwipe,
    easing: 'easeOutQuad'
  });

  // Controls
  btnPlay.addEventListener('click', () => {
    bottleSwipeLeft.restart();
  })
};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
