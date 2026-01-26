// src/components/Week3/UserFetcher.jsx
import React, { useReducer, useEffect } from 'react';

// Định nghĩa trạng thái ban đầu
const initialState = {
  loading: false,
  data: null,
  error: null
};

// Reducer function
const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const UserFetcher = () => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      // Giả lập API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Giả lập lỗi ngẫu nhiên để test nút Retry
      if (Math.random() < 0.3) throw new Error("Failed to fetch data!");

      const mockData = ["Alice", "Bob", "Charlie", "David"];
      dispatch({ type: 'FETCH_SUCCESS', payload: mockData });
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>User Fetcher (useReducer)</h3>
      
      {state.loading && <p>Loading users...</p>}
      
      {state.error && (
        <div style={{ color: 'red' }}>
          <p>Error: {state.error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </div>
      )}

      {state.data && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {state.data.map((user, idx) => <li key={idx}>{user}</li>)}
        </ul>
      )}
    </div>
  );
};

export default UserFetcher;