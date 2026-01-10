import {useState, useEffect, useRef} from 'react';

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    /*ใช้ useRef เก็บค่า startTime และ intervalId 
    เพราะต้องการแก้ไขค่าพวกนี้ได้โดยไม่ต้องการให้เกิดการ Re-render*/
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
            
        }
        /*เคลียร์ Interval เมื่อ Component ถูก Unmount หรือเมื่อหยุดทำงาน
        เพื่อป้องกัน Memory Leak*/
        return () => { 
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);

    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        
        /*แปลงเวลาจาก Milliseconds เป็น Hours:Minutes:Seconds:Milliseconds
        โดยใช้การหารเอาเศษและการปัดเศษลง*/
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");


        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    );
}
export default Stopwatch