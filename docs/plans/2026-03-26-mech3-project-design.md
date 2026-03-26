# ME370 SPIDERMAN Project Page

Date: 2026-03-26

## Goal

Turn the contents of `mech3/` into a real third mechanical project in the portfolio.

The project should:

- appear as a new mechanical project card on the homepage
- appear as a new card on the mechanical overview page
- have its own dedicated detail page at `machanicalproject3.html`
- reuse the bilingual system already present in the rebuilt site

## Project Identity

Recommended project name:

- Chinese: `ME370 八足投递机器人（SPIDERMAN）`
- English: `ME370 Legged Delivery Robot (SPIDERMAN)`

This project is clearly more than a loose media dump:

- `Team48_P2D5.pdf` provides the formal design report
- `感想.docx` provides the personal reflection and contribution summary
- images and videos in `mech3/` provide media evidence

## Content Structure

### Entry Cards

The homepage and mechanical overview should each gain a third card.

That card should communicate:

- ME370 course project
- legged delivery robot
- integrated dispensing + walking system

### Detail Page

The detail page should use the same reading-oriented project template as the other rebuilt case-study pages.

Sections:

1. Hero
   - project name
   - course context
   - one-sentence summary

2. Sidebar metadata
   - date: December 2025
   - project type: course mechanical system design project
   - role: system integration, mechanism design, transmission optimization
   - key results:
     - average drop interval: 214.2 cm
     - average speed: 4.49 m/min
     - budget: $98.86
   - links to report PDF and key media

3. Project overview
   - summarize the robot as a legged package-dispensing platform

4. System structure
   - Klann linkage walking system
   - crank-slider dispensing module
   - drivetrain / housing / gear transmission integration

5. Personal contribution
   - integrated CAD modeling
   - gear-ratio optimization around the 2 m target
   - debugging and iterative adjustment of the dispensing mechanism

6. Challenges and iteration
   - dispensing instability / jamming
   - straight-line walking issues
   - repeated transmission-ratio iteration

7. Media section
   - selected images
   - selected videos
   - report linked as a downloadable / openable asset rather than embedded inline

8. Results summary card
   - 25.2 × 18 × 13.4 cm
   - 214.2 cm average drop interval
   - 200 cm target interval
   - 4.49 m/min average speed
   - $98.86 budget

## Bilingual Treatment

- Chinese should preserve the meaning of the original reflection while tightening the phrasing.
- English should read like a natural engineering case study, not a line-by-line literal translation.
- Keep short labels in `data-i18n-en`.
- Keep longer paragraphs directly in Chinese and swap to English through the bilingual text system already in place.

## Files to Change

- `index.html`
- `mechanical-projects.html`
- `machanicalproject3.html` (new)

Optional related-page updates are not required unless needed for navigation clarity.
