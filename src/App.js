
import React from 'react'
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilter from './components/VisibilityFilter';



function App() {

  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
    </div>
  );
}

export default App;