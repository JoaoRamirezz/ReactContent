import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.scss';
import { ExtractContext } from '../../Context/Extract';
import { useEffect, useState, useRef, useContext } from 'react';




function AddExtract() {
    const { add } = useContext(ExtractContext)
    var [wallet, setWallet] = useState(0)
    var [date, setDate] = useState(0)
    var [value, setValue] = useState(0)



    return (
        <>
        <div className={styles.formextract}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label onChange={(e) => setWallet(e.target.value)}>Wallet</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label onChange={(e) => setDate(e.target.value)}>Date</Form.Label>
                    <Form.Control type="date" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label onChange={(e) => setValue(e.target.value)}>Value</Form.Label>
                    <Form.Control type="number" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" onClick={() => add(wallet,date,value)}>
                    Submit
                </Button>
            </Form>
        </div>
        </>
    );
}

export default AddExtract;