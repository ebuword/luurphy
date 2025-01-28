import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY || '');

export const generateResponse = async (prompt: string) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini AI Hatası:', error);
    return 'Üzgünüm, şu anda yanıt üretemiyorum.';
  }
};

export const generatePostContent = async () => {
  const prompt = 'Sosyal medya için ilginç ve etkileşim alabilecek bir gönderi içeriği yaz. Türkçe olsun.';
  return generateResponse(prompt);
};

export const generateComment = async () => {
  const prompt = 'Bir sosyal medya gönderisine yapılabilecek pozitif bir yorum yaz. Türkçe olsun.';
  return generateResponse(prompt);
}; 