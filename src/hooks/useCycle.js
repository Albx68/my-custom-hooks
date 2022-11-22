import { useEffect, useState } from "react";

const useCycle = (arr) => {
  const [cycle, setCycle] = useState(arr[0]);
  const [i, setI] = useState(1);
  const length = arr.length;

  const f = () => {
    if (i < length - 1) {
      setI((p) => p + 1);
    } else setI(() => 0);
    setCycle(() => arr[i]);
  };

  return [cycle, f];
};

export default useCycle;
