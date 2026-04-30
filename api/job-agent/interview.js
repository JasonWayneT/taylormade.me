import { GoogleGenAI } from '@google/genai';
import { rules } from './prompts.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { jobDescription, workExperience, researchData, companyName, contactInfo } = req.body;
  if (!jobDescription || !workExperience) {
    return res.status(400).json({ error: 'Missing inputs for interview cheat sheet' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const systemPrompt = `You are an expert interview coach and career strategist. You create highly specific, grounded interview preparation documents. You never fabricate experience, metrics, or tools. Every STAR story must be pulled directly from the candidate's work history. Every company fact must come from the provided research data. You enforce the Claim Verifier rules absolutely.`;

    const userPrompt = `
    CLAIM VERIFIER RULES (enforce EVERY rule before outputting):
    ${rules.CLAIM_VERIFIER}

    CANDIDATE CONTACT INFORMATION (use Name verbatim in the document header):
    Name: ${contactInfo?.name || 'See resume'}
    Email: ${contactInfo?.email || 'See resume'}
    Location: ${contactInfo?.location || 'See resume'}

    TASK: Generate a complete, standardized Interview Cheat Sheet for this candidate.

    CRITICAL RULES:
    1. All STAR story content (Situation, Task, Action, Result) must be drawn ONLY from the GROUND TRUTH work experience. Do not invent scenarios, metrics, or tools.
    2. All company intel (Mission, Recent News, Pain Points, Culture Signal) must be drawn ONLY from the COMPANY RESEARCH DATA. If a research field says "Not confidently available," reflect that honestly — do not fill it with assumptions.
    3. "Smart Questions to Ask" must reference specific items from the research data, not generic PM interview questions.
    4. "Honest Gap Acknowledgment" must be based on a real comparison between the JD requirements and the GROUND TRUTH. Do not fabricate gaps or hide real ones.
    5. The "Bridge" field in each STAR story must explicitly connect the candidate's specific experience to the company's documented pain point.
    6. Today's date for the header: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.

    STYLE GUIDE (output must match this HTML structure exactly — every section, every label):
    ${rules.INTERVIEW_CHEAT_SHEET_STYLE}

    GROUND TRUTH (Work Experience — only valid source for all candidate claims):
    ${workExperience}

    JOB DESCRIPTION (source of role priorities and likely question areas):
    ${jobDescription}

    COMPANY RESEARCH DATA (only valid source for all company facts):
    Company: ${companyName || 'Unknown'}
    ${JSON.stringify(researchData || {}, null, 2)}

    Output strictly the HTML cheat sheet matching the style guide exactly. No preamble, no explanation, no markdown fences. Fill in every section — do not leave any placeholder bracket text like [Company Name] unfilled.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        temperature: 0.15,
        systemInstruction: systemPrompt
      }
    });

    let output = response.text.trim();
    if (output.startsWith('```html')) output = output.slice(7, -3).trim();
    else if (output.startsWith('```')) output = output.slice(3, -3).trim();

    return res.status(200).json({ draft: output });

  } catch (error) {
    console.error('Interview Cheat Sheet Error:', error.message);
    return res.status(500).json({ error: 'Failed to generate interview cheat sheet' });
  }
}
