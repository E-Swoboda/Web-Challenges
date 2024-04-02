import { getD6Roll } from "./utils";
import { useState } from "react";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useState([]);

  const handleRoll = () => {
    const newValue = { value: getD6Roll(), time: Date.now() };
    setRolls([newValue, ...rolls]);
    localStorage.setItem("rolls", JSON.stringify([newValue, ...rolls]));
  };

  return (
    <div className="app">
      <main className="app__main">
        <D6Button onRoll={handleRoll} rolls={rolls} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
