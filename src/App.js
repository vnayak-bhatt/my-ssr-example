import React from "react";
import "./App.css";


function  App ( )  {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <>
        <img src="./en/logos.svg" className="App-logo" alt="logo" />
        <img src="./pt/logos.svg" className="App-logo" alt="logo" />
        <img src="./es/logos.svg" className="App-logo" alt="logo" />
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    );
}

export default App;