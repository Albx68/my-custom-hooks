import { useEffect, useState } from "react";

const useTimer = (start, stop, speed) => {
  const [timer, setTimer] = useState(start);
  const [timerCompleted, setTimerCompleted] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      if (timer > stop) {
        console.log("greater");
        setTimer(stop);
      } else setTimer((p) => p + 45);
    }, speed);
    return () => clearInterval(t);
  }, [timer]);

  const startTimer = () => {
    if (timerCompleted) return;
  };

  return [timer, startTimer];
};

export default useTimer;
