import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import {Context} from './Context.js'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    
    const updateTodo = (todoId, newValue) => {

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const completeTodo = id => {

        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        })
        setTodos(updateTodos);
    }


    return (

        <Context.Provider value={{removeTodo, addTodo}}>

            <div>

            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                updateTodo={updateTodo}
                />

            </div>

        </Context.Provider>

    )
}

export default TodoList;
