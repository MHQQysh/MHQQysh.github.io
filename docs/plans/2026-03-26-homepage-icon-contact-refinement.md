# Homepage Icon And Contact Refinement

Date: 2026-03-26

## Goal

Refine the homepage hero so it feels closer to the provided academic-personal-site reference.

## Approved Changes

- keep a simple top navigation with:
  - 首页
  - 科研
  - 计算机项目
  - 机械项目
  - 生活
- remove the standalone “联系我” button from the header
- keep larger left/right page margins so the site feels less full-width at normal browser zoom
- keep the hero as:
  - left side text
  - right side personal photo

## Icon Row

The photo area should include a single row of icon links:

- GitHub
- Blog
- Research
- Zhihu
- Xiaohongshu

Links:

- Zhihu: `https://www.zhihu.com/people/qiangqiangwudi`
- Xiaohongshu: `https://www.xiaohongshu.com/user/profile/6497c3c3000000000b016f5c`

## Icon Behavior

- default: light chip background with dark icon
- hover: black background with white icon
- no persistent selected state

## Contact Lines

Below the icon row, add two horizontal info strips in the same visual language:

1. email icon + `shihong.23@intl.zju.edu.cn`
2. WeChat icon + `13613310122`

These strips should be readable and calm, not oversized buttons.

## Scope

Files expected to change:

- `index.html`
- `style.css`
- optionally `script.js` only if contact behavior needs support
