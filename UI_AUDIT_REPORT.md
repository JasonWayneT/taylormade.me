# UI Design Audit — Implementation Report
**Date:** 2026-06-28  
**Rubric:** Material Design 3 + 8pt Grid (7 Rules)  
**Scope:** Home page, Navigation, Footer, shared UI components

---

## Overview

6 of 7 rules have violations. Priority order below is based on visual impact and fix complexity.

---

## Fix 1 — Accent Overuse (Rule 5) · HIGH IMPACT

**Problem:** `primary` (#2a4dd7) appears in ~10 distinct contexts on the Home page. It should be reserved for 3 uses max: (1) primary CTA per screen, (2) active nav state, (3) one hero element.

**Current overuses to fix:**

| File | Line | Element | Current | Fix |
|---|---|---|---|---|
| `Home.jsx` | 10–11 | Hero eyebrow line + text | `bg-primary`, `text-primary` | Keep — this is the hero accent ✓ |
| `Home.jsx` | 21 | "Explore Projects" hero CTA | `bg-primary text-on-primary` | Keep — this is the primary CTA ✓ |
| `Navigation.jsx` | 27–28 | Active nav link | `text-primary border-b-2 border-primary` | Keep — this is the active state ✓ |
| `Navigation.jsx` | 37 | Nav "Get in Touch" CTA | `bg-primary text-on-primary` | Change to `bg-surface-container-high text-text-primary` (secondary button style) |
| `Home.jsx` | 72 | "Featured" badge | `bg-primary/10 text-primary` | Change to `bg-surface-container text-text-secondary` |
| `Home.jsx` | 78 | "View Case Study" text link | `text-primary` | Change to `text-text-primary` with `underline` on hover |
| `Home.jsx` | 96 | "Read Project Brief" text link | `text-primary` | Change to `text-text-primary` with `underline` on hover |
| `Home.jsx` | 132 | Applyr card CTA button | `bg-primary text-on-primary` | Change to `bg-surface-container-high text-text-primary border border-border-subtle` (secondary) |
| `Home.jsx` | 160 | KinBridge card CTA button | `bg-primary text-on-primary` | Change to `bg-surface-container-high text-text-primary border border-border-subtle` (secondary) |
| `Home.jsx` | 179 | Bottom "Get in Touch" CTA | `bg-primary text-on-primary` | Keep — this is the primary CTA for the CTA section ✓ |
| `Home.jsx` | 182 | "Download Work History" button | `bg-white border border-border-subtle text-text-primary` | Already correct ✓ |

**Rule:** One filled `bg-primary` button per screen section maximum. All other CTAs use outlined/secondary style.

---

## Fix 2 — Border + Shadow on Hover (Rule 3) · HIGH IMPACT · 1 line per card

**Problem:** All project cards have `border border-border-subtle hover:shadow-xl`. On hover, both border and shadow are active simultaneously. Borders = separation at same elevation; shadows = lift above canvas. Only one should apply at a time.

**Files to change:**

| File | Line | Current classes | Add |
|---|---|---|---|
| `Home.jsx` | 68 | `border border-border-subtle ... hover:shadow-xl` | Add `hover:border-transparent` |
| `Home.jsx` | 86 | `border border-border-subtle ... hover:shadow-xl` | Add `hover:border-transparent` |
| `Home.jsx` | 115 | `border border-border-subtle ... hover:shadow-2xl` | Add `hover:border-transparent` |
| `Home.jsx` | 142 | `border border-border-subtle ... hover:shadow-2xl` | Add `hover:border-transparent` |

**Change pattern:** Add `hover:border-transparent` to each card's className alongside the existing `hover:shadow-*` class.

---

## Fix 3 — Semantic Colors as Decoration (Rule 6) · MEDIUM IMPACT

**Problem:** Green and amber (semantic = success/warning) are used as category badge colors with no connection to system status.

**Changes in `Home.jsx`:**

| Line | Current | Fix |
|---|---|---|
| 71 | `bg-yellow-100 text-yellow-700` ("Data Integrity" badge) | `bg-surface-container text-text-secondary` |
| 91 | `bg-green-100 text-green-700` ("Migration" badge) | `bg-surface-container text-text-secondary` |
| 117 | `bg-green-500 text-white` ("Lab Project" floating badge) | `bg-surface-container-high text-text-primary` |
| 144 | `bg-blue-500 text-white` ("AI Platform" floating badge) | `bg-surface-container-high text-text-primary` |
| 153 | `bg-green-100 text-green-700` ("Social Impact" badge) | `bg-surface-container text-text-secondary` |

**Also update `CategoryBadge.jsx`:** Replace the `green`, `yellow`, `blue`, `purple` color map entries with neutral variants (gray/slate tones) so future badges can't accidentally use semantic colors.

```jsx
// CategoryBadge.jsx — replace colorMap with:
const colorMap = {
  neutral: 'bg-surface-container text-text-secondary border-outline-variant',
  emphasis: 'bg-surface-container-high text-text-primary border-outline-variant',
  brand:    'bg-primary/10 text-primary border-primary/20',
};
```

---

## Fix 4 — 8pt Grid Violations (Rule 2) · LOW EFFORT

**Problem:** Two spacing values that fall off the 4/8/12/16… grid.

| File | Line | Element | Current | Fix | Result |
|---|---|---|---|---|---|
| `Navigation.jsx` | 37 | Nav CTA button | `py-2.5` (10px) | `py-3` (12px) | 40px height — also fixes Rule 7 |
| `Home.jsx` | 117 | "Lab Project" badge | `py-1.5` (6px) | `py-2` (8px) | On grid |
| `Home.jsx` | 144 | "AI Platform" badge | `py-1.5` (6px) | `py-2` (8px) | On grid |

---

## Fix 5 — Touch Target Height (Rule 7) · LOW EFFORT (same fix as above)

**Problem:** Nav CTA button is ~37px computed height — below the 40px WCAG minimum.

**Fix:** Already covered by Fix 4 (`py-2.5` → `py-3` on `Navigation.jsx:37`).

---

## Fix 6 — Inconsistent Section Backgrounds (Rule 1) · LOW IMPACT

**Problem:** Two adjacent content sections use different Level 1 surface tokens.

| File | Line | Section | Current | Fix |
|---|---|---|---|---|
| `Home.jsx` | 60 | Enterprise Impact | `bg-surface-container-low` | Keep as-is — this intentional alternating is fine if consistent |
| `Home.jsx` | 107 | AI Lab | `bg-white` | Change to `bg-surface` to use the token instead of a raw value |

**Note:** Alternating `bg-surface` / `bg-surface-container-low` for section banding is acceptable and common. The issue is using raw `bg-white` instead of the `bg-surface` token. Change `bg-white` → `bg-surface` on `Home.jsx:107` so the token system stays clean.

---

## Implementation Order for Tomorrow

1. **Fix 4 + 5** first (2-minute change, unblocks everything else) — `Navigation.jsx:37` `py-2.5` → `py-3`
2. **Fix 3** — Badge colors in `Home.jsx` + refactor `CategoryBadge.jsx` colorMap
3. **Fix 2** — Add `hover:border-transparent` to all 4 cards in `Home.jsx`
4. **Fix 1** — Accent overuse (largest change, most files, requires visual QA after)
5. **Fix 6** — `bg-white` → `bg-surface` on AI Lab section (cosmetic)

---

## Files Touched

- `src/components/Navigation.jsx`
- `src/components/ui/CategoryBadge.jsx`
- `src/pages/Home.jsx`

No new files required. No config changes required.
