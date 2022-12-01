import React, { useEffect } from 'react'
import useTimer from '../hooks/useTimer'
import "./style.css"
const TimerEg = () => {
    const [timer,startTimer] = useTimer(0,52200,40,50)
    const [timer2,startTimer2] = useTimer(333,33320,30,1)
    // useEffect(()=>{
    //     startTimer()
    //     // return ()=> startTimer()
    // },[])
  return (
    <>
    <div >{timer}</div>
    <button onClick={startTimer}>start</button>
    <div>{timer2}</div>
    <button onClick={startTimer2}>start2</button>
    </>
  )
}

export default TimerEg