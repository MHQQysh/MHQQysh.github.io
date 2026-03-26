# MHQQysh Website Redesign

Date: 2026-03-25

## Goal

Refactor `MHQQysh.github.io` into a site that feels visually aligned with `PhiloCoffee.github.io` while preserving the personal portfolio structure and the site's existing page URLs.

The redesign should:

- adopt a lighter, editorial, reading-first visual style
- keep the core homepage information architecture from the existing site
- preserve real project content, media, and links
- replace leftover template filler pages with meaningful pages or graceful redirects
- reduce dependence on the old multi-library template stack in favor of a small shared CSS and JS layer

## Visual Direction

The new site should take inspiration from `PhiloCoffee.github.io` in these areas:

- warm light background with paper-like contrast
- strong serif display headings and quieter body typography
- generous spacing, framed cards, and restrained borders
- cleaner navigation and more modern detail-page layouts
- article-like reading flow for project detail pages

It should still remain a personal engineering portfolio rather than a club site.

## Content Architecture

### Homepage

Keep the current homepage structure, but redesign each section:

- Hero
- About
- Computer Projects
- Mechanical Projects
- Scientific Research
- Blogs / Writing
- Skills
- Timeline

### Page Types

Use a shared structure across the site with these page categories:

1. Home page
   - `index.html`

2. Project listing pages
   - `mechanical-projects.html`
   - `blog.html`

3. Project detail pages
   - `computerproject1.html`
   - `computerproject2.html`
   - `computerproject3.html`
   - `computerproject4.html`
   - `machanicalproject1.html`

4. Legacy compatibility pages
   - `service.html`
   - `protfolio-details.html`
   - `blog-details.html`

These legacy pages should no longer show generic template filler. They should either:

- redirect users toward real content, or
- act as clean compatibility pages that explain where the content now lives

## Content Preservation Rules

- Keep the personal identity content from the current site:
  - Shihong Yuan
  - Zhejiang University and UIUC 2027
  - contact info, avatar, profile imagery, GitHub, personal site
- Preserve real project descriptions, dates, media, and external links
- Preserve the scientific research entry and paper link
- Preserve the external blog destination `https://mhqqysh.cn`
- Keep current filenames where practical so old links still work

## Data Mapping

### Computer Projects

The homepage should present four cards:

- Front End / iGEM wiki project
- Back End / Java SSM management system
- Blog / Hugo PaperMod course-note site
- Crawling Data / Python project

Notes:

- `computerproject4.html` currently duplicates the blog project content even though the homepage labels it as data crawling.
- The redesign should keep the page URL but present it as a separate project card.
- Because the current dedicated content appears incomplete, this page can be presented as a concise project note that preserves the category and clearly marks it as a lightweight archive entry rather than inventing details.

### Mechanical Projects

The site currently surfaces two mechanical projects, but both route to the same detail page.

The redesign should:

- keep `mechanical-projects.html` as the overview page
- keep `machanicalproject1.html` as the main detail page
- present the mechanical work more honestly as one detailed case study plus one overview card if the source material for the second project is incomplete

### Blogs / Writing

The current homepage points writing readers to the external blog and says content is still being uploaded. The current `blog.html` and `blog-details.html` are template filler.

The redesign should convert this area into a meaningful writing hub:

- describe the writing direction of the site
- link visitors out to `https://mhqqysh.cn`
- avoid fake internal blog posts

## Shared Front-End System

Create a shared design layer with:

- `style.css`
- `script.js`

Responsibilities:

- sticky header
- mobile nav toggle
- section-aware scrolling behavior where appropriate
- reusable cards and media layouts
- subtle motion only where it adds clarity

The new pages should no longer depend on the old template-specific CSS and JS libraries unless a page still genuinely needs a legacy asset.

## Template Behavior

### Home Page

- split hero into text and profile/media
- keep contact information prominent
- present project sections with clear cards instead of heavy sliders
- make scientific research and timeline easier to scan

### Project Detail Pages

- use a two-column layout on desktop
- left column for metadata, role, skills, and reflection
- right column for screenshots and videos
- switch to a single-column reading layout on small screens

### Listing Pages

- use editorial section intros
- show project or writing cards in a clean grid
- keep the tone concise and credible

### Compatibility Pages

- explain that the site has been reorganized
- point users to the relevant current page
- keep the styling consistent with the new site

## Copy Strategy

The redesign should improve clarity and grammar where the current English copy is rough, while preserving the underlying meaning.

It should not:

- fabricate achievements
- add fictional blog entries
- add fictional collaborators or publications

## Validation

Before finishing, verify:

- all HTML pages render with the shared CSS and JS
- navigation works on desktop and mobile
- old URLs still resolve
- external links still work
- images and videos used in project detail pages still load
- the site remains readable and stable on smaller screens

## Implementation Order

1. Create the shared stylesheet and script.
2. Rebuild the homepage with preserved section structure.
3. Rebuild the real project detail pages.
4. Rebuild the mechanical listing and writing listing pages.
5. Convert legacy filler pages into compatibility pages.
6. Verify links and rendering.
