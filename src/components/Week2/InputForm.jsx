// src/components/Week2/InputForm.jsx
import { useState } from 'react';

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Họ tên:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
        />
      </div>
      
      <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
        <p><strong>Dữ liệu nhập:</strong></p>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>
    </div>
  );
};

export default InputForm;