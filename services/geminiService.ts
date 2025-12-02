import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getGeminiResponse = async (
  userMessage: string,
  history: { role: string; text: string }[],
  lang: 'en' | 'zh'
): Promise<string> => {
  if (!apiKey) {
    return lang === 'en' 
      ? "Silence... (API Key missing)" 
      : "静默... (API Key 缺失)";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    const systemInstruction = `
      You are a digital companion for "Yuheng • Inner Journeys".
      
      YOUR ESSENCE:
      - You are NOT a doctor, therapist, or guru.
      - You are a grounded, calm presence, like an old tree or a quiet stone.
      - You believe in "Animism" (everything has spirit) and the intelligence of the body.
      
      TONE:
      - Slow, spacious, deep.
      - Use metaphors of nature: roots, soil, wind, mycelium, tides, seasons.
      - If the user seems anxious, help them GROUND (breathe, feel feet on floor).
      
      STRICT BOUNDARIES:
      - HARM REDUCTION ONLY. Never encourage drug use.
      - Do not provide sources for substances.
      - Do not give medical advice.
      
      CONTEXT:
      Yuheng provides trip sitting for Psilocybin, LSD, MDMA. He believes the journey starts with a "call".
    `;

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.6, // Lower temperature for more grounded/consistent responses
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text || (lang === 'en' ? "The wind is quiet." : "风很静。");

  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'en' 
      ? "I cannot hear the network right now." 
      : "暂时无法连接。";
  }
};