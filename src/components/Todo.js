import { mockTodos } from "../mockData"
import { ListTodos } from "./ListTodos"
import {CreateTodo} from "./CreateTodo"
import {useState} from "react"

export const Todo = () => {

    const [todos, setTodos] = useState(mockTodos)

    const addTodo = (text) => {

        if(text.trim() === ''){
            alert("no empty Todos")
            return
        }

        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        }

        setTodos([...todos, newTodo])
    }

    const markAsCompleted = (id) => {
        
        setTodos( [...todos.map(todo => {
            if( todo.id === id ) {
                todo.completed = !todo.completed
            }
            return todo
        })])
    }

    const changeText = (id, newTextValue) => {
        
        setTodos( [...todos.map(todo => {
            if( todo.id == id ) {
                todo.text = newTextValue
            }
            return todo
        })])
    }

    const deleteTodo = (id) => {
        setTodos([...todos.filter(todo => todo.id !== id)])
    }

    return <div>
        <CreateTodo addTodo={addTodo}/>
        <ListTodos 
            todos={todos} 
            markAsCompleted={markAsCompleted} 
            deleteTodo={deleteTodo}
            changeText={changeText}
            />
    </div>

}