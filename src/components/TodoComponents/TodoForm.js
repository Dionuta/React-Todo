import React from "react";



const TodoForm = (props)=>{
        return(
            <form>
                <input 
                onChange={props.handleTodoChange}
                type="text"
                name="todo"
                value={props.value}
                placeholder="...todo"
                />
                <button onClick={props.handleAddTodo} type="submit">Add Todo</button>
                <button type="submit">Clear Completed</button>
            </form>
        )
    }


export default TodoForm;