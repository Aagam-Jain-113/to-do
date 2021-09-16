import React from 'react';
import { v4 as uuidv4 } from 'uuid'

function Todo({ input, setInput, todos, setTodos, edit, setEdit }) {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo);
        setEdit("");
    }

    React.useEffect(() => {
        if (edit) {
            setInput(edit.title);
        } else {
            setInput("");
        }
    }, [setInput, edit]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!edit) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        }else {
            updateTodo(input, edit.id, edit.completed);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} required onChange={(e) => setInput(e.target.value)} placeholder="Type your List of items here" />
                <button className="p-2 ml-4 bg-white rounded-md" type="submit">{edit ? "OK" : "Add"}</button>
            </form>
        </div>
    )
}

export default Todo
