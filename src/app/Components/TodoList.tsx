"use client"
import { useState } from "react";
import TodoItem from "./TodoItem";
import { todo } from "node:test";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export default function TodoList () {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: "Learn Next.js", completed: false},
        { id: 2, text: "Learn Pyhton", completed: false}
    ]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim() === "") return;
        setTodos((prevTodos) => [
            ...prevTodos,
            { id: Date.now(), text: newTodo, completed: false} 
        ]);
        setNewTodo("");
    };

    const toggleTodo = (id: number) => {
        setTodos((PrevTodos) => 
        PrevTodos.map((todo) =>
            todo.id === id ? {...todo, completed: !todo.completed } :todo
        )
    );
    };

return (
    <div className="max-w-lg mt-10 mx-auto p-4 border rounded-lag shadow">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <div className="flex gap-2 mb-4">
            <input
                type="text"
                className="flex-1 border rounded p-2"
                placeholder="Add a new task..."
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />

            <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={addTodo}
            >
                Add
            </button>
        </div>

        {todos.map((todo) => (
            <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={toggleTodo}
        />
        ))}
    </div>
);
}