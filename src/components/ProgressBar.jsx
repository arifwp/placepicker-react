import { useState, useEffect } from "react";

export default function ProgressBar({ timerTime }) {
    const [remainingTime, setRemainingTime] = useState(timerTime);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('INTERVAL');
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return <progress value={remainingTime} max={timerTime} />
}