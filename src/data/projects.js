export const projects = [
  {
    id: "bellwether",
    title: "Bellwether Data Integration",
    summary: "Bypassed legacy ETL pipelines with a direct integration to the upstream source of truth, eliminating the primary driver of customer churn.",
    role: "Product Manager",
    type: "Platform Data Integrity",
    tags: ["Data Pipeline", "Legacy Bypass", "Customer Retention"],
    liveUrl: "",
    context: "The largest customer complaint for C3 was stale contact data. Investigation revealed a 30-40% data drop-off caused by a brittle chain of legacy ETL pipelines.",
    goals: ["Eliminate the 30-40% data drop-off", "Bypass legacy pipelines rather than patching them", "Restore customer trust in data freshness"],
    approach: "Proposed and led 'Bellwether', an architectural bypass that integrated C3 directly with GPOD (the upstream source of truth). Chose this direct integration approach to eliminate systemic 'black box' ETL failures and establish a transparent, manageable data path.",
    results: "Delivered a 100% reduction in stale-contact complaints tied to that pipeline, effectively neutralizing the platform's biggest product-driven churn driver.",
    learnings: ["A simpler, transparent solution is far better than relying on a complex pipeline no one can explain.", "Signal de-noising and data freshness are often architectural issues, not feature gaps."]
  },
  {
    id: "migration",
    title: "Voluntary Migration Tooling",
    summary: "Structured, phased migration tooling enabling voluntary transition off a $40M ARR legacy platform without recreating past forced-migration failures.",
    role: "Product Manager",
    type: "Migration Strategy",
    tags: ["Platform Sunset", "Cross-Functional", "Revenue Protection"],
    liveUrl: "",
    context: "The business strategy required moving customers off the legacy C3 platform, but a previous forced migration attempt had caused severe churn and reputational damage.",
    goals: ["Protect revenue by making migrations voluntary and value-driven", "Ensure no customer lost a critical workflow during transition", "Execute a phased rollout starting with low-complexity accounts"],
    approach: "Chose a phased tooling strategy (Database-only → Monitoring → Data Groups) to manage operational risk. Partnered with engineering to ensure feature parity on the destination platform before moving accounts, prioritizing 'critical save' accounts to protect high-revenue logos.",
    results: "Successfully transitioned roughly 700 accounts in a controlled, non-disruptive way, protecting revenue during a multi-year legacy period.",
    learnings: ["Migration tooling is a first-class product.", "Migrations must be aligned with customer value and retention, not just platform decommissioning."]
  },
  {
    id: "jobagent",
    title: "JobAgent: Automated Scout & Application Pipeline",
    summary: "A local, zero-knowledge web application that automates job scouting and generates application materials across a stateful 6-stage pipeline.",
    role: "Product Lead & Architect",
    type: "Standalone Web Application",
    tags: ["React", "SQLite", "Tailwind CSS"],
    liveUrl: "", 
    context: "The modern job hunt is an exhausting firehose of noisy postings. JobAgent systematizes this chaotic process into a functional product pipeline strictly grounded in verified experience.",
    goals: ["Build a zero-knowledge local architecture guaranteeing data privacy", "Implement a deterministic pre-filter scout to save time and API costs", "Automate a stateful 6-stage pipeline: Scout, Filter, Refine, Evaluate, Draft, Review"],
    approach: "Engineered a local React application backed by SQLite. Chose SQLite for local-first data persistence to ensure absolute user privacy in a zero-knowledge environment. Systematized the workflow into a 6-stage pipeline to handle firehose ingestion with deterministic blocklists before AI evaluation.",
    results: "Replaced manual spreadsheeting with a fully automated local job sanctuary. The scout strips away thousands of irrelevant roles instantly using deterministic gate filters.",
    learnings: ["Deterministic gate filtering vastly outperforms AI evaluation at the top of the funnel.", "Local DB architectures provide incredible speed and privacy for sensitive personal data."]
  },
  {
    id: "kinbridge",
    title: "KinBridge: AI Companion for Seniors",
    summary: "A heartfelt AI platform for senior care, bridging gaps with health monitoring, daily companionship, and a secure 'Last Words' legacy vault.",
    role: "Product Lead & Architect",
    type: "AI Healthcare Platform",
    tags: ["LLMs", "Health Monitoring", "Legacy Planning"],
    liveUrl: "https://kinbridge.polsia.app/",
    context: "Senior isolation and caregiving burdens require scalable, compassionate technical solutions. KinBridge manages high-stakes sensitivity by balancing empathetic engagement with strict data integrity.",
    goals: ["Provide daily AI companionship with sub-500ms latency for natural conversation", "Implement passive health monitoring with LLM grounding to eliminate hallucinations", "Create a secure 'Last Words' vault for sensitive legacy planning and farewells"],
    approach: "Built a cross-platform application leveraging LLM chaining to reduce hallucination risk in health-sensitive interactions. Chose a local-first processing model for the legacy vault to ensure user trust. Optimized for extreme simplicity to accommodate non-technical senior users.",
    results: "Deployed a comprehensive caregiving companion that humanizes AI for the aging population while providing peace of mind through secure, reliable health alerts.",
    learnings: ["Empathy is a first-class feature in senior-focused AI.", "Handling the most sensitive data (voice/final wishes) requires a 'Security-First' product philosophy."]
  }
];
