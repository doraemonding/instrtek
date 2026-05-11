# InstrTek

InstrTek is a lightweight AI founder toolkit for validating internet AI business ideas, producing launch assets, and turning rough notes into practical outputs.

## Current Product Direction

The product should start as a public, free toolkit that attracts AI founders through useful single-purpose workflows. The near-term business goal is to learn which workflows repeat often enough to become paid workspace features.

Core workflows:

- Validate AI startup ideas and define the next experiments.
- Generate landing page copy for early product tests.
- Build customer personas and discovery questions.
- Create SEO briefs for acquisition content.
- Refine founder pitches.
- Provide general writing utilities such as paraphrasing, summarizing, and grammar checking.

## Tech Stack

- React 19
- Vite 8
- Serverless API route at `api/ai.js`
- Anthropic Messages API

## Local Setup

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Set `ANTHROPIC_API_KEY` in `.env.local`.

Run the frontend:

```bash
npm run dev
```

The Vite dev server runs the React app. The `api/ai.js` file is designed for a Vercel-style serverless runtime, so full local API testing should be done with a platform dev server such as `vercel dev` or by adding a local API proxy.

## Deployment Notes

Required environment variables:

- `ANTHROPIC_API_KEY`
- `ANTHROPIC_MODEL` optional, defaults to the model configured in `api/ai.js`

## Design Log

Design decisions are tracked in [DESIGN.md](./DESIGN.md). Update that file whenever the product positioning, user experience, or visual design changes.
