export const Dropdown = ({ days, label, onDaysOffHandler, dayoff }) => {


    return (
        <div>
            <label>{label}</label>
            <br></br>
            <select onChange={e => onDaysOffHandler(e.target.value)}>
                {days.map((day, i) => (
                    <option key={i} value={day}>
                        {day}
                    </option>
                ))}
            </select>
        </div>
    )
}