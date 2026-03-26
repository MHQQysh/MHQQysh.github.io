document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  const page = document.body.dataset.page;
  const languageButtons = document.querySelectorAll("[data-lang-option]");
  const body = document.body;
  const metaDescription = document.querySelector('meta[name="description"]');
  const languageStorageKey = "mhqqysh-site-language";

  const updateHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  const getInitialLanguage = () => {
    const saved = localStorage.getItem(languageStorageKey);
    if (saved === "zh" || saved === "en") return saved;
    const navLang = navigator.language || "";
    return navLang.toLowerCase().startsWith("zh") ? "zh" : "en";
  };

  const applyLanguage = (language) => {
    const fallbackTitle = document.title;
    const title = language === "zh" ? body.dataset.titleZh : body.dataset.titleEn;
    const description = language === "zh" ? body.dataset.descriptionZh : body.dataset.descriptionEn;

    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    body.dataset.language = language;

    document.querySelectorAll("[data-i18n-en], [data-i18n-zh]").forEach((node) => {
      if (!node.dataset.i18nDefault) {
        node.dataset.i18nDefault = node.textContent;
      }

      if (language === "en" && node.dataset.i18nEn) {
        node.textContent = node.dataset.i18nEn;
        return;
      }

      if (language === "zh") {
        node.textContent = node.dataset.i18nZh || node.dataset.i18nDefault;
      }
    });

    document.querySelectorAll("[data-lang-page]").forEach((node) => {
      node.classList.toggle("is-active", node.dataset.langPage === language);
    });

    languageButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.langOption === language);
    });

    if (title) {
      document.title = title;
    } else {
      document.title = fallbackTitle;
    }

    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    }

    localStorage.setItem(languageStorageKey, language);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[data-page-link]").forEach((link) => {
    link.classList.toggle("is-current", link.dataset.pageLink === page);
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.langOption);
    });
  });

  document.querySelectorAll("[data-copy-text]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      const text = button.dataset.copyText;
      const label = body.dataset.language === "en"
        ? button.dataset.copyLabelEn || `Copied: ${text}`
        : button.dataset.copyLabelZh || `已复制：${text}`;

      try {
        await navigator.clipboard.writeText(text);
        window.alert(label);
      } catch (_error) {
        window.alert(label);
      }
    });
  });

  applyLanguage(getInitialLanguage());
});
