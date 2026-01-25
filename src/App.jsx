import { useState } from 'react';
import ProductCard from './components/Week1/ProductCard';
import Button from './components/Week1/Button';
import Alert from './components/Week1/Alert';
import LoginForm from './components/Week1/LoginForm';
import ProductList from './components/Week1/ProductList';
import PromiseExample from './components/Week2/Promise';
import './App.css';

function App() {
  const [currentWeek, setCurrentWeek] = useState(1);
  const [activeTab, setActiveTab] = useState('bai1');

  // Hàm chuyển tuần và reset tab mặc định
  const changeWeek = (week) => {
    setCurrentWeek(week);
    setActiveTab(week === 1 ? 'bai1' : 'promise');
  };

  return (
    <div className="app-container">
      <h1 style={{ marginBottom: '40px', letterSpacing: '5px' }}>PHÁT TRIỂN GIAO DIỆN ỨNG DỤNG</h1>
      
      {/* MENU TUẦN */}
      <nav className="week-menu">
        <span className={`week-item ${currentWeek === 1 ? 'active-week' : ''}`} onClick={() => changeWeek(1)}>Week 01</span>
        <span className={`week-item ${currentWeek === 2 ? 'active-week' : ''}`} onClick={() => changeWeek(2)}>Week 02</span>
      </nav>

      {/* MENU BÀI TẬP */}
      <nav className="tab-menu">
        {currentWeek === 1 ? (
          <>
            <button className={`nav-btn ${activeTab === 'bai1' ? 'active' : ''}`} onClick={() => setActiveTab('bai1')}>Bài 1: Card</button>
            <button className={`nav-btn ${activeTab === 'bai2' ? 'active' : ''}`} onClick={() => setActiveTab('bai2')}>Bài 2: Button</button>
            <button className={`nav-btn ${activeTab === 'bai3' ? 'active' : ''}`} onClick={() => setActiveTab('bai3')}>Bài 3: Alert</button>
            <button className={`nav-btn ${activeTab === 'bai4' ? 'active' : ''}`} onClick={() => setActiveTab('bai4')}>Bài 4: Login</button>
            <button className={`nav-btn ${activeTab === 'bai5' ? 'active' : ''}`} onClick={() => setActiveTab('bai5')}>Bài 5: Grid</button>
          </>
        ) : (
          <>
            <button className={`nav-btn ${activeTab === 'promise' ? 'active' : ''}`} onClick={() => setActiveTab('promise')}>Bài 1: Promise API</button>
          </>
        )}
      </nav>

      {/* NỘI DUNG HIỂN THỊ */}
      <div className="demo-area">
        {currentWeek === 1 && (
          <>
            {activeTab === 'bai1' && <section><h2>Bài 1: Card sản phẩm</h2><ProductCard name="Iphone" price="500.000đ" image="/images/iphone.jpg" /></section>}
            
            {activeTab === 'bai2' && (
              <section>
                <h2>Bài 2: Button Component</h2>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <Button type="primary">Primary Button</Button>
                  <Button type="danger">Danger Button</Button>
                  <Button type="success">Success Button</Button>
                </div>
              </section>
            )}

            {activeTab === 'bai3' && <section><h2>Bài 3: Alert</h2><Alert /></section>}
            {activeTab === 'bai4' && <section><h2>Bài 4: Login Form</h2><LoginForm /></section>}
            {activeTab === 'bai5' && <section><h2>Bài 5: Responsive Grid</h2><ProductList /></section>}
          </>
        )}

        {currentWeek === 2 && (
          <>
            {activeTab === 'promise' && <section><h2>Tuần 2: Thực hành Promise</h2><PromiseExample /></section>}
          </>
        )}
      </div>
    </div>
  );
}

export default App;