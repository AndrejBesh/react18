import { useState } from "react"

export const Dropdown = ({ days, label, onDaysOffHandler, dayoff }) => {
    const [selectValue, setSelectedValue] = useState()
    const dataSender = (value) => {
        setSelectedValue(value)
        onDaysOffHandler(selectValue)
    }

    return (
        <div>
            <label>{label}</label>
            <br></br>
            <select onChange={e => dataSender(e.target.value)}>
                {days.map((day, i) => (
                    <option key={i} value={day}>
                        {day}
                    </option>
                ))}
            </select>
        </div>
    )
}