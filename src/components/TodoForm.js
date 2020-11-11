import React, { useState, useRef, useEffect } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [input])

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (

            <form className='todo-form' onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='Введите дело'
                value={input}
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
                ></input>
                <button
                type=''
                className='form-btn'>Добавить дело</button>
            </form>

    )
}

export default TodoForm;
