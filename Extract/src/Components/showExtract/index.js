import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { ExtractContext } from '../../Context/Extract';
import { useEffect, useState, useRef, useContext } from 'react';


function ShowExtract(){
    const { extracts } = useContext(ExtractContext)

    const RenderList = () => {
        return extracts.map(Extract => {
            return (
                <table>
                    <th>Wallet</th>
                    <th>Date</th>
                    <th>Value</th>
                    <tr>
                        <td>{Extract.wallet}</td>
                        <td>{Extract.date}</td>
                        <td>{Extract.value}</td>
                    </tr>
                </table>
            )
        })
    }

    return(
        <>
            <RenderList/>
        </>
    );
}


export default ShowExtract;