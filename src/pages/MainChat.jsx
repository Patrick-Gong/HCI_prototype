import ChatInput from "../components/feature-specific/home/ChatInput";
import PageLayout from "../components/common/PageLayout";
import { useLocation } from "react-router";
import { useEffect, useState, useRef, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MainChat() {
  const location = useLocation();
  const initialChat = location.state?.initialChat;
  const [chatHistory, setChatHistory] = useState([]);
  const hasSentMessage = useRef(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(
    async (message) => {
      if (!message || !message.trim()) return;
      setIsLoading(true);
      setChatHistory((prev) => [
        ...prev,
        { id: prev.length + 1, content: message, sender: "user" },
      ]);
      console.log("chatHistory", chatHistory);
      try {
        const response = await fetch("http://localhost:3000/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: message,
            history: chatHistory.map((msg) => ({
              role: msg.sender,
              content: msg.content,
            })),
          }),
        });

        const data = await response.json();
        console.log(data);
        if (data.error) {
          console.error("Error:", data.error);
          return;
        }

        setChatHistory((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            content: data.text,
            sender: "model",
          },
        ]);
        setIsLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setIsLoading(false);
      }
    },
    [chatHistory]
  );

  useEffect(() => {
    console.log("useEffect 실행 중");
    if (initialChat && initialChat.trim() && !hasSentMessage.current) {
      hasSentMessage.current = true;
      setTimeout(() => {
        sendMessage(initialChat);
      }, 0);
    }
  }, [initialChat]);

  return (
    <PageLayout>
      <video autoPlay muted className="w-44 h-36 object-contain self-start">
        <source src="/video_1.mp4" type="video/mp4" />
      </video>
      <div className="w-[90%] flex flex-col gap-7 mb-48">
        {chatHistory.map((chat) =>
          chat.sender === "user" ? (
            <p
              key={chat.id}
              className="self-end px-5 py-2.5 bg-sky-50 rounded-[20px]"
            >
              {chat.content}
            </p>
          ) : (
            <div
              className="w-full p-2.5 text-start bg-white rounded-[10px] outline-1 outline-offset-1 outline-blue-300 whitespace-pre-wrap chat-message-container"
              key={chat.id}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {chat.content}
              </ReactMarkdown>
            </div>
          )
        )}
        {isLoading && (
          <div className="w-full p-2.5 text-start bg-white rounded-[10px] outline-1 outline-offset-1 outline-blue-300 whitespace-pre-wrap chat-message-container">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>
      <div className="fixed w-[92%] bottom-0 pb-10 pt-40 flex justify-center items-center bg-linear-to-b from-white/0 via-white/80 to-white">
        <ChatInput onSend={sendMessage} />
      </div>
    </PageLayout>
  );
}

export default MainChat;
