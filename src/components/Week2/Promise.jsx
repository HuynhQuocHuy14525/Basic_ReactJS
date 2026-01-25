import { useState, useEffect } from 'react';

const PromiseExample = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Sử dụng fetch (trả về một Promise)
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Mạng có vấn đề, không lấy được dữ liệu');
        }
        return response.json(); // .json() cũng trả về một Promise
      })
      .then((data) => {
        setProducts(data); // Thành công: Lưu dữ liệu vào state
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message); // Thất bại: Lưu lỗi
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p style={{ color: 'red' }}>Lỗi: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Danh sách sản phẩm (Dùng Promise)</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.price}$
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromiseExample;