import { useEffect, useRef, useState } from "react";

export default function useVoice() {

    const recognitionRef = useRef(null);
    const [listening, setListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const shouldKeepListening = useRef(false);
    const lastTranscript = useRef("");

    useEffect(() => {

        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) return;

        const recognition = new SpeechRecognition();

        recognition.lang = "en-US";

        recognition.interimResults = false;

        recognition.continuous = true;

        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            setListening(true);
        };

        recognition.onend = () => {

            setListening(false);

            if (shouldKeepListening.current) {

                setTimeout(() => {
                    try {
                        recognition.start();
                    } catch (e) { }
                }, 300);

            }
        };

        recognition.onresult = (event) => {
            const speech =
                event.results[event.resultIndex][0].transcript.trim();

            if (speech === lastTranscript.current) return;

            lastTranscript.current = speech;

            console.log(speech);

            setTranscript(speech);

        };

        recognition.onerror = (event) => {
            console.log(event.error);
            if (
                event.error === "no-speech" ||
                event.error === "aborted"
            ) {
                return;
            }
        };

        recognitionRef.current = recognition;

    }, []);

    const startListening = () => {
        shouldKeepListening.current = true;
         try {

        recognitionRef.current.start();

    } catch (e) {}
    };

    const stopListening = () => {
         shouldKeepListening.current = false;

    if (recognitionRef.current) {
        recognitionRef.current.stop();
    }

    // Stop AI voice immediately
    window.speechSynthesis.cancel();
    };

    const toggleListening = () => {
        if (listening) {
            stopListening();
        } else {
            startListening();
        }
    };

    return {
        transcript,
        listening,
        startListening,
        stopListening,
        toggleListening

    };

}