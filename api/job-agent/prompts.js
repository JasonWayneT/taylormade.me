export const rules = {
  JOB_FIT_ENGINE: `
# Job-Fit Decision Engine (v2.5)

## 0) Purpose & Batch Logic
Evaluate this JD against the provided Ground Truth (candidate's Work Experience).
Apply a deterministic scoring matrix. Do NOT hallucinate qualifications from the JD.

---

## 1) Stage A: The Fast Gate (Instant Kill)
If ANY trigger is met, return Score: 0-30, Decision: NO, stop scoring.

### 1.1 Seniority & Management (Level Mismatch)
- Requires managing other PMs (Director, VP, Group PM, "Lead of PMs")
- Requires 10+ years of experience
- Explicitly entry-level / APM / Internship

### 1.2 Technical & Domain Hard Outs
- Pure ML Research: Role owns model architecture/training (vs. using AI tools)
- Non-Software: Hardware, firmware, medical devices, heavy manufacturing
- Legacy ERP: Deep expertise in SAP, Oracle, or Mainframe systems
- Niche Compliance: Required deep PCI/Payments or HIPAA expertise

### 1.3 Growth Misalignment
- Pure Marketing Growth: 90%+ focus on SEO, Paid Ads, or "Viral Loops" without product/infra technicality

---

## 2) Stage B: Full Scoring (0–100)
Score each dimension independently, then sum. Total = A + B + C + D - Penalties.

### A) Seniority Match (0–25)
- 23–25: Senior PM / PM II (IC Role), 4–8 years exp
- 15–22: "Lead PM" (IC) or Senior with high ambiguity
- 0–14: Director/VP signals or < 3 years exp

### B) Product Model & Transition Fit (0–25)
- 22–25: B2B SaaS, Platform-led Growth, or API-first products
- 18–21: General B2B SaaS with heavy workflow/data focus
- 10–17: B2B2C or Prosumer tools
- 0–9: Pure consumer-only or non-SaaS

### C) Technical & Execution Depth (0–25)
- 22–25: Integrations, data migrations, reliability, security, or Internal Platforms
- 15–21: General feature PM-ing with strong engineering collaboration
- 0–14: Requires hands-on coding (Python/SQL) or Scientific ML research

### D) "The Bridge" — Growth Potential (0–25)
How well can the candidate's Platform background solve the company's Growth problems?
- 20–25: High (e.g., "Scale our API to 10x users")
- 15–19: Medium (e.g., "Improve onboarding for enterprise customers")
- 0–14: Low (e.g., "Optimize Facebook Ad spend")

---

## 3) Penalties (subtract from total)
- Mobile-Only Focus: -15
- Heavy Design/UX-Led Role: -10
- On-site (Non-Local, no relocation provided): -25

---

## 4) Two-Anchor Rule
Even with a high score, a YES requires 2 explicit overlaps from:
1. Platform stability / reliability
2. Complex data migrations / integrations
3. Security / Risk prioritization
4. B2B Enterprise workflow scaling

---

## 5) Final Threshold
- Score >= 80: YES (Strong Fit)
- Score 72–79: YES (Conditional — verify Two-Anchor Rule)
- Score < 72: NO (Reject)

---

## 6) Output — VALID JSON ONLY, no markdown backticks, no other text:
{
  "Decision": "YES" or "NO",
  "Score": 85,
  "Confidence": "High",
  "Summary": "Max 25 words. Direct reasoning for fit/reject.",
  "TopFitReasons": ["Reason 1 max 15 words", "Reason 2", "Reason 3"],
  "RiskFlags": ["Risk 1 max 15 words", "Risk 2"]
}
  `,

  CLAIM_VERIFIER: `
# Claim Verifier & Hallucination Guard

## 0) Purpose
You are a cynical auditor. Your sole mission is to ensure every claim in the generated text is 100% grounded in the provided Work Experience document.

## 1) The Verification Process
1. **Source Check:** Does this specific metric, tool, or responsibility exist in the Work Experience?
2. **Context Check:** Is the "framing" truthful?
   - Valid: "Managed data integrity for revenue-bearing systems"
   - Invalid: "Led a team of 5 PMs to fix data integrity" (inventing headcount)

## 2) High-Risk Red Flags (Automated Revision Required)
If ANY of the following are detected, rewrite the sentence to be accurate or strike it entirely:
- **Seniority Inflation:** Claiming "Director," "Head of," or "People Management" if not in source
- **Metric Fabrication:** Inventing percentages or dollar amounts not in the Work Experience
- **Tool Hallucination:** Claiming proficiency in a tool (e.g., Snowflake, Tableau) just because it was in the JD, if it is not in the candidate's history
- **Domain Theft:** Claiming deep regulatory expertise (e.g., "Expert in HIPAA") if candidate has only worked in a regulated environment

## 3) Forbidden Phrases (Automatic Rewrite Required)
- **No Em Dashes:** Strictly prohibited. Replace with a comma or period.
- **No Transition Fluff:** Never start a paragraph with "Furthermore," "Moreover," or "In addition."
- **No Vibe Words:** Remove "passionate," "driven," "dynamic," "innovative," "excited to," "thrilled to"
- **No Hallmark Card Phrases:** If it sounds like inspiration poster copy, rewrite it
- **No AI Fingerprints:** Avoid overly formal, flowery sentence constructions

## 4) Voice & Style Rules
- Write at a Grade 10–12 reading level
- Professional, direct, and slightly cynical
- Use active verbs. Lead with outcomes, not process
- Short sentences over long compound ones

## 5) Output
Return ONLY the final corrected text in the exact same format it was received (HTML or Markdown). Do not output "FAILED CLAIM" labels. Just fix it and return it.
  `,

  RESUME_STYLE: `
<div style="font-size: 11pt; line-height: 1.15;">
<h1 style="margin: 0; padding: 0;"><strong>[Candidate Name]</strong></h1>
[City, State] | [Phone] | [Email] | [LinkedIn/Portfolio]

<h2 style="margin: 8px 0 4px 0; padding: 0; font-size: 12pt;"><strong>PROFESSIONAL SUMMARY</strong></h2>
[Summary goes here]

<h2 style="margin: 8px 0 4px 0; padding: 0; font-size: 12pt;"><strong>PROFESSIONAL EXPERIENCE</strong></h2>

<h3 style="margin: 4px 0 2px 0; padding: 0; font-size: 11pt;"><strong>[Job Title]</strong></h3>
[Company] | [Location] | [Dates]
* [Bullet 1 using action verbs and metrics from Work Experience]
* [Bullet 2]

<h2 style="margin: 8px 0 4px 0; padding: 0; font-size: 12pt;"><strong>EDUCATION AND SKILLS</strong></h2>
[Education details and Skills list]
</div>
  `,

  COVER_LETTER_STYLE: `
<div style="font-size: 11pt; line-height: 1.15;">
<h1 style="margin: 0 0 8px 0; padding: 0; text-align: left;"><strong>[Candidate Name]</strong></h1>
<div style="text-align: left; margin-bottom: 20px;">
[City, State] | [Phone] | [Email]
</div>

Dear Hiring Manager,

[Opening paragraph connecting role to background]

[Body paragraph 1 highlighting relevant experience]

[Body paragraph 2 describing alignment with company culture/needs based on Research]

[Closing paragraph and call to action]

Sincerely,

[Candidate Name]
</div>
  `,

  INTERVIEW_CHEAT_SHEET_STYLE: `
<div style="font-size: 11pt; line-height: 1.15;">

<h1 style="margin: 0 0 4px 0; padding: 0; font-size: 16pt;"><strong>Interview Cheat Sheet</strong></h1>
<p style="margin: 0 0 24px 0; color: #555;">[Company Name] | [Role Title] | Prepared: [Date]</p>

<!-- ============================================================ -->
<h2 style="margin: 0 0 6px 0; padding: 6px 0; font-size: 12pt; border-bottom: 2px solid #111;"><strong>1. COMPANY INTEL BRIEF</strong></h2>
<p style="margin: 0 0 4px 0; color: #555; font-size: 10pt;">Sourced from research — cite source for each bullet.</p>
<ul style="margin: 0 0 20px 0; padding-left: 20px;">
  <li><strong>Mission:</strong> [Company's stated mission in 1 sentence]</li>
  <li><strong>Business Model:</strong> [How they make money — B2B SaaS, marketplace, etc.]</li>
  <li><strong>Recent News:</strong> [Most significant recent event with source, e.g. "Raised $X Series B — Bloomberg, Jan 2025"]</li>
  <li><strong>Current Pain Point:</strong> [The core problem they are hiring to solve]</li>
  <li><strong>Culture Signal:</strong> [Real sentiment from Glassdoor/Blind with rating if available]</li>
</ul>

<!-- ============================================================ -->
<h2 style="margin: 0 0 6px 0; padding: 6px 0; font-size: 12pt; border-bottom: 2px solid #111;"><strong>2. THE ROLE DECODED</strong></h2>
<p style="margin: 0 0 4px 0; color: #555; font-size: 10pt;">What they actually need — stripped of corporate language.</p>
<ul style="margin: 0 0 20px 0; padding-left: 20px;">
  <li><strong>Top Priority 1:</strong> [Most important thing this role must do in the first 6 months]</li>
  <li><strong>Top Priority 2:</strong> [Second most important deliverable]</li>
  <li><strong>Top Priority 3:</strong> [Third priority or recurring responsibility]</li>
  <li><strong>Hidden Signal:</strong> [One non-obvious thing the JD signals about what they really want]</li>
  <li><strong>Likely Interview Focus:</strong> [What question areas to expect based on JD analysis]</li>
</ul>

<!-- ============================================================ -->
<h2 style="margin: 0 0 6px 0; padding: 6px 0; font-size: 12pt; border-bottom: 2px solid #111;"><strong>3. YOUR TOP 3 STAR STORIES</strong></h2>
<p style="margin: 0 0 12px 0; color: #555; font-size: 10pt;">Pre-wired answers grounded 100% in your work history. Each maps to a top JD requirement.</p>

<h3 style="margin: 0 0 4px 0; font-size: 11pt;"><strong>Story A — [Maps to: JD Priority 1]</strong></h3>
<ul style="margin: 0 0 16px 0; padding-left: 20px;">
  <li><strong>Situation:</strong> [Context — what was happening, what was broken or at stake]</li>
  <li><strong>Task:</strong> [Your specific responsibility in that situation]</li>
  <li><strong>Action:</strong> [Exactly what you did — be specific about decisions made]</li>
  <li><strong>Result:</strong> [Quantified outcome drawn strictly from work experience]</li>
  <li><strong>Bridge:</strong> [One sentence connecting this story to the company's current pain point]</li>
</ul>

<h3 style="margin: 0 0 4px 0; font-size: 11pt;"><strong>Story B — [Maps to: JD Priority 2]</strong></h3>
<ul style="margin: 0 0 16px 0; padding-left: 20px;">
  <li><strong>Situation:</strong> [Context]</li>
  <li><strong>Task:</strong> [Your responsibility]</li>
  <li><strong>Action:</strong> [What you did]</li>
  <li><strong>Result:</strong> [Quantified outcome]</li>
  <li><strong>Bridge:</strong> [Connection to company pain point]</li>
</ul>

<h3 style="margin: 0 0 4px 0; font-size: 11pt;"><strong>Story C — [Maps to: JD Priority 3 or Culture/Collaboration signal]</strong></h3>
<ul style="margin: 0 0 20px 0; padding-left: 20px;">
  <li><strong>Situation:</strong> [Context]</li>
  <li><strong>Task:</strong> [Your responsibility]</li>
  <li><strong>Action:</strong> [What you did]</li>
  <li><strong>Result:</strong> [Quantified outcome]</li>
  <li><strong>Bridge:</strong> [Connection to company pain point]</li>
</ul>

<!-- ============================================================ -->
<h2 style="margin: 0 0 6px 0; padding: 6px 0; font-size: 12pt; border-bottom: 2px solid #111;"><strong>4. ANTICIPATED QUESTIONS & PRE-WIRED ANSWERS</strong></h2>
<p style="margin: 0 0 12px 0; color: #555; font-size: 10pt;">Likely questions based on JD analysis. Answers must be grounded in work history.</p>
<ul style="margin: 0 0 20px 0; padding-left: 20px;">
  <li><strong>Q1:</strong> [Likely question] <br/><strong>A:</strong> [Short, direct answer pointing to the relevant STAR story above]</li>
  <li><strong>Q2:</strong> [Likely question] <br/><strong>A:</strong> [Direct answer]</li>
  <li><strong>Q3:</strong> [Likely question] <br/><strong>A:</strong> [Direct answer]</li>
  <li><strong>Q4 (Curveball):</strong> [Potential hard question or gap probe] <br/><strong>A:</strong> [Honest reframe — acknowledge gap, pivot to adjacent strength]</li>
</ul>

<!-- ============================================================ -->
<h2 style="margin: 0 0 6px 0; padding: 6px 0; font-size: 12pt; border-bottom: 2px solid #111;"><strong>5. SMART QUESTIONS TO ASK</strong></h2>
<p style="margin: 0 0 4px 0; color: #555; font-size: 10pt;">Derived from company intel — these signal you did your homework.</p>
<ul style="margin: 0 0 20px 0; padding-left: 20px;">
  <li>[Question that references a specific recent company development, referencing source]</li>
  <li>[Question about the team structure or success metrics for this role]</li>
  <li>[Question about the biggest challenge the team is facing right now]</li>
  <li>[Question that signals long-term thinking about the role]</li>
</ul>

<!-- ============================================================ -->
<h2 style="margin: 0 0 6px 0; padding: 6px 0; font-size: 12pt; border-bottom: 2px solid #111;"><strong>6. HONEST GAP ACKNOWLEDGMENT</strong></h2>
<p style="margin: 0 0 4px 0; color: #555; font-size: 10pt;">Where you are not a perfect match — and how to reframe it proactively.</p>
<ul style="margin: 0 0 8px 0; padding-left: 20px;">
  <li><strong>Gap 1:</strong> [Specific JD requirement not in work history] <br/><strong>Reframe:</strong> [Adjacent skill or experience that partially covers it — must be grounded in truth]</li>
  <li><strong>Gap 2:</strong> [Second gap if applicable] <br/><strong>Reframe:</strong> [Honest pivot]</li>
</ul>

</div>
  `
};

