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
    approach: "Proposed and led 'Bellwether', an architectural bypass that integrated C3 directly with GPOD (the upstream source of truth). Executed a one-time full sync followed by continuous delta processing.",
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
    approach: "Partnered closely with engineering, QA, and CX to build structured migration tooling. We identified feature gaps on the destination platform and ensured parity before moving accounts. Prioritized 'critical save' accounts that were at high risk of churn.",
    results: "Successfully transitioned roughly 700 accounts in a controlled, non-disruptive way, protecting revenue during a multi-year legacy period.",
    learnings: ["Migration tooling is a first-class product.", "Migrations must be aligned with customer value and retention, not just platform decommissioning."]
  },
  {
    id: "jobagent",
    title: "JobAgent: Automated Scout & Application Pipeline",
    summary: "A local, zero-knowledge web application that automates job scouting, applies deterministic gate filters, and generates factual application materials across a 6-stage pipeline.",
    role: "Full-Stack Architect",
    type: "Standalone Web Application",
    tags: ["React", "SQLite", "Tailwind CSS"],
    liveUrl: "", 
    context: "The modern job hunt is an exhausting firehose of noisy postings requiring manual filtering and unique materials that rapidly drain candidate energy.",
    goals: ["Build a zero-knowledge local architecture guaranteeing data privacy", "Implement a deterministic pre-filter scout to save time and API costs", "Automate a stateful 6-stage pipeline strictly grounded in verified experience"],
    approach: "Engineered a local React application backed by SQLite. Implemented an automated background scout that ingests job board firehoses and applies deterministic blocklists before surfacing roles.",
    results: "Replaced manual spreadsheeting with a fully automated local job sanctuary. The scout strips away thousands of irrelevant roles instantly.",
    learnings: ["Deterministic gate filtering vastly outperforms AI evaluation at the top of the funnel.", "Local DB architectures provide incredible speed and privacy."]
  },
  {
    id: "kinbridge",
    title: "KinBridge: AI Companion for Seniors",
    summary: "A heartfelt AI platform designed to bridge the gap in senior care through health monitoring, daily companionship, and legacy planning.",
    role: "Full-Stack Architect",
    type: "AI Healthcare Platform",
    tags: ["LLMs", "Health Monitoring", "Legacy Planning"],
    liveUrl: "https://kinbridge.polsia.app/",
    context: "Senior isolation and the burden of caregiving are growing societal challenges that require scalable, compassionate technical solutions.",
    goals: ["Provide daily AI companionship to reduce senior isolation", "Implement passive health monitoring and alerts for family members", "Create a secure 'Last Words' vault for legacy planning and farewells"],
    approach: "Built a cross-platform application leveraging LLMs for natural conversation and empathetic engagement. Integrated data pipelines for health tracking and a high-security encrypted vault for legacy assets.",
    results: "Deployed a comprehensive caregiving companion that humanizes AI for the aging population while providing peace of mind to their families.",
    learnings: ["Empathy is a first-class feature in senior-focused AI.", "Designing for non-technical users requires extreme simplicity and proactive guidance."]
  }
];
