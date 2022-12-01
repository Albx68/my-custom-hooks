import { useEffect, useState } from "react";

const useTimer = (start, stop, speed, propagation) => {
  const [timer, setTimer] = useState(start);
  const [x, setX] = useState(true);
  useEffect(() => {
    if (timer > stop) {
      setTimer(() => stop);
      setX(() => false);
    }
  }, [timer]);
  const startTimer = () => {
    if (x) {
      const t = setInterval(() => {
        if (timer > stop) {
          console.log("greater");
          setTimer(() => stop);
          clearInterval(t);
        } else setTimer((p) => p + propagation);
        return () => clearInterval(t);
      }, speed);
    } else return;
  };

  return [timer, startTimer];
};

export default useTimer;
