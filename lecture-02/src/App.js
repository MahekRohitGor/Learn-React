import React from "react";
import './App.css';
import Timer from "./Timer";

function App() {

  // const [isVisible, setVisible] = useState(0);

  // When App is geting Mounted
  // useEffect(()=> {
  //   console.log("App Component is Mounting");
  // }, []);


  return (
    // <div className="App">
    //   {isVisible ? <></> :<MyComponent />}
    //   <button onClick={()=> setVisible(!isVisible)}>Toggle</button>
    // </div>
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
