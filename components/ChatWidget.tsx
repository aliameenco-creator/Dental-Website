"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi there! 👋 I'm the Smile Dental virtual assistant. How can I help you today? Feel free to ask about our services, pricing, or to schedule an appointment!",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Generate session ID
  const sessionId = useRef(
    typeof window !== "undefined"
      ? localStorage.getItem("chatSessionId") ||
        (() => {
          const id = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
          localStorage.setItem("chatSessionId", id);
          return id;
        })()
      : "server"
  );

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: `user_${Date.now()}`,
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Send to n8n webhook
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

      if (!webhookUrl) {
        // Demo mode - simulate AI response
        setTimeout(() => {
          const demoResponses = [
            "Thanks for your message! Our team typically responds within minutes during business hours. Is there anything specific about our services I can help you with?",
            "Great question! We offer a range of services including routine cleanings ($120-180), teeth whitening ($299-499), and dental implants (starting at $3,000). Would you like more details about any of these?",
            "I'd be happy to help you schedule an appointment! What works best for you - morning or afternoon? We're open Monday-Friday 8am-6pm and Saturday 9am-2pm.",
            "For emergencies, we offer same-day appointments. If you're experiencing pain, please call us directly at (555) 123-4567 for immediate assistance.",
          ];

          const assistantMessage: Message = {
            id: `assistant_${Date.now()}`,
            role: "assistant",
            content: demoResponses[Math.floor(Math.random() * demoResponses.length)],
            timestamp: new Date(),
          };

          setMessages((prev) => [...prev, assistantMessage]);
          setIsTyping(false);
        }, 1500);
        return;
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          sessionId: sessionId.current,
          timestamp: userMessage.timestamp.toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: `assistant_${Date.now()}`,
        role: "assistant",
        content: data.response || data.message || "Thanks for reaching out! Someone from our team will get back to you shortly.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: `error_${Date.now()}`,
        role: "assistant",
        content: "I apologize, but I'm having trouble connecting right now. Please call us at (555) 123-4567 or try again in a moment.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Quick action buttons
  const quickActions = [
    "Book appointment",
    "Services & pricing",
    "Emergency care",
    "Insurance info",
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-soft-lg
                   flex items-center justify-center transition-all duration-500
                   ${isOpen ? "bg-charcoal rotate-0" : "bg-primary-500 animate-bounce-gentle hover:scale-110"}`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Notification badge when closed */}
      {!isOpen && (
        <div className="fixed bottom-20 right-6 z-50 pointer-events-none">
          <div className="bg-white rounded-2xl shadow-soft-lg p-4 max-w-xs animate-fade-in-up">
            <p className="font-body text-sm text-charcoal">
              <span className="font-semibold">Need help?</span> Chat with our AI assistant!
            </p>
          </div>
        </div>
      )}

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)]
                   transition-all duration-500 ease-out transform origin-bottom-right
                   ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
      >
        <div className="bg-white rounded-3xl shadow-soft-lg overflow-hidden flex flex-col h-[600px] max-h-[calc(100vh-160px)]">
          {/* Header */}
          <div className="bg-primary-500 p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 48 48" fill="currentColor">
                <path d="M24 4C18 4 14 8 12 12C10 16 10 22 12 28C14 34 16 42 20 44C22 45 24 42 24 38C24 42 26 45 28 44C32 42 34 34 36 28C38 22 38 16 36 12C34 8 30 4 24 4Z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold text-white">Smile Dental</h3>
              <p className="text-white/70 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Online now
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center
                       hover:bg-white/20 transition-colors"
              aria-label="Minimize chat"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary-500 text-white rounded-br-md"
                      : "bg-white text-charcoal shadow-soft rounded-bl-md"
                  }`}
                >
                  <p className="font-body text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      message.role === "user" ? "text-white/60" : "text-charcoal/40"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-soft">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-charcoal/50 mb-2 font-body">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    onClick={() => {
                      setInputValue(action);
                      setTimeout(() => sendMessage(), 100);
                    }}
                    className="px-3 py-1.5 bg-white border border-primary-200 rounded-full text-xs
                             font-body text-primary-600 hover:bg-primary-50 hover:border-primary-300
                             transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-gray-50 rounded-xl border-0 font-body text-sm
                         focus:outline-none focus:ring-2 focus:ring-primary-500/20
                         placeholder:text-charcoal/40"
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center
                         text-white hover:bg-primary-600 transition-colors
                         disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-charcoal/40 mt-2 text-center font-body">
              Powered by AI • (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
