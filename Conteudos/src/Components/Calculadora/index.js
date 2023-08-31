import { useState } from "react";


export default function Calculadora(){
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)


    function Mult(){
        setResult(num * num2)
    }
    function Div(){
        setResult(num / num2)
    }
    function Add(){
        setResult(num + num2)
    }
    function Sub(){
        setResult(num - num2)
    }

    return (<>

    
        <input onChange={(e) => setNum(Number(e.target.value))}/>
        <input onChange={(e) => setNum2(Number(e.target.value))}/>
         = {result}
        
        <br></br>
        
        <button onClick={Mult}>x</button>
        <button onClick={Div}>/</button>
        <button onClick={Add}>+</button>
        <button onClick={Sub}>-</button>
    </>
    )
}
