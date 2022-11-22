import { useState } from "react";

const useTimer = (start, stop, speed) => {
  const [timer, setTimer] = useState(start);
  const startTimer = () => {
    const t = setInterval(() => {
      if (timer > stop) {
        console.log("greater");
        setTimer(() => stop);
        return;
      } else setTimer((p) => p + 47);
    }, speed);
    return () => clearInterval(t);
  };
  return [timer, startTimer];
};

export default useTimer;
