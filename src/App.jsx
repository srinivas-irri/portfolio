import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { speak } from "./utils/speak";
// import VoiceAssistant from "./components/VoiceAssistant";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  // console.log(!!import.meta.env.VITE_GEMINI_API_KEY);

useEffect(() => {

    const greeted = sessionStorage.getItem("ai-greeted");

    if (greeted) return;

    const timer = setTimeout(() => {

        speak(
            "Hello! Welcome to Srinivas's portfolio. I'm Srini AI, your personal assistant. I can help you explore Srinivas's experience, skills, projects, resume, and contact information. Click the microphone or type your question. How can I help you today?"
        );

        sessionStorage.setItem("ai-greeted", "true");

    }, 1500);

    return () => clearTimeout(timer);

}, []);

  return (
    <div>
    <div className={darkMode ? "dark" : ""}>
      <Home
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>

 {/* <VoiceAssistant /> */}
    </div>
  );
 
}

export default App;