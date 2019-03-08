import React from 'react';


 const Todo = ({todo, handleToggleComplete,}) => {
    return (
        <div
        style={todo.completed ? { textDecoration: 'line-through' } : null}
         onClick={() => handleToggleComplete(todo.id)}
        >
        {todo.task}
        </div>
    )
}

export default Todo;