import { useParams } from "react-router-dom"

export const User = () => {
    const { id } = useParams()
    return (
        <h3>This is  User component ID = {id}</h3>
    )
}