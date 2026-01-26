import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Setup: Chạy mỗi giây
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup: Xóa interval khi component unmount
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h3>Digital Clock</h3>
      <div style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'monospace', color: '#61dafb' }}>
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default DigitalClock;