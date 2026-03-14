import { SquarePen } from "lucide-react";
import { Chatbox } from "../components/ChatBox";
import useContentProvider from "../store/ContentProvider";
import stepfunLogo from "../assets/stepfun.png";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Chat() {
  const question = useContentProvider((state) => state.question);
  const model = useContentProvider((state) => state.model);
  const timetaken = useContentProvider((state) => state.timetaken);
  const content = useContentProvider((state) => state.content);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="border border-[#2d2d33] rounded-3xl w-full h-[80vh] min-h-150 flex overflow-hidden bg-[#111214] shadow-sm relative">
        {/* Left Sidebar */}
        <div className="flex flex-col border-r border-[#2d2d33] w-60 p-5 shrink-0 bg-[#161618]/50">
          <h1 className="text-3xl font-archi font-semibold text-gray-200 mb-8 pl-2 tracking-wide">
            Linknest
          </h1>

          <button className="w-full cursor-pointer flex items-center gap-2 text-white/50 py-2 mb-4 hover:text-gray-300 transition-colors">
            <SquarePen
              size={17}
              className="text-gray-400 group-hover:text-gray-200 transition-colors"
            />
            <span className="text-sm font-medium tracking-wide">New chat</span>
          </button>

          <div className="w-full border-b border-white/10 my-4" />

          <div className="flex flex-col flex-1 overflow-y-auto">
            <h2 className="text-gray-500 font-medium text-xs mb-4 pl-2 uppercase tracking-widest">
              recent
            </h2>
            <div className="flex flex-col gap-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-12 rounded-xl border border-[#2d2d33] hover:bg-white/5 cursor-pointer transition-colors"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Main Chat Area */}
        <div className="flex flex-col flex-1 relative bg-[#111214]">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col gap-8 pb-32">
            {/* User Message */}
            <div className="self-end max-w-[80%]">
              <div className="border border-[#2d2d33] rounded-2xl rounded-tr-sm px-5 py-3 text-gray-200 font-medium bg-[#1e1e24]">
                {question}
              </div>
            </div>

            {/* AI Message */}
            <div className="self-end w-full max-w-178">
              <div className="border border-[#2d2d33] rounded-2xl rounded-tl-sm overflow-hidden bg-[#161618]">
                <div className="flex items-center justify-between px-5 py-3 border-b border-[#2d2d33] bg-[#1a1a1d]">
                  <div className="flex gap-x-2 items-center">
                    <img
                      src={stepfunLogo}
                      alt="StepFun Logo"
                      className="size-3"
                    />
                    <span className="text-xs text-gray-400 font-mono tracking-wider">
                      {model}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono tracking-wider">
                    {timetaken}
                  </span>
                </div>
                <div className="px-5 py-6 text-gray-300 leading-relaxed font-sans prose prose-invert">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-2xl font-semibold mt-4 mb-4">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-lg font-semibold mt-5 mb-4">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-base font-medium mt-5 mb-3">
                          {children}
                        </h3>
                      ),

                      p: ({ children }) => <p className="mb-10">{children}</p>,

                      ul: ({ children }) => (
                        <ul className="list-disc ml-5 mb-10">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal ml-5 mb-10">{children}</ol>
                      ),

                      table: ({ children }) => (
                        <table className="border border-neutral-700 text-sm my-3 w-full">
                          {children}
                        </table>
                      ),

                      th: ({ children }) => (
                        <th className="border border-neutral-700 px-3 py-2 bg-neutral-800 text-left">
                          {children}
                        </th>
                      ),

                      td: ({ children }) => (
                        <td className="border border-neutral-700 px-3 py-2">
                          {children}
                        </td>
                      ),

                      code({ inline, className, children }) {
                        const match = /language-(\w+)/.exec(className || "");

                        return !inline ? (
                          <SyntaxHighlighter
                            style={oneDark}
                            language={match?.[1] || "javascript"}
                            PreTag="div"
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        ) : (
                          <code className="bg-neutral-800 px-1 py-0.5 rounded text-xs">
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
          {/* Input Area (Chatbox) */}
          <div className="absolute bottom-5 left-0 right-0 px-6 md:px-10 flex justify-center pointer-events-none">
            <div className="pointer-events-auto w-full max-w-3xl">
              <Chatbox />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs text-white/40">
        Linknest can make mistakes. Check important info.
      </p>
    </div>
  );
}

export default Chat;
