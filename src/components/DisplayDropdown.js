import { Dropdown } from "./Dropdown"
import { socials, people } from '../mockData'
import { useState } from "react"
export const DisplayDropdowns = () => {
    const [social, setSocial] = useState("")
    const [person, setPerson] = useState("")

    return (
        <div>
            <Dropdown
                label='Choose Social'
                elements={socials} onChangeDropDown={setSocial} />

            <Dropdown
                label='Choose Person'
                elements={people} onChangeDropDown={setPerson} />

            <p>selected social: {social}</p>
            <p>selected person: {person}</p>
        </div>
    )
}