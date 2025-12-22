import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Halo 👋 Aku asisten portfolio Sanda. Silakan tanya tentang skill, tools, atau proyek.",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply || "Maaf, terjadi kesalahan 🙏" },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Server sedang bermasalah 😥" },
      ]);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Robot Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700 shadow-lg hover:scale-105 transition"
      >
        <img
          src="/robot.png"
          alt="Chatbot"
          className="w-full h-full object-cover rounded-full"
        />
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-28 right-6 z-50 
                        w-[95vw] sm:w-[420px] 
                        h-[70vh] sm:h-[560px]
                        bg-zinc-900 border border-zinc-700 
                        rounded-2xl shadow-2xl 
                        flex flex-col 
                        animate__animated animate__fadeInUp">

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-700">
            <img
              src="/robot.png"
              alt="Robot"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-white">Chat Portfolio</h3>
              <p className="text-xs text-zinc-400">Asisten Virtual Sanda</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-zinc-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-4 py-2 rounded-xl leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-red-700 text-white"
                    : "mr-auto bg-zinc-800 text-zinc-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-zinc-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Tanya tentang saya, skill, atau proyek..."
              className="flex-1 bg-zinc-800 text-white px-4 py-3 rounded-xl text-sm focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-red-700 hover:bg-red-600 text-white px-5 rounded-xl"
            >
              Kirim
            </button>
          </div>
        </div>
      )}
    </>
  );
}
