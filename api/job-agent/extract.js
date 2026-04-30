import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { resumeText } = req.body;
  if (!resumeText) return res.status(400).json({ error: 'Missing resume text' });

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const prompt = `
    Extract the candidate's contact information from the resume text below.
    Return VALID JSON ONLY matching this EXACT schema. Do not add or remove fields.
    If a field is not found in the text, use null. Do NOT infer, guess, or fabricate any value.

    {
      "name": "Full legal name exactly as written, or null",
      "email": "Email address exactly as written, or null",
      "phone": "Phone number exactly as written, or null",
      "location": "City, State exactly as written, or null",
      "linkedin": "Full LinkedIn URL or handle exactly as written, or null",
      "portfolio": "Portfolio or personal website URL exactly as written, or null"
    }

    RESUME TEXT:
    ${resumeText}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0,
        responseMimeType: 'application/json'
      }
    });

    let output = response.text.trim();
    if (output.startsWith('```json')) output = output.slice(7, -3).trim();
    else if (output.startsWith('```')) output = output.slice(3, -3).trim();

    return res.status(200).json(JSON.parse(output));

  } catch (error) {
    console.error('Contact extraction error:', error.message);
    return res.status(500).json({ error: 'Failed to extract contact info' });
  }
}
