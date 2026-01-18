import { useState } from 'react';
import './Alert.css';
import Button from './Button';

const Alert = () => {
    const [status, setStatus] = useState(null);

    return (
        <div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Button type="success" onClick={() => setStatus('success')}>Success</Button>
                <Button type="warning" onClick={() => setStatus('warning')}>Warning</Button>
                <Button type="danger" onClick={() => setStatus('error')}>Error</Button>
            </div>

            <div className={`alert alert-${status} ${status ? 'show' : ''}`}>
                <span>
                    {status === 'success' && "Thành công!"}
                    {status === 'warning' && "Cảnh báo!"}
                    {status === 'error' && "Lỗi!"}
                </span>
                <button className="close-btn" onClick={() => setStatus(null)}>×</button>
            </div>
        </div>
    );
};

export default Alert;