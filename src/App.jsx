import { useState } from 'react';
import ProductCard from './components/Week1/ProductCard';
import Button from './components/Week1/Button';
import Alert from './components/Week1/Alert';
import LoginForm from './components/Week1/LoginForm';
import ProductList from './components/Week1/ProductList';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('bai1');

  return (
    <div className="app-container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>TUẦN 1</h1>
      
      <nav style={{ 
        display: 'flex', justifyContent: 'center', gap: '8px', 
        marginBottom: '30px', flexWrap: 'wrap' 
      }}>
        <button className={`nav-btn ${activeTab === 'bai1' ? 'active' : ''}`} onClick={() => setActiveTab('bai1')}>Bài 1: Card</button>
        <button className={`nav-btn ${activeTab === 'bai2' ? 'active' : ''}`} onClick={() => setActiveTab('bai2')}>Bài 2: Button</button>
        <button className={`nav-btn ${activeTab === 'bai3' ? 'active' : ''}`} onClick={() => setActiveTab('bai3')}>Bài 3: Alert</button>
        <button className={`nav-btn ${activeTab === 'bai4' ? 'active' : ''}`} onClick={() => setActiveTab('bai4')}>Bài 4: Login</button>
        <button className={`nav-btn ${activeTab === 'bai5' ? 'active' : ''}`} onClick={() => setActiveTab('bai5')}>Bài 5: Grid</button>
      </nav>

      <div className="demo-area" style={{ border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
        
        {activeTab === 'bai1' && (
          <section>
            <h2>Bài 1: Card sản phẩm</h2>
            <ProductCard name="Iphone" price="500.000đ" image="/images/iphone.jpg" />
          </section>
        )}

        {activeTab === 'bai2' && (
          <section>
            <h2>Bài 2: Button Component</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Button type="primary">Primary Button</Button>
              <Button type="danger">Danger Button</Button>
              <Button type="success">Success Button</Button>
            </div>
          </section>
        )}

        {activeTab === 'bai3' && (
          <section>
            <h2>Bài 3: Alert / Notification</h2>
            <Alert />
          </section>
        )}

        {activeTab === 'bai4' && (
          <section>
            <h2>Bài 4: Form đăng nhập</h2>
            <LoginForm />
          </section>
        )}

        {activeTab === 'bai5' && (
          <section>
            <h2>Bài 5: Responsive Layout</h2>
            <ProductList />
          </section>
        )}

      </div>
    </div>
  );
}

export default App;