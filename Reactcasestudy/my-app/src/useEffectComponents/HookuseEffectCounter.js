import React,{useState,useEffect} from 'react';

function HookuseEffectCounter(){
    const[count,setCount]=useState(0)

    useEffect(() =>{
        console.log("when it is dispalyed");
        document.title=`Render these many times ${count}`
    })
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}
export default HookuseEffectCounter;