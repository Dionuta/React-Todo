import React from "react";
import './Todo.css';


const TodoForm = ({handleTodoChange, value, handleAddTodo, handleRemoveTodo})=>{ //destructuring
        return(
            <form>
                <input 
                onChange={handleTodoChange}
                type="text"
                name="todo"
                value={value}
                placeholder="...todo"
                />
                <button  className='bouncy' onClick={handleAddTodo} type="submit">Add Todo</button>
                <button  className='bouncy' onClick={handleRemoveTodo} type="submit">Clear Completed</button>
            </form>
        )
    }


export default TodoForm;