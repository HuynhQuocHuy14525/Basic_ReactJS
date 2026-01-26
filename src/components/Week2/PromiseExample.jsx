import { useState, useEffect } from 'react';

const PromiseExample = () => {
  const [dataList, setDataList] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://696d77dcf4a79b3151813e1f.mockapi.io/api/v1/users?limit=5') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Mạng có vấn đề, không lấy được dữ liệu');
        }
        return response.json();
      })
      .then((data) => {
        setDataList(data); 
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p style={{ color: 'red' }}>Lỗi: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Danh sách Users (Từ MockAPI)</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {dataList.map((item) => (
          <li key={item.id} style={{ 
              marginBottom: '10px', 
              background: '#f4f4f4', 
              padding: '10px', 
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#333'
            }}>
            {/* 2. SỬA HIỂN THỊ: Dùng avatar và name khớp với JSON */}
            <img 
              src={item.avatar} 
              alt={item.name} 
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
            <div>
              <strong>{item.name}</strong>
              <br/>
              <small>ID: {item.id}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromiseExample;