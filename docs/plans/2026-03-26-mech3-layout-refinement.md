# ME370 Project Page Refinement

Date: 2026-03-26

## Goal

Refine `machanicalproject3.html` so the project reads more like a polished portfolio case study.

## Approved Direction

- rename the page title to a more formal project name
- do not attempt to force a real browser zoom level like 75% on other users' machines
- instead, tighten the desktop layout so the page feels more compact and information-dense
- reorganize the project into repeated sections where:
  - left side = text explanation
  - right side = photo or video
- add a clear label or caption for each video

## Title

Recommended title:

- Chinese: `ME370 八足投递机器人系统`
- English: `ME370 Legged Delivery Robot System`

This is more formal and portfolio-friendly than using only the nickname.

## Layout

Create a reusable split-section pattern for this page:

- text panel on the left
- media panel on the right
- alternate sections can still keep the same left/right logic

Use this pattern for:

1. project overview
2. system structure
3. personal contribution
4. challenges and iteration
5. results summary

## Media

Each video should include:

- a short label
- a one-line explanation of what the viewer is seeing

The PDF remains a linked asset rather than an embedded inline document.

## Zoom Request

Browsers do not provide a reliable cross-device way for a website to force the user's actual browser zoom to 75%.

Instead, the implementation should:

- reduce the visual width of the content on desktop
- slightly tighten spacing and layout proportions
- produce the intended “smaller and more compact” feel without breaking responsiveness
