import { useEffect, useRef, useState } from "react";

export default function useVoice() {
    const recognitionRef = useRef(null);

    const [listening, setListening] = useState(false);
    const [transcript, setTranscript] = useState("");

    const shouldKeepListening = useRef(false);
    const lastTranscript = useRef("");

    const createRecognition = () => {
        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) return null;

        const recognition = new SpeechRecognition();

        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.continuous = true;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            setListening(true);
        };

        recognition.onresult = (event) => {
            const speech =
                event.results[event.resultIndex][0].transcript.trim();

            if (speech === lastTranscript.current) return;

            lastTranscript.current = speech;
            setTranscript(speech);
        };

        recognition.onerror = (event) => {
            console.log("Speech Error:", event.error);

            setListening(false);

            if (
                event.error === "aborted" ||
                event.error === "audio-capture" ||
                event.error === "network"
            ) {
                recognitionRef.current = null;
            }
        };

        recognition.onend = () => {
            setListening(false);

            if (shouldKeepListening.current) {
                recognitionRef.current = createRecognition();

                setTimeout(() => {
                    try {
                        recognitionRef.current?.start();
                    } catch (e) {
                        console.log(e);
                    }
                }, 300);
            }
        };

        return recognition;
    };

    useEffect(() => {
        recognitionRef.current = createRecognition();

        return () => {
            recognitionRef.current?.stop();
        };
    }, []);

    useEffect(() => {
        const handleVisibility = () => {
            if (document.visibilityState === "visible") {
                recognitionRef.current = createRecognition();
                setListening(false);
            }
        };

        document.addEventListener("visibilitychange", handleVisibility);

        return () =>
            document.removeEventListener(
                "visibilitychange",
                handleVisibility
            );
    }, []);

    const startListening = () => {
        shouldKeepListening.current = true;

        if (!recognitionRef.current) {
            recognitionRef.current = createRecognition();
        }

        try {
            recognitionRef.current.start();
        } catch (e) {
            recognitionRef.current = createRecognition();

            try {
                recognitionRef.current.start();
            } catch {}
        }
    };

    const stopListening = () => {
        shouldKeepListening.current = false;

        recognitionRef.current?.stop();

        window.speechSynthesis.cancel();

        setListening(false);
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
        toggleListening,
    };
}