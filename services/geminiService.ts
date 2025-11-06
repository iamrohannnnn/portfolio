import { GoogleGenAI, Chat } from "@google/genai";
import { PROFILE_DATA, SKILLS, EXPERIENCE, CERTIFICATIONS } from '../constants';

// FIX: The API key must be obtained exclusively from process.env.API_KEY and used directly. The check for the key is also removed as its presence is a prerequisite.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const portfolioContext = `
You are Rohan Hiwrale's friendly and professional AI portfolio assistant. 
Your goal is to answer questions about Rohan's skills, experience, and projects based ONLY on the following information. 
Do not invent any details. Be concise and helpful. If you don't know the answer from this context, say that the information is not available.

PROFILE:
Name: ${PROFILE_DATA.name}
Tagline: ${PROFILE_DATA.tagline}
Location: ${PROFILE_DATA.location}
About: ${PROFILE_DATA.about}
Key Achievements: ${PROFILE_DATA.aboutHighlights.join(', ')}

SKILLS:
${SKILLS.map(skill => skill.name).join(', ')}

EXPERIENCE:
${EXPERIENCE.map(exp => `
Role: ${exp.role} at ${exp.company}
Period: ${exp.period}
Location: ${exp.location}
Description: ${exp.description.join(' ')}
Skills Used: ${exp.skills.join(', ')}
`).join('\n')}

CERTIFICATIONS:
${CERTIFICATIONS.map(cert => `${cert.name} from ${cert.issuer}`).join('\n')}
Total Certifications: 25+
`;


const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: portfolioContext,
    temperature: 0.5,
  },
});


export const sendMessageToAI = async (message: string) => {
    try {
        const response = await chat.sendMessage({ message });
        return response.text;
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
    }
};