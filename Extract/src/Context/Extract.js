import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap"
export const ExtractContext = React.createContext();
ExtractContext.displayName = 'Extract';



export const ExtractProvider = ({ children }) => {
    var [extracts, setList] = useState([
        {
            wallet: "pix",
            date: "28/05/2002",
            value: 20
        }
    ])

    function add(wallet, date, value) {
        const newextract = {
            wallet: wallet,
            date: date,
            value: value
        }

        setList([...extracts, newextract]);
        console.log(extracts);
    };

    function remove(id) {
        setList(extracts.filter(item => item.id !== id));
    };


    return (
        <ExtractContext.Provider
            value={{
                extracts,
                add,
                remove,
            }}
        >
            {children}
        </ExtractContext.Provider>
    )



}


