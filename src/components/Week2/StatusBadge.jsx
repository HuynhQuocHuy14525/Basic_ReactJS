// src/components/Week2/StatusBadge.jsx
import { useState } from 'react';

// Component hiển thị Badge
const Badge = ({ status }) => {
  let style = {
    padding: '10px 20px',
    borderRadius: '20px',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    display: 'inline-block'
  };

  // Logic đổi màu nền
  if (status === 'online') style.backgroundColor = '#52c41a'; // Xanh lá
  else if (status === 'busy') style.backgroundColor = '#f5222d'; // Đỏ
  else style.backgroundColor = '#8c8c8c'; // Xám (offline)

  return <span style={style}>{status}</span>;
};

// Component cha để điều khiển
const StatusManager = () => {
  const [status, setStatus] = useState('online');

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <Badge status={status} />
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setStatus('online')}>Set Online</button>
        <button onClick={() => setStatus('busy')}>Set Busy</button>
        <button onClick={() => setStatus('offline')}>Set Offline</button>
      </div>
    </div>
  );
};

export default StatusManager;