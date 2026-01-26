// src/components/Week3/UserForm.jsx
import React, { useState } from 'react';

const UserForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Sử dụng spread operator để giữ lại các giá trị cũ
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(user, null, 2));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h3>User Information Form</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          name="name"
          placeholder="Họ tên"
          value={user.name}
          onChange={handleChange}
          style={{ padding: '8px' }}
        />
        <input
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          style={{ padding: '8px' }}
        />
        <input
          name="age"
          placeholder="Tuổi"
          type="number"
          value={user.age}
          onChange={handleChange}
          style={{ padding: '8px' }}
        />
        <button type="submit">Submit</button>
      </form>
      
      <div style={{ marginTop: '20px', background: '#333', color: '#fff', padding: '10px', borderRadius: '4px' }}>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
};

export default UserForm;