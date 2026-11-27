if (window.Foley && (window.AudioContext || window.webkitAudioContext)) {
  window.Foley.set({ theme: 'soft', volume: 0.22 });
  window.Foley.bind();

  const switchPlaybackTime = 120;
  let sectionNavigationPending = false;

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-foley-navigate]');
    if (!link || event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    if (sectionNavigationPending) return;
    sectionNavigationPending = true;

    // Let the short Switch cue play before the audio context is unloaded.
    window.setTimeout(() => window.location.assign(link.href), switchPlaybackTime);
  });

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) sectionNavigationPending = false;
  });
}
