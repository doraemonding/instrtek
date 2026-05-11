# InstrTek Design Log

## 2026-05-11: Manufacturing AI Quality & Test Copilot Pivot

### Goal

Reposition the website from a broad AI founder toolkit into a focused B2B lead-generation website for manufacturing quality and test engineering teams.

### Product Decisions

- Use the primary positioning: "Manufacturing AI Quality & Test Copilot / 制造业 AI 质量与测试工程助手."
- Focus the first version on trust, clarity, and lead capture rather than live AI processing.
- Present three core solutions:
  - AI Test Document Comparison
  - AI Quality Report & 8D Assistant
  - Manufacturing Knowledge Base Agent
- Use simulated demo data only. Do not process real customer documents in the first version.
- Preserve future product expansion paths: document comparison demo, quality report generation, knowledge base, and local deployment.

### UX Decisions

- Convert the site into a single-page B2B landing page with anchor navigation.
- Implement the required navigation sections: 首页, 解决方案, 应用场景, Demo案例, 技术架构, 服务模式, 资源中心, 联系我们.
- Add a mobile collapsible menu for phone access.
- Make CTA buttons scroll to the contact form.
- Add a mock contact form with simulated submission feedback.
- Keep all first-version content static and safe for public display.

### Language Decision

- The public website interface is English-only to support international manufacturing, automation, medical device, electronics, and precision manufacturing customers.
- Chinese content remains only in internal planning documentation where useful; no Chinese strings should appear in `src/` or `index.html`.

### Compliance Copy Decision

- Public-facing copy should avoid absolute claims, autonomous decision claims, security guarantees, and sensitive or overly broad regulatory language.
- Use conservative wording such as "AI-assisted", "draft", "review", "assessment", "option", and "engineer confirmation" instead of implying unsupervised automated conclusions.
- Avoid public UI terms such as "generated", "AI Agent", "risk report", "guarantee", "secure", "protect", and "automatically" unless reviewed for context.

### Contact Decision

- Public company contact email is `service@instrtek.com`.
- The current contact form is a simulated frontend form and should not imply that email is sent until a real backend or form service is connected.

### Visual Decisions

- Move from warm founder-tool styling to a cleaner industrial B2B style.
- Use deep blue, blue-gray, cyan, white, and light gray as the core palette.
- Use dashboard, report table, architecture flow, and service cards to signal engineering credibility.
- Keep layouts restrained and professional, avoiding decorative or consumer-AI styling.
- Use the official InstrTek logo from `instrtek 公司logo设计-1.pdf` as the primary website brand mark.
- Raise the homepage toward a premium enterprise AI style: concise hero claim, strong navigation CTA, glassy console preview, platform signal band, and private-deployment trust messaging.
- Use transparent PNG exports for the logo and favicon so the mark sits directly on the blue-gray interface without a visible white source background.

### Business Hypothesis

Manufacturing customers are more likely to engage if the website clearly shows a narrow, credible workflow: document extraction, specification comparison, quality report generation, and private engineering knowledge base deployment.

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
