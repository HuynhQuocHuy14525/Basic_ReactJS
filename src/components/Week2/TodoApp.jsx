// src/components/Week2/TodoApp.jsx
import { useState } from 'react';

// 1. Component nhập liệu
const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Nhập công việc..."
        style={{ flex: 1, padding: '10px', borderRadius: '4px' }}
      />
      <button type="submit">Thêm</button>
    </form>
  );
};

// 2. Component hiển thị từng item
const TodoItem = ({ todo, onDelete }) => (
  <li style={{ 
      background: 'rgba(255,255,255,0.05)', 
      marginBottom: '8px', 
      padding: '10px', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '4px'
    }}>
    <span>{todo.text}</span>
    <button 
      onClick={() => onDelete(todo.id)}
      style={{ background: '#ff4d4f', padding: '5px 10px', fontSize: '0.8rem' }}
    >
      Xóa
    </button>
  </li>
);

// 3. Component danh sách
const TodoList = ({ todos, onDelete }) => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
    ))}
  </ul>
);

// 4. Component chính (Chứa State)
const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Học ReactJS cơ bản' },
    { id: 2, text: 'Làm bài tập tuần 2' }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default TodoApp;