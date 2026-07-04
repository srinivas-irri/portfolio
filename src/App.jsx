import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  // console.log(!!import.meta.env.VITE_GEMINI_API_KEY);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Home
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
}

export default App;