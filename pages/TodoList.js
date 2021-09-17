import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { FaCheckSquare } from 'react-icons/fa';
import { HiPencilAlt } from 'react-icons/hi'

function TodoList({ todos, setTodos, setEdit }) {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id == todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEdit(findTodo);
    }

    return (
        <div>
            {todos && todos.map((todo) => (
                <li className="flex items-center p-2 my-5 text-black border border-gray-300 rounded-xl max-h-12" key={todo.id}>
                    <input type="text" value={todo.title} disabled className={`w-56 bg-transparent text-white focus:outline-none text-2xl pl-2 mr-4 border-none ${todo.completed ? "line-through opacity-60 complete" : ""}`} onChange={(e) => e.preventDefault()} />
                    <FaCheckSquare color="#00df00" className="mr-1 text-2xl font-bold cursor-pointer" onClick={() => handleComplete(todo)} />
                    <HiPencilAlt color="#00f" className="mr-1 text-2xl cursor-pointer" onClick={() => handleEdit(todo)} />
                    <AiFillDelete color="#f00" className="text-2xl cursor-pointer" onClick={() => handleDelete(todo)} />
                </li>
            ))
            }
        </div>
    )
}

export default TodoList
