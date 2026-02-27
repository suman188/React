import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myJob = {
    userName: "Vinay",
    age: 22,
  }
  return (
    <>
      <h1 className="bg-green-500 text-black p-3 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username = "CosmicCoder" btnText="Click me" />
      <Card username = "Vinay" btnText="visit me" />
    </>
  );
}

export default App;
