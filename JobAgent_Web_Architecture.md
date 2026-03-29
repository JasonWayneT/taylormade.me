# JobAgent: Web Architecture & Pipeline PRD

## 1\. Product Overview & Purpose

**JobAgent Web** is a zero-cost, serverless AI application embedded directly within a React/Vite Portfolio Single Page Application (SPA).

Originally developed as a local Python-based automation script for batch-processing job applications, it has been ported to the web to serve as an interactive, public-facing sandbox. Visitors can upload their own resume and target a specific job description to dynamically generate an ATS-optimized Resume and tailored Cover Letter in real-time.

**Core Philosophy:**

* **Zero Hallucination Guarantee:** The system employs a "Cynical Auditor" pattern to violently strip out fabrications.
* **Client-Side Heavy, Serverless Light:** Complex binary file parsing is done locally in the user's browser, transmitting only raw text to Vercel Serverless Functions to avoid payload limits and timeout constraints.

---

## 2\. Technical Architecture

### 2.1 The Frontend (React + Vite)

* **UI:** A progressive, multi-stage loading interface built with React and custom high-contrast minimalist CSS.
* **Client-Side File Parsing:**
  * Visitors can upload documents (PDF, DOCX, TXT, MD) into two distinct dropzones: a **Required Resume** and an **Optional Master Work Experience**.
  * **PDFs** are parsed entirely in the browser using `pdfjs-dist`.
  * **DOCX** files are parsed entirely in the browser using `mammoth`.
  * By extracting text on the client, Vercel Serverless Functions are completely shielded from binary manipulation and 4.5MB payload constraints.
* **PDF Generation:** Outputs are rendered cleanly into the DOM using an ATS-compliant template and exported using `react-to-print`.

### 2.2 The Backend (Vercel Serverless Functions)

* **Endpoints:** The backend consists of lightweight `/api/evaluate`, `/api/research`, `/api/draft`, and `/api/audit` endpoints.
* **AI Engine:** Exclusively powered by Google's `gemini-2.5-flash` and `gemini-2.5-pro` via the `@google/genai` Node SDK.
* **Security:** The Gemini API Key is stored securely as a Vercel environment variable and never exposed to the client. The application is completely stateless; no user data is persisted or saved to a database.

---

## 3\. The 4-Stage AI Pipeline Process Breakdown

When a user clicks "Run Automation", the React frontend acts as the orchestrator, dynamically streaming the user through 4 distinct serverless invocations.

### Stage 1: The Gatekeeper (Evaluation)

**Endpoint:** `/api/evaluate` **Purpose:** Ensure the candidate is actually a viable fit before burning compute on deep research and drafting.

* The AI analyzes the candidate's uploaded Work Experience against the pasted Job Description.
* It applies a strict, deterministic point-scoring matrix.
* It instantly rejects the pipeline if the role requires deep skills the candidate doesn't have, or demands a seniority level heavily outside their bounds.
* *If Score >= 72 = Pass | Otherwise = Halt & Reject.*

### Stage 2: Intelligence Gathering (Research)

**Endpoint:** `/api/research` **Purpose:** Discover the company's real-world "DNA", current pain points, and recent momentum to inject highly specific context into the Cover Letter.

* **Search Grounding:** Uses Google Gemini 2.5 Pro with native Google Search integration.
* **Reputational Filtering:** The prompt violently restricts the AI from using SEO spam or content aggregators. It is instructed to exclusively source from tier-1 financial press (Bloomberg, WSJ, Reuters), official PR wires, or SEC filings (10-K).
* Output is constrained to a strict JSON structure outlining recent financials, leadership changes, and product launches.

### Stage 3: The Drafting Engine

**Endpoint:** `/api/draft` **Purpose:** Generate the actual application assets.

* **Parallel Execution:** Two overlapping API calls are fired to generate the Resume and the Cover Letter concurrently to minimize wait times.
* **The Resume:** Maps the bullet points from the user's master experience to explicitly resolve the required qualifications in the target JD, optimizing for ATS keyword density.
* **The Cover Letter:** Weaves the candidate's strongest wins linearly into the recent financial/product intelligence gathered in Stage 2.

### Stage 4: The Cynical Auditor (Hallucination Guard)

**Endpoint:** `/api/audit` **Purpose:** The most critical stage—guaranteeing 100% truthfulness.

* **Execution:** The generated drafts from Stage 3 are immediately intercepted and forwarded to a completely independent LLM prompt (`/api/audit`).
* **The Rules of Engagement:** The Auditor's only job is to aggressively verify every claim, metric, and tool listed in the draft against the user's original raw text upload.
* **Correction:** If the initial drafting engine fabricated a metric (e.g., claiming "$1M generated" when the raw resume says "$100k") or inflated a title (e.g., claiming "Director" when the truth is "Senior PM"), the Auditor rewrites or strikes the sentence entirely.
* **Final Delivery:** Only the sanitized, audited result is passed back to the React UI for the user to view and download.
