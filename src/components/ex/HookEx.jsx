import React, { useState, useEffect, useRef, useReducer, useMemo, useCallback } from 'react';

// --- 1. Phần hỗ trợ cho useReducer ---
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'up': return { count: state.count + 1 };
    case 'down': return { count: state.count - 1 };
    default: return state;
  }
}

// --- 2. Phần hỗ trợ cho useCallback ---
const ChildButton = React.memo(({ onClick }) => {
  console.log("[UseCallback] Child Rendered");
  return <button onClick={onClick}>Click Me (Child)</button>;
});

export default function HookEx() {
  // 1. State cho useState
  const [count1, setCount1] = useState(0);

  // 2. State cho useEffect
  useEffect(() => {
    console.log(`[UseEffect] Count1 đã đổi thành: ${count1}`);
  }, [count1]);

  // 3. Ref cho useRef
  const inputRef = useRef(null);
  const handleFocus = () => inputRef.current.focus();

  // 4. Reducer cho useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // 5. Memo cho useMemo
  const [number, setNumber] = useState(1);
  const doubleNumber = useMemo(() => {
    console.log("[UseMemo] Đang tính 2x...");
    return number * 2;
  }, [number]);

  // 6. Callback cho useCallback
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  const sectionStyle = { border: '1px solid #ccc', padding: '15px', marginBottom: '20px', borderRadius: '8px' };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>

      {/* 1. useState */}
      <div style={sectionStyle}>
        <h3>1. useState</h3>
        <p>Count: {count1}</p>
        <button onClick={() => setCount1(count1 + 1)}>Tăng (+)</button>
      </div>

      {/* 2. useEffect */}
      <div style={sectionStyle}>
        <h3>2. useEffect</h3>
        <p>Mở Console (F12) để thấy log khi bấm nút Tăng ở trên.</p>
      </div>

      {/* 3. useRef */}
      <div style={sectionStyle}>
        <h3>3. useRef</h3>
        <input ref={inputRef} placeholder="Nhập gì đó..." />
        <button onClick={handleFocus}>Focus Input</button>
      </div>

      {/* 4. useReducer */}
      <div style={sectionStyle}>
        <h3>4. useReducer</h3>
        <p>Reducer Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'up' })}>Up</button>
        <button onClick={() => dispatch({ type: 'down' })}>Down</button>
      </div>

      {/* 5. useMemo */}
      <div style={sectionStyle}>
        <h3>5. useMemo</h3>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <p>Kết quả x2: {doubleNumber} (Check console log)</p>
      </div>

      {/* 6. useCallback */}
      <div style={sectionStyle}>
        <h3>6. useCallback</h3>
        <ChildButton onClick={handleClick} />
        <p><small>Check console: Child không render lại khi component cha render</small></p>
      </div>
    </div>
  );
}