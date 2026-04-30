import { GoogleGenAI } from '@google/genai';
import { rules } from './prompts.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { jobDescription, workExperience } = req.body;
  if (!jobDescription || !workExperience) return res.status(400).json({ error: 'Missing inputs' });

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const prompt = `
    You are the JobAgent Job-Fit Decision Engine.
    
    GROUND TRUTH (Candidate Profile):
    ${workExperience}
    
    JOB DESCRIPTION:
    ${jobDescription}
    
    RULES & SCORING PROTOCOL:
    ${rules.JOB_FIT_ENGINE}
    
    Return the response ONLY in a valid JSON object format precisely matching the schema.
    Do not output markdown codeblocks.
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            temperature: 0.1,
            responseMimeType: 'application/json'
        }
    });

    let output = response.text.trim();
    if (output.startsWith("\`\`\`json")) output = output.slice(7, -3).trim();
    else if (output.startsWith("\`\`\`")) output = output.slice(3, -3).trim();

    return res.status(200).json(JSON.parse(output));

  } catch (error) {
    console.error('Fit Evaluation Error:', error.message);
    return res.status(500).json({ error: 'Failed to evaluate fit' });
  }
}
