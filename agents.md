# agents.md — Engineering Standards for media-portfolio

> This file defines the non-negotiable engineering principles, workflows, and standards for this project.
> All contributors (human or AI agent) must follow these guidelines strictly.

---

## 📐 Architecture

### Folder Structure (Feature-based)

```
src/
├── assets/                  # Static assets (images, fonts, icons)
├── components/              # Shared/reusable UI components
│   └── Button/
│       ├── Button.tsx
│       ├── Button.test.tsx
│       ├── Button.types.ts
│       └── index.ts
├── features/                # Feature-based modules
│   ├── hero/
│   ├── stats/
│   ├── videos/
│   ├── sponsorship/
│   └── contact/
├── hooks/                   # Global custom hooks
├── constants/               # App-wide constants and config
├── types/                   # Global TypeScript types/interfaces
├── utils/                   # Pure utility functions
├── styles/                  # Global styles, Tailwind base
├── test/                    # Test setup, mocks, utilities
│   ├── setup.ts
│   └── utils.tsx            # Custom render wrappers
├── App.tsx
└── main.tsx
```

### Feature Module Structure

Each feature folder must follow this structure:

```
features/stats/
├── components/              # Feature-specific components
├── types.ts                 # Feature-specific types
├── constants.ts             # Feature-specific constants, only when needed
├── hooks/                   # Feature-specific hooks, only when needed
├── utils.ts                 # Feature-specific utils, only when needed
└── index.ts                 # Barrel export
```

---

## 🏗️ Software Engineering Principles

### SOLID

- **S** — Every component/function has one responsibility
- **O** — Components open for extension via props, closed for modification
- **L** — Child components must be substitutable for parent abstractions
- **I** — Props interfaces should be minimal and specific
- **D** — Depend on abstractions (interfaces/types), not concrete implementations

### General Principles

- **DRY** — No duplicated logic. Extract to hooks or utils immediately
- **KISS** — Prefer simple, readable code over clever code
- **YAGNI** — Do not build features that are not currently needed
- **Separation of Concerns** — Logic in hooks, presentation in components, data in constants

---

## 🔷 TypeScript Standards

```json
// tsconfig.json compilerOptions
{
  "strict": true,
  "noImplicitAny": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noImplicitReturns": true,
  "exactOptionalPropertyTypes": true
}
```

- ❌ `any` is **never** allowed — use `unknown` and narrow types
- ❌ No inline types in component files — define in `types.ts`
- ✅ Prefer `interface` for component props, `type` for unions/primitives
- ✅ All function parameters and return types must be explicitly typed
- ✅ Use `readonly` for data that should not be mutated

---

## 🧪 Testing — Test Driven Development (TDD)

### Philosophy

Write the test **before** the implementation. Red → Green → Refactor.

### Test Stack

- **Vitest** — Test runner (fast, Vite-native)
- **React Testing Library** — Component testing
- **MSW (Mock Service Worker)** — API mocking
- **@testing-library/user-event** — Realistic user interactions

### V-Model Testing Layers

```
Requirements ←————————————→ Acceptance Tests (E2E)
  System Design ←——————————→ Integration Tests
    Component Design ←———————→ Component Tests
      Implementation ←—————————→ Unit Tests
```

| Layer       | Tool         | Location                 | Coverage Target |
| ----------- | ------------ | ------------------------ | --------------- |
| Unit        | Vitest       | `*.test.ts`              | 80%+            |
| Component   | RTL + Vitest | `*.test.tsx`             | 80%+            |
| Integration | RTL + Vitest | `*.integration.test.tsx` | Key flows       |
| E2E         | Playwright   | `e2e/`                   | Critical paths  |

### Test File Naming

```
Button.test.tsx          # Component test
useAnimatedCounter.test.ts  # Hook test
formatNumber.test.ts     # Util test
contact.integration.test.tsx  # Integration test
homepage.spec.ts         # E2E test (Playwright)
```

### Test Structure (AAA Pattern)

```typescript
describe('ComponentName', () => {
  describe('when [condition]', () => {
    it('should [expected behavior]', () => {
      // Arrange
      const props = { ... }

      // Act
      render(<Component {...props} />)

      // Assert
      expect(screen.getByRole('button')).toBeInTheDocument()
    })
  })
})
```

### Rules

- ✅ Every custom hook must have unit tests
- ✅ Every utility function must have unit tests
- ✅ Every component must have at minimum a smoke test
- ✅ Interactive components must test user interactions
- ✅ Accessibility must be tested (axe-core via jest-axe)
- ❌ No `it.only` or `describe.only` in committed code
- ❌ No skipped tests without a linked issue comment
- ✅ E2E tests must never hardcode copy — always import from constants

---

## 🔄 Git Workflow

### Branching Strategy (GitHub Flow)

```
main                    # Production — always deployable
└── feature/hero-section
└── feature/stats-animation
└── fix/contact-button-mobile
└── chore/update-dependencies
```

- **main** is protected — no direct pushes
- All changes go through Pull Requests
- PRs require passing CI before merge

### Conventional Commits

```
feat(stats): add animated counter hook
fix(hero): correct CTA button alignment on mobile
chore(deps): update tailwind to v4
test(contact): add unit tests for email validation
docs(readme): update local setup instructions
refactor(videos): extract VideoCard into shared component
```

Format: `type(scope): description`

Types: `feat` | `fix` | `chore` | `test` | `docs` | `refactor` | `perf` | `style`

### Commit Rules (enforced via Husky + commitlint)

- ❌ No commits directly to `main`
- ❌ No commits with failing tests
- ❌ No commits with ESLint errors
- ✅ Every commit must be atomic (one logical change)

---

## 🚀 CI/CD Pipeline (GitHub Actions)

### Pipeline Stages (V-Model aligned)

```
Push to branch
    ↓
┌─────────────────────────────┐
│  1. LINT & FORMAT           │  ESLint + Prettier check
│  2. TYPE CHECK              │  tsc --noEmit
│  3. UNIT TESTS              │  Vitest (coverage report)
│  4. COMPONENT TESTS         │  Vitest + RTL
│  5. BUILD                   │  Vite build
│  6. E2E TESTS               │  Playwright (on PR only)
└─────────────────────────────┘
    ↓ (only on merge to main)
┌─────────────────────────────┐
│  7. BUILD DOCKER IMAGE      │  Build & tag image
│  8. PUSH TO GHCR            │  Push to GitHub Container Registry
│  9. DEPLOY TO SERVER        │  SSH → docker compose pull & up
│  10. HEALTH CHECK           │  Verify deployment succeeded
└─────────────────────────────┘
```

### Quality Gates — PR cannot merge if:

- ❌ Any test fails
- ❌ TypeScript errors exist
- ❌ ESLint errors exist
- ❌ Code coverage drops below 80%
- ❌ Build fails

---

## 🐳 Docker

```dockerfile
# Multi-stage build — production image must be minimal
FROM node:20-alpine AS builder
# ... build stage

FROM nginx:alpine AS production
# ... only serve static files
```

- ✅ Multi-stage builds (builder + production)
- ✅ Non-root user in production container
- ✅ `.dockerignore` must exclude node_modules, .env, test files
- ✅ Image must be under 50MB

---

## 🎨 Code Style

### ESLint Rules (non-negotiable)

```json
{
  "rules": {
    "no-console": "error",
    "no-debugger": "error",
    "react/prop-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "import/order": "error"
  }
}
```

### Prettier Config

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

---

## ♿ Accessibility (a11y)

- ✅ All images must have descriptive `alt` text
- ✅ All interactive elements must be keyboard navigable
- ✅ Color contrast must meet WCAG AA (4.5:1 ratio)
- ✅ Semantic HTML — use `<section>`, `<nav>`, `<main>`, `<header>`, `<footer>`
- ✅ ARIA labels on all icon-only buttons
- ✅ Axe-core accessibility tests in component test suite

---

## ⚡ Performance

- ✅ Lazy load all feature sections below the fold (`React.lazy + Suspense`)
- ✅ Images must use modern formats (WebP) with fallback
- ✅ No layout shift (CLS) — always define image dimensions
- ✅ Lighthouse score target: **90+** on all metrics
- ✅ Bundle size monitored — alert if main bundle exceeds 200kb gzipped

---

## 🔐 Security

- ✅ No secrets or API keys in code — use `.env` + GitHub Secrets
- ✅ Dependencies audited weekly (`npm audit`)
- ✅ Content Security Policy headers via Nginx
- ✅ HTTPS only — HTTP redirects to HTTPS
- ✅ Dependabot enabled on GitHub

---

## 🎨 UI/UX & Marketing Principles

> The site has one job: turn a visiting sponsor into a paying sponsor.
> Every design decision must serve that goal.

### The Hierarchy of Attention

Every page/section must follow this order:

1. **Hook** — Grab attention in under 3 seconds (headline, visual impact)
2. **Value** — Answer "what's in it for me?" immediately
3. **Proof** — Back it up (subscriber count, Discord size, video views)
4. **Action** — One clear CTA, never compete with itself

### Conversion Principles

- ✅ **One primary CTA per section** — never give the user two equal choices
- ✅ **CTA is always visible** — sticky navbar with "Contact for Sponsorship" button at all times
- ✅ **Friction kills conversion** — contact must be one click, never a form with 5 fields
- ✅ **Social proof everywhere** — numbers (10 000 Discord members, X subscribers) build trust instantly
- ✅ **Above the fold matters most** — the hero must communicate who Roem is and what sponsors get before any scrolling

### Visual Hierarchy

- ✅ **F-pattern and Z-pattern reading** — place key info along natural eye movement paths
- ✅ **Contrast drives action** — the CTA button must have the highest contrast on the page
- ✅ **Whitespace is not wasted space** — breathing room makes content feel premium
- ✅ **Font size signals importance** — never more than 3 font sizes in one section
- ✅ **Color has one job per hue** — one accent color for CTAs only, never reused decoratively

### Typography

- Max **2 typefaces** — one for headings (personality), one for body (readability)
- Body text minimum **16px**, line height **1.5–1.7**
- Headings must be **scannable** — a sponsor should understand the page by reading headings only
- Never use light grey text on white — WCAG AA contrast minimum at all times

### Spacing System

- Use a strict **8px base grid** — all spacing values must be multiples of 8 (8, 16, 24, 32, 48, 64...)
- Consistent spacing signals professionalism — sponsors notice inconsistency subconsciously

### Mobile First

- ✅ Design for mobile, enhance for desktop — not the other way around
- ✅ Touch targets minimum **44x44px**
- ✅ CTA button must be full-width on mobile
- ✅ No horizontal scrolling ever

### Psychology Principles

- **Scarcity** — "Limited sponsorship slots available" creates urgency
- **Social proof** — community size, view counts, and testimonials reduce risk for sponsors
- **Authority** — clean, professional design signals credibility before a single word is read
- **Reciprocity** — give value first (free content, insights) before asking for anything
- **Anchoring** — show the biggest number first (total views, not per-video average)

### Content Principles

- **Headlines sell, body text tells** — if the headline doesn't hook, the body won't be read
- **Specificity builds trust** — "10 247 Discord members" beats "10 000+" every time
- **Active voice only** — "I help brands reach X audience" not "brands are helped by..."
- **Cut ruthlessly** — if a sentence doesn't serve the conversion goal, delete it
- **Benefits over features** — sponsors don't care about video length, they care about audience reach

### Performance as UX

- ✅ Every 100ms of load time reduces conversion — performance IS design
- ✅ No layout shift on load — sponsors bouncing due to slow load is a lost deal
- ✅ Animations must enhance, never distract — max 300ms transition duration
- ✅ If an animation doesn't guide the user's attention toward a CTA, remove it

---

## 📋 Definition of Done

A task is **done** only when:

- [ ] Feature is implemented
- [ ] Unit tests written and passing
- [ ] Component tests written and passing
- [ ] TypeScript strict — no errors
- [ ] ESLint — no errors or warnings
- [ ] Accessible (keyboard nav + ARIA)
- [ ] Responsive (mobile, tablet, desktop)
- [ ] PR reviewed and approved
- [ ] CI pipeline green
- [ ] Deployed and verified on production

---

> "Make it work, make it right, make it fast — in that order."
