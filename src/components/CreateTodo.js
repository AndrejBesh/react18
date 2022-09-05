import {useState} from "react"
export const CreateTodo = ({addTodo}) => {

    const [newTodo, setNewTodo] = useState("")

    const addNewTodo = () => {
        addTodo(newTodo)
        setNewTodo("")
    }

    return <div>
        <input 
            placeholder="new Todo" 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} />
        <button
            onClick={addNewTodo}
            >Add</button>
    </div>
}