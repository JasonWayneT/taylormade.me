export const projects = [
  {
    id: "ai-triage-assistant",
    title: "AI Triage Assistant for Support Tickets",
    summary: "LLM assistant that cut triage time for support tickets by 35% for a 40-person team.",
    role: "Product Manager",
    type: "0→1 Product",
    tags: ["OpenAI", "React", "Internal Tool"],
    context: "The support team was spending 2 hours per day manually assigning tickets.",
    goals: ["Reduce manual assignment time", "Maintain >90% routing accuracy", "Integrate into existing Zendesk workflow"],
    approach: "Designed an AI assistant using OpenAI's API to analyze ticket content, predict the category, and assign to the right agent. Focused heavily on designing the right guardrails to fallback to human review if confidence was low.",
    results: "Reduced triage time by 35% within the first month. Increased team capacity by 20%.",
    learnings: ["Strict guardrails are essential for trust", "Latency matters more than we thought for this workflow"]
  },
  {
    id: "docs-copilot",
    title: "Developer Docs Copilot",
    summary: "Interactive AI agent embedded in developer documentation answering technical questions instantly.",
    role: "PM + UX",
    type: "Feature Iteration",
    tags: ["LLM", "LangChain", "Vector DB"],
    context: "Developers struggled to find the right configuration parameters in our dense documentation.",
    goals: ["Increase successful doc searches", "Decrease time-to-value for new developers"],
    approach: "Built a RAG-based system indexing our markdown docs. Prioritized citation so developers could jump straight to the source material.",
    results: "30% decrease in basic API questions on StackOverflow and internal forums.",
    learnings: ["Citations are critical for developer trust", "Handling code snippets cleanly is the hardest UX challenge"]
  },
  {
    id: "data-extractor",
    title: "Automated Invoice Extractor",
    summary: "Pipeline tool leveraging AI to pull structured data from unstructured vendor PDFs.",
    role: "Product Manager",
    type: "0→1 Tool",
    tags: ["Computer Vision", "Python", "Automation"],
    context: "Finance team manually entered data for thousands of invoices monthly.",
    goals: ["Automate 80% of data entry", "Flag low-confidence scans for human review"],
    approach: "Paired OCR with LLM prompting to extract key-value pairs robustly regardless of the invoice layout.",
    results: "Saved 40 hours of manual data entry per week.",
    learnings: ["Human-in-the-loop UI is just as important as the model accuracy"]
  }
];
