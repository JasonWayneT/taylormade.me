import { GoogleGenAI } from '@google/genai';
import { rules } from './prompts.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { jobDescription, workExperience, researchData, type, contactInfo } = req.body;
  if (!jobDescription || !workExperience || !type) {
    return res.status(400).json({ error: 'Missing inputs' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    let userPrompt = '';
    let systemPrompt = '';

    if (type === 'resume') {
      systemPrompt = "You are an expert ATS Resume Writer and Cynical Auditor. You enforce the Claim Verifier rules absolutely. Output raw HTML strictly matching the provided style guide.";
      userPrompt = `
      CLAIM VERIFIER RULES (enforce EVERY rule before outputting):
      ${rules.CLAIM_VERIFIER}

      CANDIDATE CONTACT INFORMATION (use these values VERBATIM in the document header — do not alter, infer, or omit any field that is not null):
      Name: ${contactInfo?.name || 'See resume'}
      Email: ${contactInfo?.email || 'See resume'}
      Phone: ${contactInfo?.phone || 'See resume'}
      Location: ${contactInfo?.location || 'See resume'}
      LinkedIn: ${contactInfo?.linkedin || 'See resume'}
      Portfolio: ${contactInfo?.portfolio || ''}

      TASK: Create a tailored, ATS-optimized Resume.

      ATS KEYWORD DENSITY RULES:
      1. Extract the exact keywords, tools, and phrases from the JOB DESCRIPTION.
      2. Mirror those exact keywords in the resume bullet points wherever they are truthfully supported by the GROUND TRUTH.
      3. Do NOT invent keyword matches. Only include a JD keyword if the candidate's experience directly supports it.
      4. Place the highest-priority JD keywords in the PROFESSIONAL SUMMARY and in the first bullet point of the most recent role.

      BRIDGE LOGIC: Translate Platform/Infrastructure wins into business and growth outcomes where applicable.
      Example translation: "Owned API integration pipeline" → "Scaled API integration pipeline supporting X enterprise clients."

      STYLE GUIDE (output must match this HTML structure exactly):
      ${rules.RESUME_STYLE}

      GROUND TRUTH (Work Experience — only source of truth):
      ${workExperience}

      JOB DESCRIPTION (source of ATS keywords only):
      ${jobDescription}

      Output strictly the HTML resume. No preamble, no explanation, no markdown fences.
      `;
    } else if (type === 'cover_letter') {
      systemPrompt = "You are an expert candidate writing a compelling, direct cover letter. You enforce the Claim Verifier rules absolutely. Output raw HTML strictly matching the provided style guide.";
      userPrompt = `
      CLAIM VERIFIER RULES (enforce EVERY rule before outputting):
      ${rules.CLAIM_VERIFIER}

      CANDIDATE CONTACT INFORMATION (use these values VERBATIM in the document header — do not alter, infer, or omit any field that is not null):
      Name: ${contactInfo?.name || 'See resume'}
      Email: ${contactInfo?.email || 'See resume'}
      Phone: ${contactInfo?.phone || 'See resume'}
      Location: ${contactInfo?.location || 'See resume'}
      LinkedIn: ${contactInfo?.linkedin || 'See resume'}
      Portfolio: ${contactInfo?.portfolio || ''}

      TASK: Write a 250-400 word Cover Letter.

      BRIDGE INSTRUCTION (critical — follow this for every paragraph):
      For each major company intelligence item below (funding round, product launch, leadership change, pain point), identify the most directly relevant win or skill from the GROUND TRUTH and weave them together explicitly.
      Example: "Your recent $X Series B to scale [product area] maps directly to my experience owning [specific platform work] at [Company], where I delivered [specific outcome]."
      Do NOT write generic cover letters. Every paragraph must reference a specific company intelligence data point.

      STYLE GUIDE (output must match this HTML structure exactly):
      ${rules.COVER_LETTER_STYLE}

      GROUND TRUTH (Work Experience — only source of truth for claims):
      ${workExperience}

      JOB DESCRIPTION:
      ${jobDescription}

      COMPANY INTELLIGENCE (from research — use these to make the letter specific):
      ${JSON.stringify(researchData || {}, null, 2)}

      Output strictly the HTML cover letter. No preamble, no explanation, no markdown fences.
      `;
    }

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userPrompt,
        config: {
            temperature: 0.2,
            systemInstruction: systemPrompt
        }
    });

    return res.status(200).json({ draft: response.text.trim() });

  } catch (error) {
    console.error(`Drafting error [${req.body?.type || 'unknown'}]:`, error.message);
    return res.status(500).json({ error: 'Failed to generate drafted asset' });
  }
}
