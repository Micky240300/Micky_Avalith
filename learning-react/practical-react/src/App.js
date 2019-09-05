import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';

import { todos } from './todos.json';

import TodoForm from './components/TodoForm';


class App extends Component  {
  constructor(){
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }


  render() {
    const todos = this.state.todos.map((todo, i) => {
      return(
      <div className="col-md-4">  
        <div className="card mt-4">
          <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                  {todo.priority}
              </span>
          </div>
              <div className="card-body">
                <p>{todo.description}</p>
                <p>{todo.responsible}</p>
              </div>
          
          
        </div>
      </div>
      )
    })

    return (
      <div className="App">
        <Navigation title="Todos"></Navigation>
            <span className="badge badge-pill badge-light ml-2">
                { this.state.todos.length }
              </span>
        <div className="container">
          <TodoForm onAddTodo={ this.handleAddTodo }/>
    
            <div className="row mt-4">
              { todos }
            </div>
        </div>
      </div>
    );
  }
}

export default App;
