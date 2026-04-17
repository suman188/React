import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider
      value={{
        themeMode,
        darkTheme,
        lightTheme,
      }}
    >
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center">
        {/* Toggle Button */}
        <h1 className="text-red-500 text-5xl">TAILWIND TEST</h1>
        <div className="w-full max-w-sm flex justify-end mt-4">
          <ThemeBtn />
        </div>

        {/* Card */}
        <div className="w-full max-w-sm mt-4">
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
