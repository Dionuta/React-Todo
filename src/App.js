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
          const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
          this.setState({ 
            todos: [...this.state.todos, newTodo], 
            todo: '' 
          });
        };
        changeTodo = event => this.setState({ [event.target.name]: event.target.value });

        
  render() {
    return (
      <div>
      <TodoList 
      todos={this.state.todos}
      />
      <TodoForm 
      value={this.state.todo}
      handleTodoChange={this.changeTodo}
      handleAddTodo={this.addTodo}
      />
      </div>
    );
    
  }
}

export default App;
