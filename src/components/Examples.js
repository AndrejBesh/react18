import { useState } from "react"

export const Examples = () => {
    const [car, setCar] = useState({
        model: 'Hyundai',
        year: '2021',
        km: '100000'
    })
    const [daysOff, setDaysOff] = useState([
        'Saturday', 'Sunday'
    ])
    const printObject = (object) => {
        return (
            <pre>{JSON.stringify(object, null, 2)}</pre>
        )
    }
    const changeKm = (km) => {
        setCar({
            ...car,
            km: 999
        })
    }
    const [newDay, setNewDay] = useState('')
    const addNewDayOff = () => {
        setDaysOff([...daysOff, newDay])
        setNewDay('')
    }
    return (
        <div>
            <h4>Example 1</h4>
            {printObject(car)}
            <button onClick={() => changeKm()}
            >Change KM to 999</button>
            <input
                placeholder="Enter Km"
                value={''}
                onChange={(e) => { setCar({ ...car, km: e.target.value }) }}></input>
            <hr />
            <h4>Example 2</h4>
            <input
                type='text'
                value={newDay}
                onChange={((e) => setNewDay(e.target.value))}>
            </input>
            <button
                onClick={addNewDayOff}>Add Day Off</button>
            {daysOff.map((day, i) => <li key={i}>{day}</li>)}
        </div>
    )
}