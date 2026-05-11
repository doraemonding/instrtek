# InstrTek Design Log

## 2026-05-11: AI Founder Toolkit Repositioning

### Goal

Reposition InstrTek from a generic free AI writing tools site into a focused toolkit for people building internet AI businesses.

### Product Decisions

- Lead with the sharper promise: "AI founder operating system."
- Expand the tool set from general writing utilities to startup workflows:
  - AI Idea Validator
  - Landing Page Copy
  - Customer Persona
  - SEO Brief
  - Pitch Refiner
  - AI Paraphraser
  - AI Summarizer
  - Grammar Checker
- Treat free tools as the acquisition layer and paid plans as future workspace features.
- Make repeated usage measurable through local output history before introducing accounts.

### UX Decisions

- Replace page-like marketing navigation with a compact app-style interface.
- Put the primary user action on the first screen: validate an idea.
- Add tool categories so the product can scale beyond a small list.
- Add example prompts to reduce blank-page friction.
- Add copy and export controls for generated output.
- Save recent outputs locally so the product feels more useful before authentication exists.
- Sync pages to URL hash routes so mobile users can refresh or share direct links to tools and pricing.

### Visual Decisions

- Move away from the previous dark editorial look toward a warmer, work-focused founder tool aesthetic.
- Use a restrained grid background and product preview instead of decorative floating effects.
- Keep cards to functional repeated items: tools, plans, roadmap blocks, and workspace panels.
- Use a mixed warm neutral base with green, orange, blue, purple, and yellow accents so the UI does not read as a single-hue theme.
- On mobile, reduce hero scale, hide the preview panel, and stack primary actions so the first viewport stays readable without horizontal overflow.
- On mobile, constrain the main content column to a safe 330px width, left-align it, and stack all grids into one column to avoid horizontal clipping across phone browsers.

### Business Hypothesis

If public AI founder workflows generate repeat usage, the paid product should focus on persistent projects, saved brand context, export formats, and team/client workflows rather than generic unlimited generations.
