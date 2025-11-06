
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { sendMessageToAI } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: "Hi! I'm Rohan's AI assistant. Ask me anything about his portfolio." }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const newMessages: Message[] = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    const aiResponse = await sendMessageToAI(userInput);
    setMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Open AI Assistant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93L15 8h-3V4.07zm0 5.93H15l.87-2.07c.87.48 1.84.8 2.87.93H14v2zm0 4h3l-.87 2.07c-.87-.48-1.84-.8-2.87-.93H14v-2zm0 5.93v-4h3l.87 2.07c-.87.48-1.84-.8-2.87-.93z"/></svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-sm h-[70vh] max-h-[600px] flex flex-col z-50">
        <div className="glass-card rounded-t-lg p-4 flex justify-between items-center shadow-lg">
            <h3 className="font-bold text-white">Rohan's AI Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">&times;</button>
        </div>
        <div ref={chatBoxRef} className="flex-grow p-4 bg-slate-900/80 overflow-y-auto">
            {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
                    <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-200'}`}>
                        {msg.text}
                    </div>
                </div>
            ))}
            {isLoading && (
                <div className="flex justify-start mb-3">
                    <div className="bg-slate-700 text-slate-200 rounded-lg px-4 py-2">
                        <span className="animate-pulse">...</span>
                    </div>
                </div>
            )}
        </div>
        <form onSubmit={handleSendMessage} className="glass-card rounded-b-lg p-3 border-t border-slate-700">
            <div className="flex">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask about my skills..."
                    className="flex-grow bg-transparent text-white placeholder-slate-500 focus:outline-none"
                    disabled={isLoading}
                />
                <button type="submit" className="ml-2 text-indigo-400 hover:text-indigo-300 disabled:opacity-50" disabled={isLoading}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </button>
            </div>
        </form>
    </div>
  );
};

export default AIAssistant;
