import { useState } from "react";
import './Todo.scss'

const Todo = ({item, onUpdate, onDelete}) => {

    const [isEdit, setIsEdit] = useState(false)

    const FormEdit = () => {

        const [newValue, setNewValue] = useState(item.title)

        const handleSubmit = (e) => {
            e.preventDefault()
        }

        const handleChange = (e) => {
            const value = e.target.value
            setNewValue(value)
        }

        const handleClick = () => {
            onUpdate(item.id, newValue)
            setIsEdit(false)
        }

        return(
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type='text' className="todoUpdateForm__input" onChange={handleChange} value={newValue}/>
                <button className="todoUpdateForm__btn" onClick={handleClick}>Update</button>
            </form>
        )
    }
    
    const TodoElement = () => {

        return (
            <div className="todoInfo">
                <p>- {item.title}</p>
                <div className="todoInfo__btns">
                    <button onClick={() => setIsEdit(true)} className='btnEdit'>Edit</button>
                    <button onClick={(e) =>onDelete(item.id)} className='btnDelete'>Delete</button>
                </div>
            </div>
        )
    }

    return ( 
        <> 
            <div className="todo">
                {isEdit ? <FormEdit /> : <TodoElement />}
            </div>

        </>
     );
}
 
export default Todo;