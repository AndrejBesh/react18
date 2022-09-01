
export const Dropdown = ({ elements, onChangeDropDown, label }) => {
    return (
        <div>
            <label>{label}</label>
            <br></br>
            <select onChange={(e) => { onChangeDropDown(e.target.value) }}>
                {elements.map((element, i) => (
                    <option key={i} value={element.value}>
                        {element.name}
                    </option>
                ))}
            </select>
        </div>
    )
}