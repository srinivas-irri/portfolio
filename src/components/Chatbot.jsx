import React, { useState, useRef, useEffect } from 'react';
import { GiVintageRobot, IoCloseOutline, FaUser, IoSend, BsStars, SiChatbot } from '../icons/reactIcons';

import useChat from '../hooks/useChat';
import { Fragment } from "react";
import("../assets/styles/chatbot.css");

export default function Chatbot() {

    const [isShow, setIsShow] = useState(false);
    const { messages, input, setInput, loading, sendMessage, welcomMessage, clearChat } = useChat();


    // Textarea auto resizer
    const textareaRef = useRef(null);

    // Scroll to bottom
    const bottomRef = useRef(null);

    const handleClose = () => {
        clearChat();
        setIsShow(false);
        //   welcomMessage();

        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value);

        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    };


    const handleSubmit = async () => {
        if (!input.trim()) return;

        await sendMessage(input);

        setInput("");

        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Prevent new line
            handleSubmit();
        }
    };

    useEffect(() => {
    bottomRef.current?.scrollIntoView({
        behavior: "smooth",
    });
}, [messages, loading]);

    return (
        <div className='relative h-full'>
            {isShow && (
                <div className="fixed top-0 left-0 z-98 bg-[rgba(0,_0,_0,_0.7)] w-full h-full min-[360px]:block min-[1024px]:hidden overlay"></div>
            )}

            <button className="fixed z-9999 bottom-[40px] right-10 rounded-md px-3 py-2 flex gap-1 items-center text-md font-lg text-white text-md cursor-pointer bg-[linear-gradient(135deg,#5B8DEF_0%,#3FD0C9_100%)] shadow-[0_4px_24px_rgba(91,141,239,.6)] transition-all duration-400 hover:-translate-y-1 hover:transition-all duration-400 max-[767px]:px-2 max-[767px]:rounded-[6px] max-[640px]:right-6 chat-fab" id="chatFab" title="Srini Portfolio Chatbot" onClick={() => setIsShow(!isShow)}>
                <SiChatbot className='w-[22px] h-[22] max-[767px]:w-[28px] h-[28px]' />
            </button>

            {/* Chat panel */}
            {isShow && (
                <div className="fixed z-9999 bottom-[112px] right-10 border-1 rounded-2xl border-[rgba(255,255,255,0.2)] bg-[#0f2125] max-w-[380px] max-[640px]:right-6 max-[640px]:max-w-[328px] max-[640px]:bottom-[100px] max-[640px]:z-[99999] w-full chat-panel" id="chatPanel">
                    <div className="flex items-center justify-between py-2 px-4 border-b-1 border-[#263452] chat-head">
                        <div className="chat-head-title">
                            <span className="text-[#00eaff] text-sm font-md chat-title-text">Srini AI Agent</span>
                        </div>
                        <button className="cursor-pointer chat-close-btn text-white" onClick={handleClose}><IoCloseOutline /></button>
                    </div>

                    {/* <div className="min-h-[450px] h-full chat-msgs" id="chatMsgs"></div> */}
                    <div className="overflow-auto min-h-[300px] max-h-[420px] chat-msgs px-3 pt-4 mt-3 messages flex flex-1 flex-col gap-4">
                        {welcomMessage && (
                            <div className='text-center text-white w-11/12 m-auto welcome_msg'>
                                <div className='text-[#a7c1fb] m-auto block mb-3 w-[40px] text-[40px] agent-icon'><GiVintageRobot /></div>
                                <div className='text-sm text-gray-400 leading-6 agent-message'>
                                    <p><span className='block mb-1'>"Hi! I'm Your AI Assistant.</span> Ask me about his experience, skills, projects, or availability.</p>
                                </div>
                            </div>
                        )}

                        {messages.map((msg, index) => (
                            <React.Fragment key={index}>
                                {msg.sender === "user" && (
                                    <div className="text-sm text-gray-300 user_response text-white mb-2 text-right flex gap-1 items-start justify-end">
                                        <span className='bg-[#48dfeb] text-[#194549] rounded-[8px_8px_0px_8px] px-2 py-[8px] block w-fit float-right'>{msg.text}</span>
                                        <div className='user_icon text-center text-[#00eaff] content-center justify-start w-[30px] h-[22px]'><FaUser className='m-auto w-[13px] h-[13px]' /></div>
                                    </div>
                                )}

                                {msg.sender === "bot" && (
                                    <div className="text-sm text-gray-300 bot_response leading-6 mb-3 text-left flex gap-3 items-start justify-start">
                                        <div className='user_icon flex items-center text-[#00eaff] text-center w-[30px] h-[30px] bot-icon'><BsStars className='m-auto w-[18px] h-[18px]' /></div>
                                        <div className='border-1 border-[#2a3b61] bg-[rgba(255,255,255,.06)] rounded-[8px_8px_8px_0px] px-4 py-2 break-words whitespace-pre-line text-left'>
                                            {msg.text.split("\n").map((line, index) => {
                                                const urlRegex = /(https?:\/\/[^\s]+)/;

                                                if (urlRegex.test(line)) {
                                                    const url = line.match(urlRegex)[0];

                                                    return (
                                                        <div>
                                                            {line.replace(url, "")}

                                                            <a
                                                                href={url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="block mt-1 text-sky-400 underline break-all hover:text-sky-300"
                                                            >
                                                                {url}
                                                            </a>
                                                        </div>
                                                    );
                                                }

                                                return <div key={index}>{line}</div>;
                                            })}
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>

                        ))}

                        {loading && (
                            <div className="bot_response flex">
                                <div className="bot-icon text-[#00eaff] text-center w-[30px] h-[30px]"><BsStars /></div>

                               <div className="text-sm text-gray-300 bot_response leading-6 mb-6 text-left flex gap-1 items-start justify-start">
                                  <div className='text-sm text-gray-400  loading_chat'>Loading...</div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-4 flex gap-3 items-center chat-input-row" id="chatInputRow">
                        <textarea id="chatInput" placeholder="Ask about Srini…" ref={textareaRef.current?.focus()} value={input} onChange={handleChange} disabled={loading} onKeyDown={handleKeyDown} rows={1} className='w-full  max-h-[140px] border-1 border-[#263452] outline-none py-1.5 px-3 text-xs text-gray-400 resize-none overflow-hidden  focus:border-[#63e2ed] rounded-[5px] ' ></textarea>
                        <button className={`bg-[#15e8fa] p-2 outline-none rounded-sm cursor-pointer transition-all duration-500 hover:transition-all chat-send ${loading ? 'opacity-[0.7] pointer-events-none' : ''}`} id="chatSend"  onClick={handleSubmit} ><IoSend className='text-[#0f2125]' /></button>
                    </div>
                </div>
            )}
           <div ref={bottomRef}></div>
        </div>
    )
}
