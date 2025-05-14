"use client"

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { messages } from "./data";


const ChatBox = () => {

  useEffect(() => {
    // Add custom scrollbar styles with better mobile support
    const style = document.createElement("style")
    style.textContent = `
    /* Base scrollbar styles */
    .modern-scrollbar {
      overflow-y: auto;
      -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
    }
    
    /* Desktop-specific styles */
    @media (min-width: 768px) {
      .modern-scrollbar {
        scrollbar-width: thin; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
      }
      
      .modern-scrollbar::-webkit-scrollbar {
        width: 2px;
        display: none;
      }
      
      .modern-scrollbar:hover::-webkit-scrollbar {
        display: block;
      }
      
      .modern-scrollbar::-webkit-scrollbar-track {
        background: transparent;
      }
      
      .modern-scrollbar::-webkit-scrollbar-thumb {
        background: ${"rgba(0, 0, 0, 0.1)"};
        border-radius: 20px;
      }
      
      .modern-scrollbar::-webkit-scrollbar-thumb:hover {
        background: ${"rgba(0, 0, 0, 0.2)"};
      }
    }
  `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const [numberOfRows, setNumberOfRows] = useState(1)

  const lastMessageRef = useRef<HTMLDivElement | null>(null)
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  const chatEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])



  const scrollToBottom = () => {
    if (chatEndRef.current) {
      // For iOS Safari and other mobile browsers
      setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }


  useEffect(() => {
    // Auto resize the textarea based on its scrollHeight
    if (inputRef.current) {
      inputRef.current.style.height = "auto" // Reset height to auto first
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px` // Set height based on scrollHeight
    }
  }, [input])

  return (
    <div
      className={`w-full border   border-red-500 h-[100%] flex-grow overflow-hidden shadow-lg md:shadow-none gap-2 rounded-xl  md:flex flex-col ${ "bg-[#f7f8fa] text-black"}`}
    >
    
      <div
        className={`flex-1 overflow-x-hidden overflow-y-auto custom-scrollbar md:max-h-[80vh] max-h-[calc(100vh-180px)] h-full md:h-[75vh] rounded-lg p-3 ${"border-gray-300 bg-[#f7f8fa]"}`}
      >
        <div className="h-full  pr-2">
          <div className="space-y-6">
            {messages.map((msg, index) => (
              <div
                ref={index === messages.length - 1 ? lastMessageRef : null}
                key={index}
                className={`flex relative ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender !== "user" && msg.imageUrl && (
                  <div className="flex items-end mb-2">
                    <img src={msg.imageUrl || "/placeholder.svg"} alt="Bot" className="w-8 h-8 rounded-full mr-2" />
                  </div>
                )}
                <div
                  className={`px-4 relative py-2 rounded-lg text-sm break-words max-w-[85%] ${
                    msg.sender === "user"
                      ? "bg-teal-500/90 text-white"
                      : "bg-white text-[#121212]"
                  }`}
                >
                  <div
                    className={`font-semibold text-sm ${msg.sender === "user" ? "dark:text-white" : "text-[#121212] dark:text-white"}`}
                  >
                    { msg.sender}
                  </div>
                  <div>
                    {msg.text }
                   
                  </div>
                  {msg.text && (
                    <div className={`text-xs ${msg.sender === "user" ? "text-gray-200" : "text-gray-400"}`}>
                      {msg.date}
                    </div>
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="flex ml-2 items-end mb-2">
                    {msg.imageUrl ? (
                      <img src={msg.imageUrl || "/placeholder.svg"} alt="User" className="w-8 h-8 rounded-full mr-2" />
                    ) : (
                      <span className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white text-xl">
                        { "U"}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatBox
