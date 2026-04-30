import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { companyName } = req.body;
  if (!companyName) return res.status(400).json({ error: 'Missing company name' });

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const prompt = `
    Conduct a deep-dive web search into the company: "${companyName}".

    SOURCE PRIORITY RULES:
    Tier 1 (highest trust — use first, always preferred):
      Bloomberg, Wall Street Journal, Reuters, Financial Times, The Economist, SEC filings (10-K, 10-Q, 8-K), official company press releases, official investor relations pages.

    Tier 2 (acceptable — use when Tier 1 is unavailable, note clearly in output):
      TechCrunch, Wired, The Information, Axios, CNBC, Forbes, Business Insider, Crunchbase, Pitchbook, Glassdoor, Blind.

    EXPLICITLY IGNORE (never use):
      Medium, Substack, personal blogs, SEO content farms, LinkedIn posts, Reddit, Wikipedia, anonymous forums, and any site that cannot be verified as a recognizable news outlet or official source.

    CITATION RULES (critical):
    - Every factual claim must include an inline source attribution in parentheses, e.g., "(Source: Bloomberg, Jan 2025)" or "(Source: Official Press Release)".
    - If a fact comes from a Tier 2 source, label it "(Tier 2 — TechCrunch, Feb 2025)".
    - If no reputable source is found for a field, output exactly: "Not confidently available".
    - Do NOT infer, extrapolate, or hallucinate any data point.

    Return a single VALID JSON object matching this EXACT schema:
    {
      "coreMission": "String — company's stated mission and observed strategic priority (Source: ...)",
      "businessModel": "String — revenue model, growth stage, customer segments (Source: ...)",
      "recentFinancials": "String — funding rounds, earnings, or valuation in the last 90 days with source, OR 'Not confidently available'",
      "organizationalShifts": "String — layoffs, hiring surges, or leadership changes in last 90 days with source, OR 'Not confidently available'",
      "productAndPartnershipNews": "String — new product launches or M&A activity in last 90 days with source, OR 'Not confidently available'",
      "culturalSentiment": "String — real-world employee sentiment aggregate with source (e.g. Glassdoor rating, Blind themes), OR 'Not confidently available'",
      "keyPainPoints": "String — the core business problem this company is currently trying to solve (Source: ...)"
    }

    Return VALID JSON ONLY. Do not wrap in markdown backticks. Do not add or remove fields from the schema.
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: prompt,
        config: {
            temperature: 0.1,
            tools: [{ googleSearch: {} }],
            systemInstruction: "You are a corporate intelligence analyst. You prioritize Tier 1 sources (Bloomberg, WSJ, Reuters, FT, SEC filings, official PRs) and fall back to Tier 2 sources (TechCrunch, Wired, Axios, Crunchbase, Glassdoor) only when Tier 1 is unavailable. You must cite the source and its tier inline with every fact. You never invent data. If no reputable source exists for a field, you output exactly 'Not confidently available'."
        }
    });

    let output = response.text.trim();
    if (output.startsWith("```json")) output = output.slice(7, -3).trim();
    else if (output.startsWith("```")) output = output.slice(3, -3).trim();

    return res.status(200).json(JSON.parse(output));

  } catch (error) {
    console.error('Research Error:', error.message);
    return res.status(500).json({ error: 'Failed to research company' });
  }
}
