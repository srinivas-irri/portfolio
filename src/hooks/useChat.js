import { useState, useRef } from "react";

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

        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                text: question
            }
        ]);

        setLoading(true);

        try {

            // const reply = await askGemini(question);
            const response = await fetch("http://localhost:5000/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: question,
                }),
            });

            const data = await response.json();
            const reply = data.data.reply;

            setMessages(prev => [
                ...prev,
                {
                    sender: "bot",
                    text: reply
                }
            ]);

        } catch (err) {

            setMessages(prev => [
                ...prev,
                {
                    sender: "bot",
                    text: "Something went wrong."
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

    // Clear everything
    const clearChat = () => {
        setMessages([]);
        setWelcomeMessage(true);
        setInput("");
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