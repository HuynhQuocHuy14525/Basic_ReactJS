// src/components/Week3/ProductFilter.jsx
import React, { useState, useMemo } from 'react';

// Tạo dữ liệu giả (Mock data)
const generateProducts = () => {
  const items = [];
  for (let i = 1; i <= 1000; i++) {
    items.push({ id: i, name: `Product ${i}`, price: Math.floor(Math.random() * 1000) + 1 });
  }
  return items;
};

const ProductFilter = () => {
  const [products] = useState(generateProducts());
  const [filterText, setFilterText] = useState('');
  
  // 1. useMemo cho danh sách lọc
  const filteredProducts = useMemo(() => {
    console.log("Filtering products..."); // Log kiểm tra
    return products.filter(p => p.name.toLowerCase().includes(filterText.toLowerCase()));
  }, [products, filterText]);

  // 2. useMemo cho tổng tiền
  const totalPrice = useMemo(() => {
    console.log("Calculating total..."); // Log kiểm tra
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Product Filter (useMemo)</h3>
      <input 
        type="text" 
        placeholder="Search product..." 
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      
      <div style={{ marginBottom: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
        Total Price: ${totalPrice.toLocaleString()}
      </div>

      <ul style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {filteredProducts.map(p => (
          <li key={p.id} style={{ borderBottom: '1px solid #eee', padding: '5px' }}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;