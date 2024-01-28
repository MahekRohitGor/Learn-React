import React, {useEffect, useState} from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(()=>{
        // Mounted
        // Delay of 1000 ms
        console.log("Adding New Interval");
        const timer = setInterval(()=> setTime(time+1), 1000);

        return function(){
            console.log("Clearing New Interval");
            clearInterval(timer);
        };
    }, [time]);

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Current Time is {time}</p>
        </div>
    );
};
export default Timer;