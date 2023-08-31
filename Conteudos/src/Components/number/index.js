import { useContext } from "react"
import { CounterContext } from "../../Context/Counter"

export default function Number(){
    const { num } = useContext(CounterContext)
    return <p>{num}</p>
}