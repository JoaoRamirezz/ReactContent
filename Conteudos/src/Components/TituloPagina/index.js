import { useEffect, useState, useRef, Math } from 'react';


export default function TituloPagina(){
    const [num, setNum] = useState(0);
    const [message, setMessage] = useState('');

    setTimeout(Add, 5000);

    useEffect(() => {
        setMessage("Titulo alterado!")
        setTimeout(blurMessage, 2000);
    }, [num])

    document.title = `titulo: ${num}`;

    function blurMessage() {
        setMessage("")
    }

    function Add() {
        setNum(num + 1)
    }


    return (<>
        <form>
            {num}<br></br>
            <p className='alert'>{message}</p>

        </form>
    </>
    )
}