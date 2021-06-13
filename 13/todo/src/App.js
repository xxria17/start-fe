import React, { userState } from 'react';
import Header from './Header';

function App() {
  const [todo, setTodo] = userState('');
  const [todos, setTodos] = userState([]);

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodo(newTodos);
    setTodo('');
  }

  console.log(todo);

  return (
      <div className="container">
        <header>
          <Header />
          <form className="new-task" id="input-form" onSubmit={handleSubmit}>
            <input name="text" placeholder="할일을 입력하세요" value={todo} onChange={handleChange}/>
          </form>
        </header>
        <div id="result">
          <ul>
          {
            todos.map((todo) => {
              return(<li>{todo}</li>)
            })
          }
          </ul>
        </div>
      </div>
  );
}

export default App;
