import React, {useEffect, useState} from "react";

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);

    useEffect(()=> {
        // When Component is Mounting
        console.log("My Component is Mounting...");
        // Inside function will run when unmounting
        // For Unmount
        return function(){
            console.log("Unmounting");
      };
    }, []);

    // For Updated
    useEffect(()=> {
        console.log("Count got updated");
    }, [count, count2]);
    // Will run for first time and when the value of count gets changed then that function will run
    

    return (
        <div>
            <p>Count is {count}</p>
            <p>Count is {count2}</p>
            <button onClick={()=> setCount(count+1)}>Update 1</button>
            <button onClick={()=> setCount2(count2 +1)}>Update 2</button>
        </div>
    );
};

export default MyComponent;