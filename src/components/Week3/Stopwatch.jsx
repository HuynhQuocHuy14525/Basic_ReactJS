// src/components/Week3/Stopwatch.jsx
import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  // useRef lưu interval ID (thay đổi không gây re-render)
  const intervalRef = useRef(null);
  // useRef để focus input
  const inputRef = useRef(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 10);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const handleAddLap = () => {
    // Focus vào input khi bấm Lap
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Stopwatch (useRef)</h3>
      <div style={{ fontSize: '2rem', marginBottom: '20px' }}>
        {(time / 1000).toFixed(2)}s
      </div>
      
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAddLap}>Add Lap</button>
      </div>

      <input ref={inputRef} placeholder="Enter lap note..." style={{ padding: '8px' }} />
    </div>
  );
};

export default Stopwatch;