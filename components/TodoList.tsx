import React, { useState, FormEvent } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="New todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;