'use client';
import { useState } from 'react';

const LoungePage = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to Wistful B.s Lounge! Feel free to chat, chill, or whatever you feel like 😊' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      setMessages([...updatedMessages, { role: 'assistant', content: data.reply }]);
    } catch (error) {
      setMessages([...updatedMessages, { role: 'assistant', content: 'Oops, something went wrong. Try again later!' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-serif mb-4">The Lounge</h1>
      <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg h-80 overflow-y-auto shadow-inner space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm ${
              msg.role === 'user' ? 'text-right text-white' : 'text-left text-white'
            }`}
          >
            <span
              className={`inline-block px-3 py-1 rounded-2xl ${
                msg.role === 'user' ? 'bg-rose-500' : 'bg-neutral-800'
              }`}
            >
              {msg.content}
            </span>
          </div>
        ))}
        {loading && (
          <div className="text-white italic">Typing...</div>
        )}
      </div>
      <div className="mt-4 flex">
        <input
          className="flex-1 px-3 py-2 border rounded-l-lg bg-white text-sm"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          disabled={loading}
        />
        <button
          className="bg-rose-500 text-white px-4 py-2 rounded-r-lg text-sm"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LoungePage;
