import { useState, useEffect } from "react";
import './dynamiccounter.css'

const DynamicCounter = () => {
    const [counter, setCounter] = useState(0);
    const [bgColor, setBgColor] = useState('white');

    useEffect(() => {
        if (counter > 0) {
            setBgColor('green');
        } else if (counter < 0) {
            setBgColor('red');
        } else {
            setBgColor('white');
        }
        console.log(counter)
    }, [counter]);

    const increment = () => setCounter(prev => prev + 1)
    const decrement = () => setCounter(prev => prev - 1)
    const reset = () => setCounter(0);

    return (
        <div className="dynamic-counter" style={{ backgroundColor: bgColor }}>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

}
export default DynamicCounter;