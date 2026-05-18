"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

/** A single turn in the conversation. */
type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const STARTER_PROMPTS = [
  "I'm feeling overwhelmed today. Can you help me ground myself?",
  "How do I build a morning routine I'll actually stick to?",
  "I lost confidence at work. Where should I start?",
];

/**
 * Main chat interface. Posts user messages to the FastAPI `/api/chat` endpoint
 * and renders the coach's reply.
 */
export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi there — I'm your mindful coach. I'm here to listen and help with stress, motivation, habits, and confidence. What's on your mind today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setError(null);
    setInput("");
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
    }

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          typeof data.detail === "string"
            ? data.detail
            : "Something went wrong. Please try again.",
        );
      }

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply ?? "I couldn't generate a response. Please try again.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed.");
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  /** Grow the textarea to fit content (Shift+Enter for new lines). */
  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 128)}px`;
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 py-8 sm:px-6">
      <header className="mb-6 text-center">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-coach-sage/10 px-3 py-1 text-sm font-medium text-coach-sage">
          <span className="h-2 w-2 rounded-full bg-coach-mint" aria-hidden />
          Online
        </div>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-coach-forest sm:text-4xl">
          Mindful Coach
        </h1>
        <p className="mt-2 text-coach-mist">
          Your supportive space for clarity, calm, and growth.
        </p>
      </header>

      <div
        className="chat-scroll mb-4 flex-1 space-y-4 overflow-y-auto rounded-2xl border border-coach-sand/80 bg-white/70 p-4 shadow-sm backdrop-blur-sm sm:p-6"
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-coach-cream px-4 py-3 text-coach-ink">
              <span className="flex gap-1" aria-label="Coach is typing">
                <span className="h-2 w-2 animate-bounce rounded-full bg-coach-mint [animation-delay:0ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-coach-mint [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-coach-mint [animation-delay:300ms]" />
              </span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {messages.length === 1 && !isLoading && (
        <div className="mb-4 flex flex-wrap gap-2">
          {STARTER_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => sendMessage(prompt)}
              className="rounded-full border border-coach-sage/30 bg-white px-3 py-1.5 text-left text-sm text-coach-ink transition hover:border-coach-sage hover:bg-coach-sage/5"
            >
              {prompt}
            </button>
          ))}
        </div>
      )}

      {error && (
        <p
          className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800"
          role="alert"
        >
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <label htmlFor="chat-input" className="sr-only">
          Message to your coach
        </label>
        <textarea
          id="chat-input"
          ref={inputRef}
          rows={1}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Share what's on your mind…"
          disabled={isLoading}
          className="min-h-[48px] max-h-32 flex-1 resize-none rounded-xl border border-coach-sand bg-white px-4 py-3 text-coach-ink placeholder:text-coach-mist/70 focus:border-coach-sage focus:outline-none focus:ring-2 focus:ring-coach-sage/20 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="shrink-0 rounded-xl bg-coach-sage px-5 py-3 font-medium text-white transition hover:bg-coach-forest focus:outline-none focus:ring-2 focus:ring-coach-sage focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </form>

      <p className="mt-3 text-center text-xs text-coach-mist">
        Not a substitute for professional mental health care.
      </p>
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-[15px] leading-relaxed ${
          isUser
            ? "rounded-br-md bg-coach-sage text-white"
            : "rounded-bl-md bg-coach-cream text-coach-ink"
        }`}
      >
        {!isUser && (
          <span className="mb-1 block text-xs font-medium text-coach-sage">
            Coach
          </span>
        )}
        {message.content}
      </div>
    </div>
  );
}
