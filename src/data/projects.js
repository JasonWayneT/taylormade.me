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
    title: "JobAgent: AI-Powered Application Pipeline",
    summary: "Automated end-to-end recruitment tool that audits resumes, researches companies, and generates tailored interview prep material.",
    role: "Full Stack Developer",
    type: "Personal Project",
    tags: ["Gemini AI", "Vite", "Express", "Automation"],
    liveUrl: "/job-agent",
    context: "Manual job applications are time-consuming and often generic, leading to low response rates. Candidates struggle to tailor materials at scale while maintaining factual accuracy.",
    goals: ["Automate deep-dive company research", "Ensure claim verification via AI auditing to prevent hallucinations", "Generate high-fidelity tailored resumes and cover letters"],
    approach: "Built a 5-stage pipeline using Gemini 2.0 Flash/Pro with ground-truth auditing. Integrated PDF/DOCX parsing, automated web research tools, and a cynical auditor layer for factual verification.",
    results: "Reduced preparation time per application from 2 hours to 5 minutes while maintaining 100% factual alignment with source work history.",
    learnings: ["Multi-stage LLM pipelines require strict state management", "User trust is built through transparent AI auditing and verification"]
  }
];
