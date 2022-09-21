import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { add, remove, toggleCompleted } from "../slices/todosSlice"

export const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const inputRef = useRef(null)
    const handleInputChange = (event) => {
        if (event.key === 'Enter') {
            alert('enter was clicked ' + inputRef.current.value)
            dispatch(add({
                title: inputRef.current.value

            }))
            inputRef.current.value = ''
        }
    }
    return (
        <div>
            <ol>
                {todos.map(todo =>
                (<li key={todo.id}
                    style=
                    {{
                        color: todo.completed && 'red',
                        textDecoration: todo.completed && 'line-through'
                    }}>
                    {todo.title}
                    <button
                        onClick={() => dispatch(remove(todo.id))}
                    >
                        -
                    </button>
                    <button
                        onClick={() => dispatch(toggleCompleted(todo.id))}
                    >
                        Toggle Completed
                    </button>
                </li>
                ))}
            </ol>

            <input ref={inputRef} onKeyDown={handleInputChange} />
        </div>
    )
}
