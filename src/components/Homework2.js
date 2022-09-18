import { useState } from "react"

export const DisplayDaysOff = () => {
    const [days, setDays] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
    const [dayoff, setDayOff] = useState([])
    const DayOffHandler = (value) => {
        setDayOff([...dayoff, value])
        setDays(days.filter(day => day !== value))
    }
    return (
        <div>
            <label>Choose a day </label>
            <select onChange={e => DayOffHandler(e.target.value)} >
                {days.map((day, i) => <option key={i} value={day}>{day}</option>
                )}
            </select>
            <h3>Selected Days off:</h3>
            <ul style={{ listStyle: 'none' }}>{dayoff.map((daysoff, i) => <li key={i} >{daysoff}</li>)}</ul>
        </div>
    )
}