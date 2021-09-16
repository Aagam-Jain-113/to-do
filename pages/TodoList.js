import React from 'react'
import { RiDeleteBinFill, RiEditBoxFill, RiCheckboxFill } from 'react-icons/ri';

function TodoList({ todos, setTodos, setEdit }) {
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleComplete = () => {
        setTodos(
            todos.map((item) => {
                if (item.id == todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }

    const handleEdit = ({id})=>{
        const findTodo = todos.find((todo) => todo.id === id);
        setEdit(findTodo);
    }
    return (
        <div>
            {todos.map((todo) => (
                <li className="text-black list-item" key={todo.id}>
                    <input type="text" value={todo.title} className={`list ${todo.completed ? "complete": "" }`} onChange={(e) => e.preventDefault()} />
                    <div>
                        <RiCheckboxFill color="#fff" onClick={() => handleComplete(todo)} />
                        <RiEditBoxFill color="#fff" onClick={() => handleEdit(todo)} />
                        <RiDeleteBinFill color="#fff" onClick={() => handleDelete(todo)} />
                    </div>
                </li>
            ))
            }

        </div>
    )
}

export default TodoList
