import Head from 'next/head';
import React from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

export default function Home() {

  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState(null);

  return (
    <div>
      <Head>
        <title>To-do List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-bl from-blue-400 to-green-600">
        <div className="max-w-md p-8 mb-8 bg-black shadow-2xl bg-opacity-40 backdrop-blur-sm rounded-xl">
          <h1 className="my-8 text-3xl font-semibold text-center text-white">To-do List</h1>
          <Todo input={input} setInput={setInput} todos={todos} setTodos={setTodos} edit={edit} setEdit={setEdit} />
          <TodoList todos={todos} setTodos={setTodos} setEdit={setEdit} />
        </div>
      </div>
    </div>
  )
}
