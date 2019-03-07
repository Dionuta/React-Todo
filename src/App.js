import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';





class App extends Component {
         constructor(){
         super()
        
         this.state={
          todos: [
            {
              task: 'Organize Garage',
              id: 1528817077286,
              completed: false
            },
            {
              task: 'Bake Cookies',
              id: 1528817084358,
              completed: false
            }
          ],
          todo: ''
        };
      }

      
        addTodo = event => {
          event.preventDefault();
  
          this.setState(prevState => { 
            return {
            todos: [...prevState.todos, 
              {
                task: prevState.todo,
                completed: false,
                id: Date.now()
            }], 
            todo: '' 
            }
          });
        };

        changeTodo = event => this.setState({ [event.target.name]: event.target.value });
         
        removeTodo = event =>{
          event.preventDefault();
          let todos = this.state.todos.filter(todo => !todo.completed);
          this.setState({ todos });
        }

        toggleTodoComplete = id => {
          let todos = this.state.todos.slice();
          todos = todos.map(todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed;
              return todo;
            } else {
              return todo;
            }
          });
          this.setState({ todos });
        };
      
        
  render() {
    return (
      <div>
      <TodoList 
      todos={this.state.todos}
      handleToggleComplete={this.toggleTodoComplete}
      />
      <TodoForm 
      value={this.state.todo}
      handleTodoChange={this.changeTodo}
      handleAddTodo={this.addTodo}
      handleRemoveTodo={this.removeTodo}
      />
      </div>
    );
    
  }
}

export default App;
