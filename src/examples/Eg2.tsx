import React, { useEffect } from "react";
import useCycle from "../hooks/useCycle";
import "./eg2.css";

const Eg2 = () => {
  const textArr = ["like 💖", "share 📨", "comment ✍️", "save 💾"];
  const [cycle, setCycle] = useCycle(textArr);
  useEffect(() => {
    const t = setTimeout(() => {
      setCycle();
    }, 1500);
    return () => clearTimeout(t);
  });

  return (
    <div className="eg2">
      <div className="text">
        <div className="static">Don't forget to </div>
        <div key={Math.random()} className="dynamic">
          {cycle}
        </div>
      </div>
    </div>
  );
};

export default Eg2;
