# MHQQysh Website Bilingual Layer

Date: 2026-03-25

## Goal

Add a complete Chinese / English switching system to the rebuilt portfolio without changing existing page URLs.

The bilingual layer should:

- follow browser language on first visit
- persist the user's manual language choice across pages
- provide a complete English version with natural portfolio-oriented copy
- lightly polish the Chinese version without changing its meaning
- preserve the static-site simplicity of the project

## Chosen Approach

Use a single-URL bilingual architecture.

Each page keeps its existing file path, and the page contains both Chinese and English content.

### Why this approach

- avoids duplicating the entire site into `/en/` and `/zh/`
- preserves all current links
- works well for a static GitHub Pages style site
- keeps long-form project reflections readable by switching whole content blocks rather than mixing languages inline

## Content Strategy

### Shared short text

Use `data-i18n-en` and `data-i18n-zh` for:

- navigation labels
- buttons
- footer labels
- section tags and short card labels

### Long-form content

Use paired language blocks for:

- homepage section intros
- project overview paragraphs
- project reflections
- compatibility-page explanations

Long-form content should switch in whole blocks instead of sentence-by-sentence translation.

## Language Selection Rules

1. On first visit:
   - if browser language starts with `zh`, default to Chinese
   - otherwise default to English

2. After manual switch:
   - store the preference in `localStorage`
   - reuse it on every page

3. No-JS fallback:
   - Chinese remains visible by default

## Metadata

Each page should store:

- English title
- Chinese title
- English description
- Chinese description

The language script should update:

- `document.documentElement.lang`
- `document.title`
- the page description meta tag

## UI

Add a compact `中文 / EN` switcher in the header on every page.

The switcher should:

- work on desktop and mobile
- clearly highlight the active language
- not disrupt the existing navigation layout

## Verification

Check:

- browser-language default behavior
- manual switching persistence across pages
- correct visibility of paired language blocks
- title and meta description updates
- no broken local references after HTML changes
