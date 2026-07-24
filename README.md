# AMOCO Agency — Independent Reference Site

A static, multi-page **promotional and informational** website built from the
original `index.html` design in `amocofcu.zip`, preserving its visual style and
structure.

> **Disclaimer:** This site is an **independent** advertising/informational
> reference. It references the "AMOCO" / "Amocofcu" brand for descriptive
> purposes only and is **not affiliated with, endorsed by, or an official
> partner of AMOCO Federal Credit Union**. For official products and services,
> visit [amocofcu.org](https://www.amocofcu.org).

## Structure

- `index.html` — landing page (hero, about, banking features, metrics,
  testimonials, working FAQ accordion, contact).
- Content pages: `save`, `spend`, `borrow`, `insure`, `invest`, `business`,
  `meet-amoco`, `careers`, `locations`, `contact`, `general-faqs`,
  `routing-number`, `fee-schedule`, `forms`, `disclosures`, `report-fraud`.
- `theme.css` — design system extracted from the original inline styles
  (imported by every page alongside `css2.css`).
- `script.js` — site interactions: FAQ accordion, sticky-navbar background on
  scroll, responsive mobile menu, smooth in-page anchors, and dynamic footer year.

Every page shares the same navbar (with links to the main product pages and a
mobile menu covering the full sitemap), a disclaimer banner, and a footer that
links to all pages.

## Running locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000/index.html
```
