***
# PRD: AI Product Portfolio Website (React + Vercel)

## 1\. Objective

Create a personal portfolio website that showcases AI-powered applications and product work, optimized for hiring managers and recruiters viewing primarily on desktop but fully responsive across devices. The experience should be clean, high-credibility, and minimally distracting, with a “Premium Tech” visual identity that allows the content (apps, case studies, and outcomes) to take center stage.

---

## 2\. Target Audience & Use Cases

### 2.1 Primary Audience

* Hiring managers, product leaders, and founders evaluating product sense, execution, and technical depth.

* Recruiters quickly scanning for relevance, clarity, and impact.

### 2.2 Primary Use Cases

* Quickly understand who you are, what you build, and your focus on AI products (Home / Hero).

* Skim a set of representative AI apps and product initiatives (Projects / Work).

* Deep-dive into selected case studies that explain problem, approach, execution, and outcomes.

* Take a clear next step (contact, LinkedIn, email, or calendar link).

---

## 3\. Scope & Key Features

### 3.1 Pages & Structure

**Home**

* Hero with name, role (e.g., “Product Manager - AI & Developer Tools”), and primary CTA.

* Very short “Who I am” blurb and one or two positioning statements.

* Highlighted “Selected Work” teaser linking into project details.

**Projects / Work**

* Grid or list of projects (AI apps, tools, experiments, and notable product initiatives).

* Each item includes title, one-line positioning, key tech/AI elements, and link to details or external demo.

* Simple filters or tags (e.g., “LLM Apps”, “Internal Tools”, “Experiments”) are nice-to-have, not required for V1.

**Project Detail / Case Study**

* Structured narrative:

  * Context & Problem

  * Role & Constraints

  * Solution & AI Approach (model, UX, prompt strategy, etc.)

  * Outcome (metrics, learnings, tradeoffs)

* Links to live demo, GitHub, or screenshots.

* Optional “snapshot” panel (Role, Timeline, Team, Tools).

**About**

* Short story: background, focus, how you think about AI products.

* Links to resume, LinkedIn, and other relevant profiles.

**Contact**

* Simple, low-friction CTAs (email link, LinkedIn, optional contact form).

* Clear “Hire Me” or “Let’s talk” CTA surfaced in nav and key pages.

### 3.2 Global Features

* Top navigation:

  * Simple nav (Home, Work, About, Contact).

  * Persistent primary CTA (e.g., “Contact” or “Hire Me”).

* Footer:

  * Basic info: copyright, email, LinkedIn, GitHub, optional attribution.

* Responsive design for desktop, tablet, and mobile.

---

## 4\. Non-Goals (Out of Scope for V1)

* Blog engine or long-form content platform.

* Dark mode toggle.

* CMS integration (e.g., Contentful, Sanity).

* Complex animation frameworks or 3D interactions.

* Multi-language localization.

---

## 5\. Visual Identity & Design System

The portfolio will utilize a High-Contrast Minimalist aesthetic. The goal is a **Premium** Tech feel where the interface recedes to allow project work to take center stage, using a vibrant blue as the sole driver for user action.

### 5.1 Color Palette (Semantic Layer)

Colors are defined by their semantic role in the UI for scalability and maintenance.

**Semantic Colors**

**Usage Constraints**

* 60-30-10 rule:

  * 60% Surface-Primary

  * 30% Content (typography)

  * 10% Action-Primary

* Accessibility:

  * All text-on-background combinations must meet WCAG 2.1 AA.

  * Use Content-Primary on Surface-Primary/Secondary for important headings and key content.

---

### 5.2 Typography & Hierarchy

Typography must be neutral, highly legible, and feel like a modern product UI, especially for AI app case studies.

**Primary Font System**

* Primary Sans: Inter (preferred) with robust system fallbacks.

* Optional Monospace: JetBrains Mono or Source Code Pro for prompts, code samples, and KPI callouts (used sparingly).

**Font Stacks**

```css
:root {
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont,
    "Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}
```

**Type Levels**

**Typesetting Rules**

* Line height:

  * Headings: 1.2

  * Body: 1.6

* Max width:

  * Body content: 650–750px for optimal reading.

* Scale:

  * Use a consistent type scale (\~1.25–1.33) from body to headings.

---

### 5.3 Technical Implementation (CSS Variables)

Implement custom properties in `:root` for consistency and easy iteration.

```css
:root {
  /\* Surface Colors \*/
  --color-bg-main: #FDFDFD;
  --color-bg-subtle: #F1F5F9;
  --color-bg-tertiary: #E2E8F0; /\* Fog \*/

```

`/* Border Colors /`  

`--color-border-subtle: #E5E7EB; / Line Gray */`

`/* Content Colors /`  

`--color-text-header: #0F172A;  / Deep Navy /`  

`--color-text-body: #64748B;    / Cool Slate */`

`/* Action Colors /`  

`--color-action-primary: #4285F4;                 / Azure Blue */`  

`--color-action-hover: #3367D6;`  

`--color-action-soft: rgba(66, 133, 244, 0.1);`

`/* Typography */`  

`--font-sans: system-ui, -apple-system, BlinkMacSystemFont,`  

`"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;`  

`--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,`  

`"Liberation Mono", "Courier New", monospace;`

`--font-size-body: 16px;`  

`--font-size-h3: 20px;`  

`--font-size-h2: 32px;`  

`--font-size-h1: 48px;`

`--line-height-heading: 1.2;`  

`--line-height-body: 1.6;`

`/* Layout & Transition */`  

`--border-radius-md: 8px;`  

`--transition-fast: 0.2s ease-in-out;`  

`}`  

Example usage:

```css
body {
font-family: var(--font-sans);
font-size: var(--font-size-body);
line-height: var(--line-height-body);
color: var(--color-text-body);
background-color: var(--color-bg-main);
}
```

`h1, h2, h3 {`  

`font-family: var(--font-sans);`  

`color: var(--color-text-header);`  

`line-height: var(--line-height-heading);`  

`}`

`code, pre, .metric-mono {`  

`font-family: var(--font-mono);`  

`}`  

---

### 5.4 Interaction Design Principles

**Passive vs Active**

* Links (passive):

  * Default: Content-Secondary, no underline.

  * Hover: Content-Primary, underline appears, mild opacity increase.

* Primary actions (active):

  * Use Action-Primary only for main CTAs like “View Case Study”, “Open App”, and “Contact / Hire Me”.

  * Avoid using blue for non-clickable elements.

**Buttons**

* Default:

  * Background: `var(--color-action-primary)`

  * Text: `#FFFFFF`

  * Border-radius: `var(--border-radius-md)`

* Hover:

  * Background: `var(--color-action-hover)`

  * Box-shadow: `0 6px 18px rgba(15, 23, 42, 0.18)`

* Active:

  * Slight scale (0.98) + reduced shadow.

**Visual Recess**

* Borders and dividers:

  * `1px solid var(--color-border-subtle)` to keep layout airy and modern.

* Use Surface-Secondary sparingly for cards and content groupings, not full-page backgrounds.

**Focus & Accessibility**

* All interactive elements must show a visible focus state:

  * `outline: 2px solid var(--color-action-soft); outline-offset: 2px;`

* Avoid relying on color alone to indicate state; pair with underline, weight, or subtle motion.

---

### 5.5 Responsive Design

The layout must remain clear and readable across desktop, tablet, and mobile.

**Breakpoints**

* Mobile: 0–767px

* Tablet: 768–1023px

* Desktop: 1024px+

**Typography & Layout Adjustments**

* Headings on smaller screens:

  * H1: 36–40px (mobile), 44–52px (tablet)

  * H2: 24–28px (mobile), 28–32px (tablet)

* Content widths:

  * Mobile: \~90% viewport width

  * Tablet/Desktop: 650–750px max-width content column

**Page Layout**

* Mobile:

  * Single column.

  * Full-width project cards using Surface-Secondary.

  * 24–32px vertical spacing between sections.

* Tablet:

  * Two-column project grid where appropriate.

  * Case studies mostly single-column for readability.

* Desktop:

  * Centered content column, optional sidebar for metadata/filters that stacks below content on smaller screens.

**Navigation**

* Mobile:

  * Sticky top bar with logo/name + “Menu” button (Action-Primary).

  * Slide-in or overlay nav with large tap targets.

* Tablet/Desktop:

  * Inline navigation with hover and focus states, plus one primary CTA in Action-Primary.

**Touch Targets**

* Minimum 44px x 44px for all tap targets and buttons.

---

## 6\. Tech Stack

* Front-end: React (functional components + hooks).

* Styling:

  * Bootstrap for base grid/layout and rapid component scaffolding.

  * Custom CSS variables and overrides to enforce the design system and avoid a stock Bootstrap look.

* Deployment: Vercel (including preview deployments for branches).

* Future option:

  * Consider Next.js later for improved SEO, routing, and performance once the base is stable.

---

## 7\. Milestones & Deliverables

1. **Skeleton Layout (V1)**

  * Implement Home, Projects, and basic navigation.

  * Integrate initial design tokens (colors, typography variables).

2. **Project Integration**

  * Add at least 3–5 AI-focused projects/apps.

  * Each project has a card and a dedicated detail view or external link (demo / GitHub).

3. **Visual Identity Application**

  * Apply full color, typography, and interaction guidelines across pages.

  * Replace default Bootstrap look with custom, token-driven styling.

4. **Responsiveness & Accessibility**

  * Validate layouts on mobile, tablet, and desktop breakpoints.

  * Basic accessibility checks: keyboard navigation, focus states, color contrast.

5. **Polish & Iteration**

  * Refine copy and hierarchy on Home and case studies.

  * Improve perceived performance (lazy load images, optimize assets).

  * Review against target audience goals (can a hiring manager understand you in 60–90 seconds?).

---

## 8\. Content Guidelines

Content should be concise, scannable, and focused on outcomes, so a hiring manager or recruiter can understand who you are and what you’ve shipped within 60–90 seconds. All copy should emphasize problems, decisions, and results over process detail.

### 8.1 Voice & Tone

* Voice: Clear, confident, concrete; avoid buzzwords and vague claims.

* Tone: Professional but human; write like you would explain your work to a thoughtful product leader.

* Style: Prefer short paragraphs and bullets; lead with results and impact.

---

### 8.2 Home / Hero Section

**Goal:** Immediately communicate who you are, what you do, and why your work matters, in the top third of the page.

**Required elements:**

* Primary line (1 sentence):

  * Format: `Role • Focus • Value`.

  * Example: “Product Manager - AI & Developer Tools - I design and ship AI-powered workflows that actually get adopted.”

* Supporting line (1–2 short sentences):

  * What you build, for whom, and typical outcomes (e.g., “I’ve led 0→1 and iterative releases for internal tools and AI assistants used by X teams.”).

* Primary CTA:

  * “View Selected Work” or “See AI Projects” as the main action.

* Secondary CTA (optional):

  * “Download Resume” or “Contact”.

**Length constraints:**

* Primary line: max \~80 characters.

* Supporting copy: 1–2 sentences, max 35–40 words.

---

### 8.3 Projects / Work Listing

**Goal:** Let a scanner understand the value of each project in under 5 seconds per card.

Each project card should include:

* Project title: Clear, descriptive (e.g., “AI Triage Assistant for Support Tickets”).

* One-line summary (1 sentence):

  * Format: `[Who/What] + [Problem] + [Outcome/Impact]`.

  * Example: “LLM assistant that cut triage time for support tickets by 35% for a 40-person team.”

* Meta (chips/labels):

  * Role (PM, PM + UX, etc.).

  * Type (0→1, iteration, experiment).

  * Key tech tags (OpenAI, LangChain, React, etc.).

**Copy rules:**

* Avoid generic descriptors (“dashboard,” “tool”) without context.

* Prioritize measurable or directional impact (“reduced manual work,” “unblocked experimentation,” “improved accuracy”).

---

### 8.4 Case Study / Project Detail Structure

**Goal:** Tell a crisp story that explains the problem, your decisions, and the outcome, without turning into a novel. Aim for 3–5 minutes reading time for a full case study, but ensure a scanner can get the gist just by headings and captions.

**Standard structure per case study:**

1. **Snapshot (Meta Block)**

  * Project name and 1-sentence summary.

  * Role (e.g., “Product Manager (IC)”).

  * Timeline.

  * Team & collaborators (Eng, Design, DS).

  * Context (company / personal; internal tool / external product).

2. **Context & Problem**

  * 2–3 sentences: product, users, and why this mattered.

  * Explicit problem statement: what was broken or slow before?

3. **Goals & Constraints**

  * Bullets (3–5):

    * User goals.

    * Business goals.

    * Constraints (time, data, infra, model limits, stakeholders).

4. **Approach & AI Design Decisions**

  * Brief narrative of how you approached the solution:

    * Key product decisions and tradeoffs, especially around AI behavior (model choice, latency vs quality, prompting vs fine-tuning, guardrails, UX patterns).

  * Use subheads like: “Shaping the Assistant,” “Defining Guardrails,” “Reducing Cognitive Load.”

  * Include 2–4 annotated visuals (screens, flows, diagrams) with strong captions.

5. **Results & Impact**

  * Concrete metrics or directional outcomes where possible:

    * “Reduced triage time by \~35%.”

    * “Increased self-serve resolution by 20–30%.”

  * If no hard numbers: focus on qualitative outcomes (adoption, stakeholder feedback, rollout decisions) and what changed.

6. **Learnings & Next Steps**

  * 3–5 bullets on what you learned, what you’d do differently, and possible next versions.

  * Call out tradeoffs or constraints you intentionally accepted.

**Formatting rules:**

* Use headings and pull quotes to break up text.

* Default to 60–80% text and 20–40% visuals per case study.

* Every image should have a 1–2 sentence caption that explains why it matters.

---

### 8.5 About Page

**Goal:** Position you clearly in 20–40 seconds of reading.

**Structure:**

* Short intro paragraph (2–3 sentences):

  * Who you are now, what you focus on, and what you like working on.

* “How I Work” bullets (3–5):

  * Example themes: “Outcome-focused”, “Ship and learn”, “Model and UX together”, “Collaborative with Eng/DS”.

* Brief career narrative (optional, 1–2 short paragraphs):

  * Key arcs, not a full resume.

* Links:

  * Resume, LinkedIn, GitHub, optional email CTA.

---

### 8.6 Contact & Calls to Action

**Goal:** Make it trivial to reach you and obvious what happens next.

**Guidelines:**

* Use one primary CTA label site-wide (e.g., “Contact” or “Let’s talk”).

* Contact page/section should include:

  * Email link.

  * LinkedIn.

  * Optional scheduling link.

* Keep copy short and confident:

  * Example: “Open to PM roles focused on AI products, internal tools, or developer platforms.”

---

### 8.7 Content Maintenance Rules

* Limit detailed case studies to 3–5 flagship projects at any time; archive or summarize older work.

* Review copy every 3–6 months to:

  * Update role/title, current focus, and most relevant projects.

  * Adjust metrics and outcomes if you gather better data.

* When adding a new project:

  * Draft the narrative in a doc first (using the structure above).

  * Then port it into the website template so layout doesn’t dictate the story.

---

## 9\. Non-Functional Requirements

### 9.1 Performance

* Initial page load (Largest Contentful Paint) on desktop should be under \~2.5 seconds on a typical broadband connection.

* Avoid heavy blocking scripts and large unoptimized images; use modern image formats (e.g., WebP) where possible.

* Use React/Vercel best practices for performance: code splitting, lazy loading of non-critical sections.

### 9.2 SEO & Discoverability

* Basic on-page SEO for core pages (Home, Work/Projects, About):

  * Unique title tags and meta descriptions.

  * Semantic HTML structure (proper headings, landmarks).

* Clean, human-readable URLs for main sections and project pages.

* Internal linking between key pages (Home ↔ Projects ↔ About ↔ Contact).

### 9.3 Accessibility

* All interactive elements keyboard-accessible with visible focus states.

* Color contrast meets WCAG 2.1 AA for text and UI components.

* Descriptive alt text for key imagery (especially project mockups that convey meaning).

---

## 10\. Analytics & Telemetry

### 10.1 Tracking

* Integrate lightweight analytics (e.g., Plausible or Google Analytics) to track:

  * Page views by section (Home, Work, individual projects).

  * Click-through rate on primary CTAs.

  * Outbound clicks to GitHub, live demos, and LinkedIn.

### 10.2 Success Signals

* Qualitative:

  * Feedback from hiring managers/recruiters that the portfolio clarified your work and impact.

* Quantitative (directional):

  * Increase in interview/inbound interest attributed to the portfolio.

  * Time-on-page for project detail views (users actually reading case studies).

---

## 11\. Risks, Dependencies, and Acceptance Criteria

### 11.1 Dependencies

* React + Bootstrap + custom styling configured.

* Vercel account and DNS access for custom domain mapping.

* Final copy and project list defined for at least 3–5 flagship AI projects.

### 11.2 Risks & Mitigations

* **Risk:** Site feels like a generic developer template.

  * **Mitigation:** Enforce the visual identity system, custom CSS variables, and case study structure instead of relying on default Bootstrap styling.

* **Risk:** Overly long case studies that busy reviewers won’t read.

  * **Mitigation:** Use strict scannable structure and keep a clear “snapshot” section at the top of each case study.

* **Risk:** Performance degradation from heavy imagery or embeds.

  * **Mitigation:** Optimize images, lazy-load non-critical content, and periodically test performance (e.g., Lighthouse).

### 11.3 High-Level Acceptance Criteria

V1 is “complete” when:

* All core pages (Home, Work/Projects, at least 3 project details, About, Contact) are implemented and navigable on desktop and mobile.

* Visual identity & design system (colors, typography, interactions) is consistently applied and default/clashing Bootstrap styles are removed or overridden.

* Portfolio passes basic accessibility and performance checks (keyboard navigation, contrast, acceptable Lighthouse score).

* Analytics is configured and capturing key events (page views, CTA clicks, outbound links).

---