import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("None");

    return (
        <div>
            <p>Count Component - {count}</p>
            {count % 2 === 0 ? (
                <p>Count is even</p>
            ) : (
                <p>Count is odd</p>
            )}
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    );
};

export default Counter;