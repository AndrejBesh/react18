import { useState } from "react"

export const ListTodos = ({todos, markAsCompleted, deleteTodo, changeText}) => {

    const [editId , setEditId] = useState()
    const [editedText , setEditedText] = useState()

    const completed = todos.filter(todo => todo.completed).length

    const markAsEditable = (id, text) => {
        setEditedText(text)
        setEditId(id)
    }

    const ok = () => {
        changeText(editId , editedText)
        setEditId()
    }

    const cancel = () => {
        setEditedText()
        setEditId()
    }
  
    return <div>
        <p>Copleted : {completed}</p>
        <ul>
            {todos.map(todo => (
                <li key={todo.id} >
                    {editId == todo.id ? 
                        <div>
                            <input 
                                value={editedText} 
                                onChange={(e) => setEditedText(e.target.value)}/>
                            <button
                                onClick={() => ok()}
                                >OK</button>
                            <button
                                onClick={() => cancel()}
                                >Cancel</button>
                        </div>
                    :
                    <span
                        className={ todo.completed ? "mark-as-done" : ""}
                        >{todo.text}</span>
                    }
                    <div>
                        <button
                            onClick={() => markAsEditable(todo.id, todo.text)}
                            >Edit</button>
                        <input 
                            type="checkbox"
                            value={todo.completed}
                            checked={todo.completed}
                            onChange={() => markAsCompleted(todo.id)}
                            />
                        <span
                            className={"deleteSpan"}
                            onClick={() => deleteTodo(todo.id)}
                            >X</span>
                    </div>
                </li>
            ))}
        </ul>
    </div>
}