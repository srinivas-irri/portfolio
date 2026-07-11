import { useState } from "react";
import Home from "./pages/Home";
// import VoiceAssistant from "./components/VoiceAssistant";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  // console.log(!!import.meta.env.VITE_GEMINI_API_KEY);

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