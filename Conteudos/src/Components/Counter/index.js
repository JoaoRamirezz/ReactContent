import { useEffect, useState, useRef, useContext } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap"
import { CounterContext } from '../../Context/Counter';


export default function Counter() {
    const { handleDown, handleUp } = useContext(CounterContext)


    return (<>
        <div className='main'>
            <Button onClick={handleDown} variant='success'>+</Button>
            <Button onClick={handleUp} variant='danger'>-</Button>
        </div>
    </>
    )
}ds