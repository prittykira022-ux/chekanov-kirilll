if ('IntersectionObserver' in window &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const revealMargin = 32;
  const firstViewportEnd = window.innerHeight + revealMargin;
  const offscreenBlocks = [...document.querySelectorAll('[data-scroll-reveal]')]
    .filter((block) => block.getBoundingClientRect().top >= firstViewportEnd);

  const scrollReveal = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;

      entry.target.classList.replace('scroll-reveal-pending', 'scroll-reveal-visible');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: `0px 0px ${revealMargin}px 0px` });

  for (const block of offscreenBlocks) {
    block.classList.add('scroll-reveal-pending');
    scrollReveal.observe(block);
  }
}

const galleryVideo = document.querySelector('video[data-autoplay-on-view]');
if (galleryVideo && 'IntersectionObserver' in window) {
  const videoObserver = new IntersectionObserver(([entry], observer) => {
    if (!entry.isIntersecting) return;

    observer.disconnect();
    galleryVideo.play().catch(() => {
      // The controls remain available if the browser blocks autoplay.
    });
  }, { rootMargin: '0px 0px 120px 0px' });

  videoObserver.observe(galleryVideo);
}
