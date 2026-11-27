(() => {
  const root = document.documentElement;
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  const themeKey = 'portfolio.theme';
  const languageKey = 'portfolio.language';

  function read(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // The current page can still use the selected preference.
    }
  }

  let chosenTheme = read(themeKey);
  let language = read(languageKey) === 'en' ? 'en' : 'ru';

  function applyTheme() {
    const dark = chosenTheme === 'dark' ||
      (chosenTheme !== 'light' && systemDark.matches);
    root.dataset.theme = dark ? 'dark' : 'light';

    for (const button of document.querySelectorAll('[data-theme-toggle]')) {
      button.setAttribute('aria-pressed', String(dark));
      button.querySelector('img').src = dark ? './assets/moon.svg' : './assets/about/sun.svg';
    }
  }

  // Apply before the stylesheet is painted, including on direct file URLs.
  applyTheme();
  systemDark.addEventListener('change', applyTheme);

  window.portfolioPreferences = {
    applyTheme,
    toggleTheme() {
      chosenTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      write(themeKey, chosenTheme);
      applyTheme();
    },
    get language() {
      return language;
    },
    set language(value) {
      language = value === 'en' ? 'en' : 'ru';
      write(languageKey, language);
    },
    restore() {
      chosenTheme = read(themeKey);
      language = read(languageKey) === 'en' ? 'en' : 'ru';
      applyTheme();
    }
  };
})();
