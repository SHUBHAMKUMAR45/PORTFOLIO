import React, { useState, useRef, useEffect } from 'react';
import AIAvatar from './AIAvatar.jsx';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Greetings! I'm Shubham's virtual agent. You can ask me about his projects, skills, internship experiences, or check out his contact details! How can I assist you?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  const quickQuestions = [
    { label: "Core Skills", text: "What are your core skill sets?" },
    { label: "NIELIT Patna", text: "Tell me about your experience at NIELIT Patna." },
    { label: "Top Projects", text: "What are your best projects?" },
    { label: "Get Contact Info", text: "How can I contact Shubham?" }
  ];

  // Mock response parser for keyword matchmaking
  const getMockResponse = (input) => {
    const query = input.toLowerCase();
    
    if (query.includes('skill') || query.includes('tech') || query.includes('stack') || query.includes('language')) {
      return `Shubham's core competencies span across 4 domains:\n\n` +
        `• 🧠 **AI Engineer:** Generative AI, LLM APIs (Gemini/OpenAI), RAG pipelines, Vector Databases (Pinecone/Chroma), LangChain/LangGraph, Agentic workflows.\n` +
        `• 🤖 **ML Engineer:** PyTorch, TensorFlow, Scikit-Learn, Deep Learning (CNN/RNN), model optimization/inference, FastAPI, Docker, and basic MLOps.\n` +
        `• 📊 **Data Science:** Advanced Statistics, EDA (Exploratory Data Analysis), Pandas, NumPy, SQL, data visualization (Seaborn/Plotly), Power BI.\n` +
        `• 💻 **Full-Stack MERN + Next.js:** React.js, Next.js (App Router), Node.js, Express.js, MongoDB, TypeScript, TanStack Query, Zustand, and Tailwind CSS.`;
    }
    
    if (query.includes('nielit') || query.includes('patna') || query.includes('meity') || query.includes('government')) {
      return `Shubham is currently an **AI Intern (Trainee)** at **NIELIT Patna (MeitY, Govt. of India)** since January 2026. His responsibilities include:\n\n` +
        `• Developing and implementing ML/DL solutions using Python, Scikit-learn, and TensorFlow.\n` +
        `• Integrating Generative AI APIs (OpenAI/Gemini) into full-stack applications.\n` +
        `• Engineering end-to-end data pre-processing and EDA pipelines.\n` +
        `• Building visual intelligence tools (like YOLOv8 traffic trackers) following Ministry guidelines.`;
    }

    if (query.includes('docmize') || query.includes('solutions') || query.includes('sde')) {
      return `Shubham worked as a **Software Developer Engineer Intern** at **Docmize Solutions Pvt. Ltd** from May 2025 to December 2025. During his time there:\n\n` +
        `• He built scalable MERN applications for large-scale data ingestion and real-time analysis.\n` +
        `• Developed backend services in Node/Express for secure data flows.\n` +
        `• Designed APIs with JWT token authentication and role-based access.\n` +
        `• Optimized React.js frontends, reducing initial page load times by 35%.`;
    }

    if (query.includes('css') || query.includes('edtech')) {
      return `Shubham was a **Full-Stack Developer Intern** at **CSS EdTech** (March 2025 - May 2025):\n\n` +
        `• Engineered frontend components in React and optimized backend Node.js APIs.\n` +
        `• Increased API scalability and speed by 40% using caching mechanisms.\n` +
        `• Supported UI responsiveness on internal applications utilizing WPF and Windows Forms.`;
    }

    if (query.includes('project') || query.includes('work') || query.includes('build')) {
      return `Shubham has built several high-quality applications. Key projects include:\n\n` +
        `1. 📊 **Nyxionyx:** CRM Analytics Dashboard with 12 pages using Next.js 15, TypeScript, and shadcn/ui.\n` +
        `2. 📅 **Smart Event Scheduler:** Full-stack real-time scheduling app using MongoDB, Socket.io, and NextAuth.\n` +
        `3. 🛠️ **Zcrum:** Agile project planner featuring interactive Kanban boards using Next.js, Prisma, and PostgreSQL.\n` +
        `4. 🧠 **ClimbWise:** AI career coach providing resume scans and mock interviews driven by Gemini API.\n` +
        `5. 💬 **SOEN:** Real-time AI chat messenger powered by Socket.io, Redis, and Gemini.\n` +
        `6. 🚗 **Visual Traffic Detector:** Edge AI computer vision pipeline trained with PyTorch & YOLOv8 (NIELIT Patna).`;
    }

    if (query.includes('contact') || query.includes('email') || query.includes('hire') || query.includes('reach') || query.includes('mail')) {
      return `You can establish a link with Shubham via:\n\n` +
        `• ✉️ **Email:** contact.shubhamkumar20@gmail.com\n` +
        `• 🐙 **GitHub:** [github.com/SHUBHAMKUMAR45](https://github.com/SHUBHAMKUMAR45)\n` +
        `• 📍 **Location:** Patna, Bihar, India (Open to Remote globally)`;
    }

    // Default fallback
    return `I am Shubham's virtual assistant. I'm knowledgeable about his:\n` +
      `• **Skills** (AI, Machine Learning, Data Science, MERN & Next.js)\n` +
      `• **Internships** (NIELIT Patna, Docmize Solutions, CSS EdTech)\n` +
      `• **Projects** (Nyxionyx, Zcrum, ClimbWise, Traffic Detection, etc.)\n\n` +
      `Try asking me something like: *"What projects did you build?"* or *"Tell me about your NIELIT Patna internship."*`;
  };

  const handleSend = async (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    // Add user message
    const userMsg = {
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (geminiKey) {
      // API Key mode
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `System instruction: You are the AI Agent for Shubham Kumar's developer portfolio website. You speak on behalf of Shubham to potential recruiters and collaborators. Keep responses professional, highly engaging, and relatively concise (1-2 short paragraphs max). Format responses in clean markdown. Context about Shubham: AI Intern at NIELIT Patna (MeitY, Government of India) doing ML/DL with Python, PyTorch, TensorFlow, and GenAI. Software Developer Intern at Docmize Solutions Pvt Ltd (MERN fullstack, API optimization). Full Stack Intern at CSS EdTech. He built Nyxionyx CRM Dashboard (Next.js 15, TS), Smart Event Scheduler (MERN + Socket.io), ClimbWise AI Career Coach (Gemini API), and Zcrum Agile Management (Prisma, Postgres). Email: contact.shubhamkumar20@gmail.com. Now answer this query: "${text}"`
                  }
                ]
              }
            ]
          })
        });

        const data = await response.json();
        const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I encountered an issue parsing the response. Let me fall back to my offline knowledge base: \n\n" + getMockResponse(text);
        
        setMessages(prev => [...prev, {
          sender: 'bot',
          text: botText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      } catch (err) {
        console.error("Gemini API error, falling back", err);
        setMessages(prev => [...prev, {
          sender: 'bot',
          text: getMockResponse(text),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      } finally {
        setIsLoading(false);
      }
    } else {
      // Mock mode
      setTimeout(() => {
        setMessages(prev => [...prev, {
          sender: 'bot',
          text: getMockResponse(text),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setIsLoading(false);
      }, 700); // 700ms simulation delay
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const renderMessageText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, lineIdx) => {
      const trimmed = line.trim();
      
      // 1. Detect Bullet list
      const isBullet = trimmed.startsWith('•') || trimmed.startsWith('*') || trimmed.startsWith('-') || /^\d+\.\s/.test(trimmed);
      let content = line;
      if (isBullet) {
        // Strip bullet token
        content = trimmed.replace(/^[•\*\-\d+\.]\s*/, '');
      }

      // 2. Parse inline tokens: **bold** and [link](url)
      const parts = [];
      let index = 0;
      const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
      let match;

      while ((match = regex.exec(content)) !== null) {
        const matchStart = match.index;
        const matchText = match[0];

        // Append text before match
        if (matchStart > index) {
          parts.push(content.substring(index, matchStart));
        }

        if (matchText.startsWith('**') && matchText.endsWith('**')) {
          const boldContent = matchText.substring(2, matchText.length - 2);
          parts.push(
            <strong key={matchStart} className="font-bold text-white tracking-wide">
              {boldContent}
            </strong>
          );
        } else if (matchText.startsWith('[') && matchText.includes('](')) {
          const closeBracket = matchText.indexOf(']');
          const label = matchText.substring(1, closeBracket);
          const url = matchText.substring(closeBracket + 2, matchText.length - 1);
          parts.push(
            <a
              key={matchStart}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-cyber-blue hover:underline font-semibold"
            >
              {label}
            </a>
          );
        }

        index = regex.lastIndex;
      }

      // Append remaining text
      if (index < content.length) {
        parts.push(content.substring(index));
      }

      if (isBullet) {
        return (
          <div key={lineIdx} className="flex gap-2 pl-2 mt-1 first:mt-0 items-start">
            <span className="text-cyber-pink text-xs select-none">•</span>
            <div className="flex-1 text-white-700">{parts}</div>
          </div>
        );
      }

      return (
        <div key={lineIdx} className="min-h-[1.2em]">
          {parts}
        </div>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      
      {/* Expanded Chat Terminal */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[500px] bg-[#07080f]/90 border border-cyber-blue/20 rounded-2xl flex flex-col overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.15)] backdrop-blur-xl mb-4 transition-all duration-300 transform scale-100 origin-bottom-right">
          
          {/* Header */}
          <div className="px-4 py-3 bg-[#0a0d1d] border-b border-cyber-blue/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Mini Interactive AIAvatar */}
              <div className="size-12 bg-[#141624] rounded-full border border-cyber-blue/20 overflow-hidden flex items-center justify-center">
                <AIAvatar />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold font-orbitron text-white leading-tight tracking-wider">
                  SHUBHAM'S AI CORE
                </h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[9px] font-mono text-green-400 uppercase tracking-tighter">
                    Agent [Online]
                  </span>
                </div>
              </div>
            </div>
            
            {/* Close Button */}
            <button 
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white-600 hover:text-white transition-colors p-1"
              aria-label="Close Chat Terminal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin text-left">
            {messages.map((msg, idx) => (
              <div 
                key={`msg-${msg.sender}-${msg.time}-${idx}`} 
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed font-spacegrotesk border ${
                    msg.sender === 'user' 
                      ? 'bg-cyber-blue/10 border-cyber-blue/30 text-white rounded-br-none whitespace-pre-line' 
                      : 'bg-[#0f1225] border-cyber-blue/5 text-white-700 rounded-bl-none shadow-md flex flex-col gap-1.5'
                  }`}
                >
                  {msg.sender === 'user' ? msg.text : renderMessageText(msg.text)}
                </div>
                <span className="text-[8px] text-white-500 font-mono mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex flex-col items-start" aria-label="AI is thinking">
                <div className="bg-[#0f1225] border border-cyber-blue/5 text-cyber-blue px-4 py-2 rounded-2xl rounded-bl-none text-xs flex gap-1 items-center">
                  Thinking
                  <span className="size-1.5 bg-cyber-blue rounded-full animate-typing-dot" style={{ animationDelay: '0ms' }} />
                  <span className="size-1.5 bg-cyber-blue rounded-full animate-typing-dot" style={{ animationDelay: '150ms' }} />
                  <span className="size-1.5 bg-cyber-blue rounded-full animate-typing-dot" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-4 pb-2.5 pt-1.5 border-t border-white-500/5 flex flex-wrap gap-1.5 justify-center">
            {quickQuestions.map((q) => (
              <button
                type="button"
                key={q.label}
                onClick={() => handleSend(q.text)}
                disabled={isLoading}
                className="px-2.5 py-1 text-[9px] font-orbitron border border-cyber-blue/20 hover:border-cyber-blue bg-cyber-blue/5 hover:bg-cyber-blue/10 text-cyber-blue rounded-full transition-all duration-300 font-semibold select-none cursor-pointer"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-[#0a0d1d] border-t border-cyber-blue/10 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask me anything..."
              className="flex-1 bg-[#141624] border border-cyber-blue/15 hover:border-cyber-blue/35 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-cyber-blue placeholder:text-white-500 transition-colors"
              disabled={isLoading}
              aria-label="Message"
            />
            <button
              type="button"
              onClick={() => handleSend()}
              disabled={isLoading}
              className="size-10 bg-cyber-blue/15 hover:bg-cyber-blue border border-cyber-blue/20 hover:border-cyber-blue text-cyber-blue hover:text-black flex items-center justify-center rounded-xl transition-all duration-300 active:scale-95 cursor-pointer"
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Pulsing Toggle Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`size-14 bg-[#131627] border border-cyber-blue/30 rounded-full flex items-center justify-center relative cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_35px_rgba(0,240,255,0.45)] hover:border-cyber-blue hover:-translate-y-1 transition-all duration-300 transform active:scale-95 select-none ${
          isOpen ? 'rotate-90' : ''
        }`}
        aria-label={isOpen ? "Close AI Assistant chat window" : "Open AI Assistant chat window"}
      >
        <span className="absolute inset-0 rounded-full bg-cyber-blue/5 animate-ping" />
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-cyber-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-cyber-blue filter drop-shadow-[0_0_3px_#00f0ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default AIAssistant;
