import { useState, useRef } from "react";
import { executeAction } from "../utils/portfolioActions";
import API_URL from "../config/api";

export default function useChat() {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");
    const [welcomMessage, setWelcomeMessage] = useState(true);

    const textareaRef = useRef(null);

    const handleChange = (e) => {
        setInput(e.target.value);

        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const sendMessage = async (question) => {

        setWelcomeMessage(false);

        if (!question.trim()) return;

        // Add user message
        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                text: question
            }
        ]);

        setLoading(true);

        try {

            const response = await fetch(`${API_URL}/api/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: question,
                }),
            });

            const data = await response.json();

            let reply = "";
            let action = null;

            // Manual AI Response
            if (data.source === "manual") {

                reply = data.data.reply;
                action = data.data.action;

            }
            // Gemini Response
            else if (data.source === "gemini") {

                reply = data.reply;

            }
            // Fallback
            else {

                reply = "Sorry, I couldn't understand your request.";

            }

            // Add bot message
            setMessages(prev => [
                ...prev,
                {
                    sender: "bot",
                    text: reply
                }
            ]);

            // Execute frontend action (scroll, resume, etc.)
            console.log("Backend Response:", data);
            console.log("Action:", action);
          
            if (action) {
                setTimeout(() => {
                    executeAction(action);
                }, 100);
            }

        } catch (err) {

            console.error("Chat Error:", err);

            setMessages(prev => [
                ...prev,
                {
                    sender: "bot",
                    text: "Sorry, something went wrong. Please try again."
                }
            ]);

        } finally {

            setLoading(false);
            setInput("");

            if (textareaRef.current) {
                textareaRef.current.style.height = "auto";
            }

        }

    };

    // Clear chat
    const clearChat = () => {
        setMessages([]);
        setWelcomeMessage(true);
        setInput("");

        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
    };

    return {
        messages,
        loading,
        input,
        setInput,
        textareaRef,
        handleChange,
        sendMessage,
        welcomMessage,
        clearChat
    };
}