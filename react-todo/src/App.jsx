import  react, { useState } from 'react';
import TodoForm from'./components/TodoForm';
import Todocom from './components/Todocom';

const App = () => {
const[todos, setTodos] = useState([]);

const addTodo = text => {
  const newTodo = {text: text.trim()};
  const newTodos =  [...todos, newTodo];
  setTodos(newTodos);
};
  const completeTodo = index =>{
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index =>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div>
    <h1>TodoApp</h1>
    <hr />
    {
      todos.map((todo, index)=>(
        <Todocom key={index}
        index={index}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}/>))
      }
      {/* {console.log(todos)} */}
      <TodoForm addtodo={addTodo}/>
      </div>
   
    
  );
};

export default App;

