import { useEffect } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { BsFillMicMuteFill } from "react-icons/bs";
import useVoice from "../hooks/useVoice";
// import { detectIntent } from "../services/geminiIntent";
// import { scrollToSection } from "../utils/scrollToSection";
import { executeAction } from "../utils/portfolioActions";
import { speak } from "../utils/speak";
import ('../assets/styles/voiceassistant.css')

export default function VoiceAssistant() {

    const {
        transcript,
        listening,
        toggleListening

    } = useVoice();

useEffect(() => {

    if (!transcript) return;

    async function processVoice() {

        try {

            const response = await fetch("http://localhost:5000/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: transcript,
                    mode: "voice"
                })

            });

            const data = await response.json();
           
            console.log("Backend Response:", data);

            let reply = "";
            let speakText = "";
            let action = null;

            // Manual AI
            if (data.source === "manual") {

                if (!data.data) {
                    throw new Error("Manual response is empty");
                }

                reply = data.data.reply;
                action = data.data.action;
            }

            // Gemini
            else {

                reply = data.reply;
                action = data.action;

            }

            if (action) {

                executeAction(action);

            }

            speak(reply);

        }

        catch (err) {

            console.log(err);

            speak("Sorry. I couldn't process your request.");

        }

    }

    processVoice();

}, [transcript]);

    return (

        <div className="fixed z-[81] bottom-[40px] right-25 shadow-[0_4px_24px_rgba(91,141,239,.6)] transition-all duration-400 hover:-translate-y-1 hover:transition-all duration-400 max-[767px]:rounded-[6px] max-[640px]:right-18 max-[767px]:bottom-[90px] max-[767px]:right-[23px]!">
            <button onClick={toggleListening} className={`rounded-md px-3 py-1 w-[45px] h-[45px] bg-[#cca21a] voice-assistant ${listening ? "start-calling" : ""}`}>
                {listening ? <BsFillMicFill className="text-white" /> : <BsFillMicMuteFill className="text-white" />}
            </button>

            <div className="info-text"></div>

            {/* {
                transcript &&
                <div className=" mt-3 bg-[#111] text-white rounded-lg p-3 w-72 text-sm">
                    {transcript}
                </div>
            } */}
        </div>
    );

}