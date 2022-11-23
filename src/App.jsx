import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useCycle from "./hooks/useCycle";
import { useMemo } from "react";
import useTimer from "./hooks/useTimer";
import { useEffect } from "react";
import Eg1 from "./examples/eg1";
import Eg2 from "./examples/Eg2";

function App() {


  return (
    <div className="App">
       {/* <Eg1/> */}
       <Eg2/>
    </div>
  );
}

export default App;
