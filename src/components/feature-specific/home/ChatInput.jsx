import send from "../../../assets/home/send.svg";
import { useNavigate, useLocation } from "react-router";
import { useRef, useEffect } from "react";

function ChatInput({ onSend, recommendedInput }) {
  const navigate = useNavigate();
  const value = useRef("");
  const textareaRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (recommendedInput) {
      textareaRef.current.value = recommendedInput;
      value.current = recommendedInput;
    }
  }, [recommendedInput]);

  const handleInput = (e) => {
    value.current = e.target.value;

    // textarea 높이 자동 조절
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // 높이를 초기화
      textarea.style.height = `${textarea.scrollHeight}px`; // 내용에 맞게 높이 설정
    }
  };

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter" && !e.shiftKey) {
  //     e.preventDefault();
  //     const trimmedValue = value.current.trim();
  //     if (trimmedValue) {
  //       if (location.pathname === "/") {
  //         navigate("/main-chat", { state: { initialChat: trimmedValue } });
  //       } else {
  //         onSend(trimmedValue);
  //         textareaRef.current.value = "";
  //       }
  //     }
  //   }
  // };

  return (
    <div className="w-[755px] min-h-11 px-7 py-4 bg-sky-50 rounded-[30px] outline-[0.80px] outline-offset-[-0.80px] outline-sky-400/50 flex justify-between items-end shadow-md">
      <textarea
        ref={textareaRef}
        onChange={handleInput}
        placeholder="궁금한 내용을 작성해봐!"
        rows={1}
        className="w-[95%] outline-none text-lg font-medium text-neutral-700 resize-none overflow-hidden"
      />
      <img
        src={send}
        alt="send.svg"
        className="w-6 h-6 hover:cursor-pointer mb-0.5"
        onClick={() => {
          const trimmedValue = value.current.trim();
          if (trimmedValue) {
            if (location.pathname === "/") {
              navigate("/main-chat", { state: { initialChat: trimmedValue } });
            } else {
              onSend(trimmedValue);
              textareaRef.current.value = "";
            }
          }
        }}
      />
    </div>
  );
}

export default ChatInput;
