(() => {
  const block = document.querySelector('[data-ui-concept]');
  if (!block) return;
  const track = block.querySelector('.ui-track');
  const slides = [...block.querySelectorAll('.ui-slide')];
  const dots = [...block.querySelectorAll('.ui-dot')];
  let active = 0;

  const show = (index) => {
    active = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${active * 100}%)`;
    dots.forEach((dot, dotIndex) => dot.classList.toggle('ui-dot-active', dotIndex === active));
  };

  block.querySelector('.ui-arrow-prev').addEventListener('click', () => show(active - 1));
  block.querySelector('.ui-arrow-next').addEventListener('click', () => show(active + 1));
  dots.forEach((dot, index) => dot.addEventListener('click', () => show(index)));
  block.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(active - 1);
    if (event.key === 'ArrowRight') show(active + 1);
  });
  block.tabIndex = 0;
  show(0);
})();
