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
        } else {
            updateTodo(input, edit.id, edit.completed);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="w-64 p-4 mr-2 text-xl text-gray-400 bg-black border-none outline-none focus:outline-none rounded-xl" value={input} required onChange={(e) => setInput(e.target.value)} placeholder="Type your list here" />
                <button className="w-20 p-4 text-xl text-white bg-blue-400 border-none cursor-pointer hover:opacity-90 focus:outline-none rounded-xl" type="submit">{edit ? "OK" : "Add"}</button>
            </form>
        </div>
    )
}

export default Todo
