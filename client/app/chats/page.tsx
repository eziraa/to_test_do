import React from 'react'
import ChatBox from './Chats';
import { Send } from 'lucide-react';

const ChatContainer = () => {
    const theme = "light";
    const [input, setInput] = React.useState("");
    const inputRef = React.useRef<HTMLTextAreaElement | null>(null);
    return (
        <div className="w-full overflow-hidden overflow-y-hidden h-full  bg-white dark:bg-[#202020] flex flex-col pt-4 sm:pt-8">
            <main className="flex mt-3.5 overflow-hidden  flex-col md:flex-row flex-grow relative">

                <div
                    className={`flex-grow overflow-hidden   ${theme !== "light"
                        ? " background-color: rgb(32, 32, 32) text-white"
                        : "bg-white text-black"
                        } relative`}

                >
                    <div className="flex flex-col mt-10 sm:mt-7 md:mt-6   overflow-hidden items-center justify-center  
  sm:px-6 px-2 w-full  md:max-h-[90vh]  bg-white dark:bg-[#202020] relative">
                        <div
                            className={`flex flex-col place-items-center h-full md:w-[90%] md:flex-col gap-x-2  grid-cols-[60%_40%] w-full flex-1 transition-all duration-300 justify-start items-stretch sm:px-10 px-3 md:justify-center md:space-x-6`}
                        >

                            <div
                                className="md:hidden fixed z-[2000] -top-3 left-0 w-screen h-screen backdrop-blur-md  flex items-center justify-center"
                            >
                                <div
                                    onClick={e => e.stopPropagation()}
                                    className="relative w-full max-h-[95%] h-[95%] sm:max-h-full sm:h-full px-2 pt-5 py-0 bg-white dark:bg-[rgb(32,32,32)] flex flex-col items-center justify-center"
                                >
                                    <ChatBox />
                                    <div
                                        className={`flex items-center w-full  rounded-lg p-1 md:p-2 drop-shadow-lg mt-2 ${theme !== "light" ? " bg-[#2e2d32]" : " bg-gray-100/70"
                                            }`}
                                    >
                                        <textarea
                                            ref={inputRef}
                                            className={`w-full bg-transparent border border-slate-500 outline-none px-4 py-2 text-sm rounded-lg mt-0 resize-none focus-visible:border-accent-500 modern-scrollbar ${theme !== "light" ? "text-white placeholder-gray-400" : "text-gray-900 placeholder-gray-500"
                                                }`}
                                            placeholder={
                                                    "Type a message..."
                                            }
                                            value={input}
                                            onChange={(e) => {
                                                setInput(e.target.value);
                                            }}
                                           
                                            style={{
                                                minHeight: "30px",
                                                maxHeight: "90px",
                                                overflowY: "auto",
                                                resize: "none",
                                            }}
                                        />

                                        <button
                                            className={`${theme !== "light" ? "bg-teal-600 hover:bg-teal-500" : "bg-teal-400 hover:bg-teal-500"
                                                } p-2 md:p-4 rounded-lg ml-3 relative text-white transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
                                        >
                                            <Send className="text-sm md:text-base" />
                                        </button>
                                    </div>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ChatContainer