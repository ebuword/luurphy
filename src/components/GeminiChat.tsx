import { useState } from 'react';
import { motion } from 'framer-motion';

const GeminiChat = () => {
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    // Kullanıcı mesajını ekle
    setMessages(prev => [...prev, { text: input, isUser: true }]);

    try {
      // Gemini AI API'si ile entegrasyon
      const response = await fetch('API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      
      // AI yanıtını ekle
      setMessages(prev => [...prev, { text: data.response, isUser: false }]);
    } catch (error) {
      console.error('AI yanıtı alınamadı:', error);
    }

    setInput('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 h-[600px] flex flex-col">
      <h2 className="text-xl font-bold mb-4">Gemini AI Asistan</h2>
      
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-3 rounded-lg ${
              message.isUser 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-700'
            }`}>
              {message.text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
          placeholder="Mesajınızı yazın..."
        />
        <button
          onClick={handleSend}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
        >
          Gönder
        </button>
      </div>
    </div>
  );
};

export default GeminiChat; 