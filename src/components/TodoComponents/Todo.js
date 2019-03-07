import React from 'react';


  function Todo(props) {
    return (
        <div
        style={props.todo.completed ? { textDecoration: 'line-through' } : null}
         onClick={() => props.handleToggleComplete(props.todo.id)}
        >
        {props.todo.task}
        </div>
    )
}

export default Todo;