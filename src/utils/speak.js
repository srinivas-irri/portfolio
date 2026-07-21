let speaking = false;

export const speak = (text, onEnd) => {

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";
    utterance.rate = 0.85;
    utterance.pitch = 0.85;
    utterance.volume = 1;

    speaking = true;

    utterance.onend = () => {
        speaking = false;

        if (onEnd) {
            onEnd();
        }
    };

    window.speechSynthesis.speak(utterance);
};

export const isSpeaking = () => speaking;