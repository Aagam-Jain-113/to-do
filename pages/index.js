import Head from 'next/head';
import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

export default function Home() {
  
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [edit,setEdit] = React.useState(null);
  
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>To-do List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container max-w-sm p-10 bg-black rounded-2xl">
        <h1 className="text-3xl text-center text-white">To-do List</h1>
        <Todo input={input} setInput={setInput} todos={todos} setTodos={setTodos} edit={edit} setEdit={setEdit} />
        <TodoList todos={todos} setTodos={setTodos} setEdit={setEdit} />
      </div>
    </div>
  )
}
