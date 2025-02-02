import { useState } from "react";
import { askAI } from "../api/nim-api";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");
    setIsLoading(true);

    try {
      const aiResponse = await askAI(input);
      setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("AI API Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Error fetching AI response." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAsk();
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md p-4 bg-whiteblue shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-primary mb-4">AI Assistant</h2>

      <div className="w-full h-60 overflow-y-auto border p-3 rounded-lg bg-white mb-4">
        {messages.length === 0 && (
          <p className="text-gray-500 text-center">
            Ask anything about a country!
          </p>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-1 rounded-lg ${
              msg.role === "user"
                ? "bg-blue-200 text-right"
                : "bg-gray-200 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <p className="text-gray-500 text-center">AI is thinking...</p>
        )}
      </div>

      <div className="flex w-full justify-between">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-[65%] sm:w-[70%] border p-2 rounded-lg placeholder:text-sm"
          placeholder="Ask about a country..."
        />
        <button
          onClick={handleAsk}
          className="bg-white text-gray-900 px-4 py-2 text-sm rounded-lg"
        >
          Ask AI
        </button>
      </div>
    </div>
  );
};

export default Chat;
