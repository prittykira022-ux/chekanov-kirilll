(() => {
  const preferences = window.portfolioPreferences;
  const english = new Map([
    ["Кирилл", "Kirill"],
    ["Кирилл Чеканов", "Kirill Chekanov"],
    ["Кирилл Чеканов — Product Designer", "Kirill Chekanov — Product Designer"],
    ["Обо мне — Кирилл Чеканов", "About — Kirill Chekanov"],
    ["Веб интерфейс для учета денег и управления — Кирилл Чеканов", "Financial management web app — Kirill Chekanov"],
    ["Разделы портфолио", "Portfolio sections"],
    ["работа", "work"],
    ["обо мне", "about"],
    ["Тёмная тема", "Dark theme"],
    ["проектирую цифровые продукты, в которых сложное становится понятным.", "I design digital products that make complex things easy to understand."],
    ["Открыт к работе", "Open to work"],
    ["Связаться", "Get in touch"],
    ["Контакты", "Contact"],
    ["Закрыть контакты", "Close contact details"],
    ["Опыт", "Experience"],
    ["Дек. 2024 — н.в.", "Dec. 2024 — present"],
    ["Янв. 2025 — Март 2026", "Jan. 2025 — Mar. 2026"],
    ["Авг. 2025 — Дек. 2025", "Aug. 2025 — Dec. 2025"],
    ["Март 2023 — Янв. 2024", "Mar. 2023 — Jan. 2024"],
    ["Открыть кейс Finly", "Open the Finly case study"],
    ["Веб интерфейс для учета денег и управления", "Financial management web app"],
    ["Веб интерфейс и моб. приложение для сервиса по поиску работы", "Web and mobile app for a job search platform"],
    ["UI Concept экран с балансом", "UI Concept balance screen"],
    ["UI Concept экран с графиком", "UI Concept chart screen"],
    ["UI Concept экран с контактами", "UI Concept contacts screen"],
    ["UI Concept экран кошелька", "UI Concept wallet screen"],
    ["Запись UI Concept", "UI Concept screen recording"],
    ["UI Concept экран потоков", "UI Concept cash flow screen"],
    ["UI Concept финальный экран", "UI Concept final screen"],
    ["Обо мне", "About me"],
    ["Продуктовый дизайнер с опытом около 3 лет в HR-tech, финтехе и цифровых продуктах. Проектирую интерфейсы для web и mobile на всех этапах: от исследования пользователей и определения задачи до прототипирования, тестирования и передачи решений в разработку.", "I'm a product designer with around three years of experience in HR tech, fintech, and digital products. I design web and mobile interfaces across the full process, from user research and problem definition to prototyping, testing, and developer handoff."],
    ["Работал над HR-платформой для соискателей и работодателей, CRM-системой для финансового учёта и развитием существующих цифровых продуктов. Создаю дизайн-системы, упрощаю сложные пользовательские сценарии и выстраиваю понятные интерфейсы для разных ролей.", "I've worked on an HR platform for job seekers and employers, a CRM for financial management, and improvements to existing digital products. I build design systems, simplify complex workflows, and design clear interfaces for different user roles."],
    ["Эффективно работаю с продуктовой, аналитической и технической командами: умею объяснять дизайн-решения, учитывать бизнес-цели и доводить задачи до реализации.", "I work closely with product, analytics, and engineering teams. I explain design decisions, account for business goals, and see work through to implementation."],
    ["Кирилл на берегу моря", "Kirill by the sea"],
    ["Кирилл с друзьями на фоне гор", "Kirill and friends in front of the mountains"],
    ["Кирилл в каске и спасательном жилете", "Kirill in a helmet and life jacket"],
    ["Кирилл на пляже", "Kirill on the beach"],
    ["Опыт работы", "Work experience"],
    ["Разрабатывал CRM-систему для менеджеров, бухгалтеров и руководителей. Отвечал за полный цикл дизайна: исследование задач пользователей, проектирование сценариев, создание интерфейсов и развитие дизайн-системы.", "I designed a CRM for managers, accountants, and executives. I owned the full design process, from researching user needs and mapping workflows to designing interfaces and evolving the design system."],
    ["Создал дизайн-систему для сложных таблиц, форм и дашбордов.", "Built a design system for complex tables, forms, and dashboards."],
    ["Спроектировал ключевые CRM-сценарии для разных ролей пользователей.", "Designed core CRM workflows for different user roles."],
    ["Проводил usability-тестирования и улучшал интерфейсы перед релизом.", "Ran usability tests and refined interfaces before release."],
    ["Развивал HR-платформу для соискателей и работодателей. Проектировал и обновлял пользовательские сценарии, поддерживал дизайн-систему и готовил решения к передаче в разработку.", "I helped develop an HR platform for job seekers and employers. I designed and updated user flows, maintained the design system, and prepared designs for developer handoff."],
    ["Расширил дизайн-систему и внедрил переиспользуемые компоненты.", "Expanded the design system and introduced reusable components."],
    ["Переработал ключевые экраны и улучшил согласованность интерфейса.", "Redesigned key screens and improved consistency across the interface."],
    ["Использовал прототипы и структурированные презентации для согласования решений со стейкхолдерами.", "Used prototypes and structured presentations to align stakeholders on design decisions."],
    ["Создавал интерфейсы и визуальные решения для web- и mobile-продуктов, учитывая задачи пользователей и требования бизнеса.", "I designed interfaces and visuals for web and mobile products, balancing user needs with business requirements."],
    ["Проектировал страницы и пользовательские сценарии.", "Designed pages and user flows."],
    ["Работал над визуальной системой и единообразием интерфейсов.", "Worked on the visual system and interface consistency."],
    ["Готовил макеты и прототипы для передачи в разработку.", "Prepared designs and prototypes for developer handoff."],
    ["Готов к сотрудничеству над новыми проектами или просто рад встрече — не стесняйтесь обращаться!", "I'm open to collaborating on new projects or just meeting new people. Feel free to get in touch!"],
    ["Назад", "Back"],
    ["CRM-система, ориентированная на финансовый учет для менеджеров, бухгалтеров и руководителей.", "A CRM for managers, accountants, and executives to track and manage finances."],
    ["Главный экран Finly", "Finly main screen"],
    ["Проблема", "Problem"],
    ["Многие компании ведут финансовую отчетность в Excel или с помощью разных сервисов, что приводит к путанице и затрудняет принятие решений.", "Many companies manage financial reporting in Excel or across several services. This creates confusion and makes decisions harder."],
    ["Гипотеза", "Hypothesis"],
    ["Мы предположили, что если объединить ключевые финансовые операции и аналитику в одном интерфейсе, а данные представить через понятные таблицы, статусы и визуализации, пользователи смогут быстрее контролировать состояние бизнеса и принимать решения без необходимости собирать информацию вручную из нескольких источников.", "We hypothesized that bringing core financial operations and analytics into one interface, with clear tables, statuses, and visualizations, would help users monitor the business and make decisions faster without manually gathering data from several sources."],
    ["Решение", "Solution"],
    ["Чтобы упростить работу с финансовыми данными, я спроектировал систему вокруг основных ежедневных сценариев пользователя, а не вокруг бухгалтерской терминологии.", "To simplify working with financial data, I built the system around everyday workflows instead of accounting terminology."],
    ["Ключевым решением стало объединение финансовых операций, проектов и аналитики в одном интерфейсе.", "The key design decision was to bring financial operations, projects, and analytics together in a single interface."],
    ["Вместо работы с несколькими таблицами и сервисами пользователь получает единое пространство.", "Users get one workspace in place of separate spreadsheets and services."],
    ["Наверх", "Back to top"],
    ["Предыдущий экран", "Previous screen"],
    ["Следующий экран", "Next screen"]
  ]);

  for (let screen = 1; screen <= 8; screen++) {
    english.set("Экран " + screen, "Screen " + screen);
    english.set("Экран Finly " + screen, "Finly screen " + screen);
  }

  // Keep the HTML as the Russian source so it remains readable without JavaScript.
  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script, style, [data-lang-toggle]')) continue;

    const original = node.nodeValue;
    const translated = english.get(original.trim());
    if (translated) textNodes.push({ node, original, translated: original.replace(original.trim(), translated) });
  }

  const attributes = [];
  for (const element of document.querySelectorAll('[alt], [aria-label], [title]')) {
    for (const attribute of ['alt', 'aria-label', 'title']) {
      const original = element.getAttribute(attribute);
      const translated = english.get(original);
      if (translated) attributes.push({ element, attribute, original, translated });
    }
  }

  const originalTitle = document.title;
  const languageButtons = document.querySelectorAll('[data-lang-toggle]');

  function applyLanguage() {
    const language = preferences.language;
    const isEnglish = language === 'en';
    document.documentElement.lang = language;
    document.title = isEnglish ? english.get(originalTitle) ?? originalTitle : originalTitle;

    for (const { node, original, translated } of textNodes) {
      node.nodeValue = isEnglish ? translated : original;
    }
    for (const { element, attribute, original, translated } of attributes) {
      element.setAttribute(attribute, isEnglish ? translated : original);
    }
    for (const button of languageButtons) {
      const label = isEnglish ? 'Switch language to Russian' : 'Переключить язык на английский';
      button.textContent = isEnglish ? 'En' : 'Ru';
      button.setAttribute('aria-label', label);
      button.title = label;
    }
  }

  for (const button of languageButtons) {
    button.addEventListener('click', () => {
      preferences.language = preferences.language === 'en' ? 'ru' : 'en';
      applyLanguage();
    });
  }
  for (const button of document.querySelectorAll('[data-theme-toggle]')) {
    button.addEventListener('click', preferences.toggleTheme);
  }

  preferences.applyTheme();
  applyLanguage();
  window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return;

    preferences.restore();
    applyLanguage();
  });
})();
