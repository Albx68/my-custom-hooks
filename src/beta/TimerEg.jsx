import React, { useEffect } from 'react'
import useTimer from '../hooks/useTimer'
const TimerEg = () => {
    const [timer,startTimer] = useTimer(0,200,100)
    // useEffect(()=>{
    //     startTimer()
    //     // return ()=> startTimer()
    // },[])
  return (
    <>
    <div>{timer}</div>
    <button onClick={startTimer}>start</button>
    </>
  )
}

export default TimerEg