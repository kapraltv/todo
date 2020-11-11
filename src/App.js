import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState('')

  return (

    <div>
        <TodoList />
    </div>

  );
}

export default App;
