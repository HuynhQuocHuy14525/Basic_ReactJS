// src/components/Week2/Counter.jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Hàm tăng
  const increment = () => {
    setCount(count + 1);
  };

  // Hàm giảm
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const numberStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    margin: '20px 0',
    color: count > 10 ? '#ff4d4f' : '#fff',
    transition: 'color 0.3s ease'
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3 style={{ marginBottom: '20px' }}>Bộ Đếm (Counter App)</h3>
      <div style={numberStyle}>
        {count}
      </div>

     
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <button 
          onClick={decrement} 
          disabled={count === 0}
          style={{ padding: '10px 20px', background: '#e74c3c', color: 'white', opacity: count === 0 ? 0.5 : 1 }}
        >
          - Giảm
        </button>

        <button 
          onClick={reset} 
          style={{ padding: '10px 20px', background: '#95a5a6', color: 'white' }}
        >
          Reset
        </button>

        <button 
          onClick={increment} 
          style={{ padding: '10px 20px', background: '#2ecc71', color: 'white' }}
        >
          + Tăng
        </button>
      </div>
    </div>
  );
};

export default Counter;