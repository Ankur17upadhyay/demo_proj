"use client"
import React, { useState } from 'react';

 
const Todo = () => {
  const [todo, setTodo] = useState(null);
  const [inputValue, setInputValue] = useState('');
 
  const fetchTodo = async () => {
    try {
      const response = await fetch(inputValue);
      const data = await response.json();
      setTodo(data);
    } catch (error) {
      console.error('Error fetching todo:', error);
    }
  };

 
  return (
    <div>
      <label>
        Enter API URL:-
        
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ width: '300px', padding: '8px' }}
        />
      </label>
      <button style={{ width: '200px', padding: '8px' }} onClick={fetchTodo}>Fetch Details</button>
      {todo && (
        <div>
          <h2>API Details</h2>
          <pre>{JSON.stringify(todo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
 
export default Todo;
