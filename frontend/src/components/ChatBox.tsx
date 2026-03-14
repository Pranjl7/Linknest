import { Send } from "lucide-react";
// import type { SyntheticEvent } from "react";
import { useRef, useEffect, useState } from "react";
import stepfunLogo from "../assets/stepfun.png";
import axios from "axios";
import useContentProvider from "../store/ContentProvider";

export function Chatbox() {
  const [chat, setChat] = useState("");
  const [ischat, setIschat] = useState(false);
  const setQuestion = useContentProvider((state) => state.setQuestion);
  const setModel = useContentProvider((state) => state.setModel);
  const setTimetaken = useContentProvider((state) => state.setTimetaken);
  const setContent = useContentProvider((state) => state.setContent);

  async function askmodel() {
    // e.preventDefault();

    try {
      setQuestion(chat.trim());
      const payload = {
        role: "user",
        content: chat.trim(),
      };
      setChat("");
      setIschat(false);
      await axios
        .post(`${import.meta.env.VITE_API_URL}/chat`, payload)
        .then((response) => {
          setModel(response.data.message.model);
          setTimetaken(response.data.message.timetaken);
          setContent(response.data.message.content);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } catch (error) {
      console.log(error);
      alert("Something went wrong, plz try again later");
    }
  }
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  const handleInput = () => {
    if (textareaRef.current) {
      setChat(textareaRef.current.value);
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
      if (textareaRef.current.value.trim() == "") {
        setIschat(false);
      } else {
        setIschat(true);
      }
    }
  };

  useEffect(() => {
    handleInput();
  }, []);

  return (
    <div className="w-full rounded-2xl border border-[#2d2d33] bg-[#161618]/90 backdrop-blur-xl shadow-2xl flex flex-col p-2">
      {/* left-side */}
      <div className="flex items-end gap-2 px-2 pb-2">
        <textarea
          ref={textareaRef}
          name="chat-input"
          id="chat-input"
          placeholder="Ask Linknest anything..."
          onChange={handleInput}
          rows={1}
          value={chat}
          className="flex-1 max-h-30 min-h-11 bg-transparent text-gray-200 placeholder-gray-500 resize-none outline-none py-3 px-1 font-sans text-base overflow-hidden"
          autoFocus
        />

        {ischat && (
          <button
            type="submit"
            onClick={askmodel}
            className=" bg-white hover:bg-gray-200 p-2.5 text-black rounded-full transition-transform duration-300 active:scale-95 mb-0.5 shadow-sm flex items-center justify-center cursor-pointer "
          >
            <Send size={18} />
          </button>
        )}

        {!ischat && (
          <button
            type="button"
            disabled
            className=" bg-white/50 hover:bg-white/60 p-2.5 text-black rounded-full transition-transform duration-300 mb-0.5 shadow-sm flex items-center justify-center cursor-pointer disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        )}
      </div>
      <div className="border w-full border-white/10 my-1" />
      {/* right-side */}
      <div className="flex items-center justify-start py-1 px-2 mt-1">
        <div className="flex items-center justify-center gap-2 px-5 py-3 text-xs border border-white/10 rounded-md hover:bg-white/5 transition-colors">
          <img src={stepfunLogo} alt="StepFun Logo" className="size-4" />
          <p className="text-white/50 font-medium">StepFun: Step 3.5 Flash</p>
        </div>
      </div>
    </div>
  );
}
