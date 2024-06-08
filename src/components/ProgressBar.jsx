import React, { useEffect, useState } from 'react';


const ProgressBar = ({timer}) => {
    const [remainingTime, setremainingTime] = useState(timer);
        

    // difines a func to be executed every milisecond
    useEffect(() => {
        const interval = setInterval(() => {
        console.log('interval');
        setremainingTime(prevTime => prevTime - 10);
        }, 10);


        // this is a clean up func that will clear the interval from running forever 
        return () => {
        clearInterval(interval);
        }
    }, [])

  return (
    <progress value={remainingTime} max={timer}/>
  )
}

export default ProgressBar
