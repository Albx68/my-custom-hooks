import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useCycle from "./hooks/useCycle";
import { useMemo } from "react";
import useTimer from "./hooks/useTimer";
import { useEffect } from "react";

function App() {
  // const emojiArr = ["😀","😬","😁","😂","😃","😄","😅"]
  const textArr = ["Hi", "My name is Albert", "I'm a software engineer"];
  const [timer, startTimer] = useTimer(0, 3000, 220);
  const [cycle, f] = useCycle(textArr);
  useEffect(() => {
    const t = setInterval(() => {
      f();
    }, 1000);

    return () => clearInterval(t);
  }, []);
  return (
    <div className="App">
      <button onClick={f}>click</button>
      <p className="text" key={Math.random()}>
        {cycle}
      </p>
      {/* {timer} */}
    </div>
  );
}

export default App;
