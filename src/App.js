
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilter from './components/VisibilityFilter';
function App() {
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <AddTodo/>
      <TodoList />
      <div>
      <VisibilityFilter />
    </div>
     
    </div>
  );
}


export default App;
