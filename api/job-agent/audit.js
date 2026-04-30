import { GoogleGenAI } from '@google/genai';
import { rules } from './prompts.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { draftText, workExperience } = req.body;
  if (!draftText || !workExperience) {
    return res.status(400).json({ error: 'Missing inputs for auditing' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const systemPrompt = "You are the cynical auditor enforcing the Claim Verifier rules.";
    const userPrompt = `
    RULES:
    ${rules.CLAIM_VERIFIER}
    
    GROUND TRUTH (CANDIDATE'S ORIGINAL WORK EXPERIENCE):
    ${workExperience}
    
    TEXT TO AUDIT:
    ${draftText}
    
    Perform the verification. 
    1. Read every metric and claim in the "TEXT TO AUDIT".
    2. Does it exist in the "GROUND TRUTH"?
    3. If high-risk flags exist (seniority inflation, metric fabrication, tool hallucination), rewrite the sentence to be completely accurate to the GROUND TRUTH.
    
    Return ONLY the final corrected HTML/markdown text exactly matching the format it came in. Do not use standard markdown code blocks, just return the raw valid text. 
    Do not output 'FAILED CLAIM' unless explicitly asked, just fix it securely in the final output so the pipeline can proceed automatically with corrected text.
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userPrompt,
        config: {
            temperature: 0.1,
            systemInstruction: systemPrompt
        }
    });

    let output = response.text.trim();
    if (output.startsWith("\`\`\`html")) output = output.slice(7, -3).trim();
    else if (output.startsWith("\`\`\`")) output = output.slice(3, -3).trim();

    return res.status(200).json({ auditedDraft: output });

  } catch (error) {
    console.error('Auditing error:', error.message);
    return res.status(500).json({ error: 'Failed to run Claim Verifier' });
  }
}
