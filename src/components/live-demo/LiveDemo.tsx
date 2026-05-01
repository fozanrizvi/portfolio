import React, { useState, useRef, useEffect } from "react";

const RAG_API_URL = process.env.REACT_APP_RAG_API_URL || "";

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: string[];
}

const SUGGESTIONS = [
  "What technologies does Fozan specialize in?",
  "Tell me about Fozan's AI and RAG experience",
  "What projects has Fozan built?",
  "What is Fozan's cloud experience?",
  "How many years of experience does Fozan have?",
  "Has Fozan worked with microservices?",
];

const LiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm an AI assistant powered by a RAG system built with FastAPI, BM25 retrieval, and Llama 3 (Groq). Ask me anything about Fozan's experience, skills, or projects!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const ask = async (question: string) => {
    if (!question.trim() || loading) return;

    const userMsg: Message = { role: "user", content: question };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${RAG_API_URL}ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      const assistantMsg: Message = {
        role: "assistant",
        content: data.answer,
        sources: data.sources,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      setError("Failed to get response. Please try again.");
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="live-demo" className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            Live <span className="text-accent-cyan">RAG Demo</span>
          </h2>
          <div className="section-divider"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            A live RAG (Retrieval-Augmented Generation) system built with{" "}
            <span className="text-accent-cyan">FastAPI</span>,{" "}
            <span className="text-accent-cyan">BM25 retrieval</span>, and{" "}
            <span className="text-accent-cyan">Llama 3</span> running on{" "}
            <span className="text-accent-pink">AWS Lambda</span>. Ask it anything about my background!
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["FastAPI", "Python", "BM25 RAG", "Llama 3", "AWS Lambda", "REST API"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono border border-accent-cyan/30 text-accent-cyan rounded-full bg-accent-cyan/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Chat window */}
        <div className="card-base rounded-2xl overflow-hidden border border-white/10">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-3 text-xs text-gray-400 font-mono">fozan-rag-api • AWS Lambda</span>
            <span className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs text-green-400">Live</span>
            </span>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-primary/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] ${msg.role === "user" ? "order-2" : "order-1"}`}>
                  {msg.role === "assistant" && (
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent-cyan to-accent-turquoise flex items-center justify-center text-xs font-bold text-primary">
                        AI
                      </div>
                      <span className="text-xs text-gray-500">RAG Assistant</span>
                    </div>
                  )}
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-accent-cyan to-accent-turquoise text-primary font-medium rounded-tr-sm"
                        : "bg-secondary text-gray-200 rounded-tl-sm border border-white/5"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {msg.sources.map((src) => (
                        <span
                          key={src}
                          className="text-xs px-2 py-0.5 rounded-full bg-accent-pink/10 text-accent-pink border border-accent-pink/20"
                        >
                          {src}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-secondary border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2 h-2 rounded-full bg-accent-cyan animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-accent-cyan animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 rounded-full bg-accent-cyan animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="text-center text-red-400 text-sm py-2">{error}</div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div className="px-4 py-2 border-t border-white/5 bg-secondary/30">
            <p className="text-xs text-gray-500 mb-2">Try asking:</p>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {SUGGESTIONS.slice(0, 4).map((s) => (
                <button
                  key={s}
                  onClick={() => ask(s)}
                  disabled={loading}
                  className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10 transition-colors disabled:opacity-40 flex-shrink-0"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-secondary/50">
            <form
              onSubmit={(e) => { e.preventDefault(); ask(input); }}
              className="flex gap-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Fozan's skills, experience, or projects..."
                disabled={loading}
                className="flex-1 bg-primary/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-turquoise text-primary font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-40"
              >
                {loading ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </form>
            <p className="text-xs text-gray-600 mt-2 text-center font-mono">
              POST /ask → BM25 retrieval → Llama 3 generation → JSON response
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
