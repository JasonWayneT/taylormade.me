export const projects = [
  {
    id: "kinbridge-last-words",
    title: "KinBridge: Last Words",
    summary: "AI-guided legacy creation system helping seniors preserve voice, stories, and final wishes.",
    role: "Product Owner / Designer",
    type: "0→1 Product",
    tags: ["AI Voice Cloning", "LLM", "UX Design", "Privacy-First"],
    liveUrl: "https://kinbridge.polsia.app/",
    image: "/images/projects/kinbridge.png",
    context: "End-of-life planning is often cold and clinical. Families frequently lose the voice and stories of their loved ones before they can be captured.",
    goals: ["Gently nudge seniors into recording life stories", "Maintain cultural/spiritual authenticity via narrator voices", "Ensure absolute data privacy and encryption"],
    approach: "Designed a compassionate conversation system that surfaces the chapters of a full life—childhood, career, wisdom. Integrated secure voice cloning to allow families to hear their loved ones' voices for generations, matched with spiritual narrator options.",
    results: "Launched a one-time 'Legacy Pass' model that removes the friction of subscriptions. Successfully preserved thousands of messages and life stories now accessible via family memorial dashboards.",
    learnings: ["Compassionate UX requires slowing down the interaction pace", "Spiritual and cultural alignment is a key trust-builder for legacy technology"]
  },
  {
    id: "job-agent",
    title: "JobAgent: Automated Scout & Application Pipeline",
    summary: "A local, zero-knowledge web application that automates job scouting, applies deterministic gate filters, and generates factual application materials across a 6-stage pipeline.",
    role: "Full-Stack Architect",
    type: "Standalone Web Application",
    tags: ["React", "Express", "SQLite", "Tailwind CSS", "Gemini AI"],
    liveUrl: "https://github.com/JasonWayneT/JobHuntAgent",
    context: "The modern job hunt is an exhausting firehose of noisy postings requiring manual filtering and unique materials that rapidly drain candidate energy.",
    goals: ["Build a zero-knowledge local architecture guaranteeing data privacy", "Implement a deterministic pre-filter scout to save time and API costs", "Automate a stateful 6-stage pipeline strictly grounded in verified experience"],
    approach: "Engineered a local React + Express application backed by Better-SQLite3. Implemented an automated background scout that ingests job board firehoses and applies deterministic blocklists before surfacing roles. Built an interactive React dashboard for real-time tracking, along with a strict AI generation layer that builds tailored resumes via local work-history documents.",
    results: "Replaced manual spreadsheeting with a fully automated 'local job sanctuary.' The scout strips away thousands of irrelevant roles instantly, reducing pipeline preparation time from 2 hours to 5 minutes per high-fit job without risking AI hallucination.",
    learnings: ["Deterministic gate filtering vastly outperforms AI evaluation at the top of the funnel for both speed and cost", "Local DB architectures like SQLite provide incredible speed and total privacy for personal applications"]
  }
];
