import { Dropdown } from "./Dropdown"
import { days } from '../mockData'
import { useState } from "react"
export const DisplayDropdowns = () => {
    const [dayoff, setDaysOff] = useState([]);
    const onDaysOffHandler = (val) => {
        setDaysOff([...dayoff, val])
        console.log(val)
        console.log(dayoff)
    }
    return (
        <div>
            <Dropdown
                label='Choose a dayoff'
                days={days} onDaysOffHandler={onDaysOffHandler} dayoff={dayoff} />
            <p>Selected dayoff: {dayoff}</p>

        </div>
    )
}