// src/components/Week3/TodoMemo.jsx
import React, { useState, useCallback } from 'react';

// Component con được bọc React.memo
const TodoItem = React.memo(({ todo, onToggle }) => {
  console.log(`Render Item: ${todo.id}`); // Kiểm tra re-render
  return (
    <li 
      onClick={() => onToggle(todo.id)}
      style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
        padding: '5px',
        userSelect: 'none'
      }}
    >
      {todo.text}
    </li>
  );
});

const TodoMemo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Học React Hook', completed: false },
    { id: 2, text: 'Làm bài tập Week 3', completed: false },
  ]);
  const [text, setText] = useState('');

  const handleAdd = () => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText('');
  };

  // useCallback để hàm không bị tạo lại mỗi lần render
  const handleToggle = useCallback((id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }, []); // Dependency rỗng vì dùng functional update

  return (
    <div>
      <h3>Todo List Performance</h3>
      <div style={{ marginBottom: '10px' }}>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <p style={{ fontSize: '0.8rem', color: 'gray' }}>*Mở Console để xem log render</p>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
};

export default TodoMemo;