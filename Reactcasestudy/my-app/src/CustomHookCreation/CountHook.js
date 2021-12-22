import React from "react";
import useCustomCountHook from './useCustomCountHook';

function CountHook(){
    const[count,increment,decrement,reset] = useCustomCountHook(10,10)
    return(
        <div>
            <h1>Count {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default CountHook;