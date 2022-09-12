import { useState } from "react";
import Todo from "../Todo/Todo";
import './TodoApp.scss'

const TodoApp = () => {

    const [title, setTitle] = useState('')
    const [todos, setTodos] = useState([])

   

    const handleChange = (event) => {
        const value = event.target.value
        setTitle(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }
        setTodos([...todos, newTodo])
        setTitle('')
    }

    const handleUpdate = (id, value) => {
        const temp = [...todos]
        const item = temp.find(item => item.id === id)
        item.title = value
        setTodos(temp)
    }

    const handleDelete = (id) => {
        const temp = todos.filter(item => item.id !== id)

        setTodos(temp)

    }

    return ( 
        <div className="todoContainer">
            <h2>To do list</h2>
            <form className="todoForm" onSubmit={handleSubmit}>
                <input 
                    className="todoForm__input" 
                    value={title}
                    onChange={handleChange}
                    placeholder='Add your task here!'
                />

                <input 
                    type='submit' 
                    value='Add task' 
                    className="todoForm__btn"
                    onClick={handleSubmit}
                    disabled={title.length === 0}
                />
            </form>

            <div className="todosContainer">
                {
                    todos.map(item => (
                        <Todo 
                            key={item.id} 
                            item={item} 
                            onUpdate={handleUpdate} 
                            onDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </div>
     );
}
 
export default TodoApp;