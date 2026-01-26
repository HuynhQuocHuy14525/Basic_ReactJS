// src/App.jsx
import { useState } from 'react';
import './App.css';

// Week 1 Components
import ProductCard from './components/Week1/ProductCard';
import Button from './components/Week1/Button';
import Alert from './components/Week1/Alert';
import LoginForm from './components/Week1/LoginForm';
import ProductList from './components/Week1/ProductList';

// Week 2 Components
import PromiseExample from './components/Week2/PromiseExample';
import StudentInfo from './components/Week2/StudentInfo';
import Counter from './components/Week2/Counter';
import InputForm from './components/Week2/InputForm';
import StatusManager from './components/Week2/StatusBadge';
import TodoApp from './components/Week2/TodoApp';
// Week 3 Components
import UserForm from './components/Week3/UserForm';
import DigitalClock from './components/Week3/DigitalClock';
import ProductFilter from './components/Week3/ProductFilter';
import TodoMemo from './components/Week3/TodoMemo';
import Stopwatch from './components/Week3/Stopwatch';
import UserFetcher from './components/Week3/UserFetcher';
import ThemeSwitcher from './components/Week3/ThemeSwitcher';

function App() {
  const [currentWeek, setCurrentWeek] = useState(1);
  const [activeTab, setActiveTab] = useState('bai1');
// Hàm chuyển tuần và reset tab mặc định
  const changeWeek = (week) => {
    setCurrentWeek(week);
    
    // Nếu là tuần 2 thì bài đầu tiên là 'bai0', các tuần khác là 'bai1'
    if (week === 2) {
      setActiveTab('bai0');
    } else {
      setActiveTab('bai1');
    }
  };
  return (
    <div className="app-container">
      <h1 style={{ marginBottom: '40px', letterSpacing: '5px' }}>PHÁT TRIỂN GIAO DIỆN ỨNG DỤNG</h1>

      {/* MENU CHỌN TUẦN */}
      <nav className="week-menu">
        <span className={`week-item ${currentWeek === 1 ? 'active-week' : ''}`} onClick={() => changeWeek(1)}>Week 01</span>
        <span className={`week-item ${currentWeek === 2 ? 'active-week' : ''}`} onClick={() => changeWeek(2)}>Week 02</span>
        <span className={`week-item ${currentWeek === 3 ? 'active-week' : ''}`} onClick={() => changeWeek(3)}>Week 03</span>
      </nav>

      {/* MENU BÀI TẬP */}
      <nav className="tab-menu" style={{ flexWrap: 'wrap' }}>
        {currentWeek === 1 && (
          <>
            <button className={`nav-btn ${activeTab === 'bai1' ? 'active' : ''}`} onClick={() => setActiveTab('bai1')}>Bài 1: Card</button>
            <button className={`nav-btn ${activeTab === 'bai2' ? 'active' : ''}`} onClick={() => setActiveTab('bai2')}>Bài 2: Button</button>
            <button className={`nav-btn ${activeTab === 'bai3' ? 'active' : ''}`} onClick={() => setActiveTab('bai3')}>Bài 3: Alert</button>
            <button className={`nav-btn ${activeTab === 'bai4' ? 'active' : ''}`} onClick={() => setActiveTab('bai4')}>Bài 4: Login</button>
            <button className={`nav-btn ${activeTab === 'bai5' ? 'active' : ''}`} onClick={() => setActiveTab('bai5')}>Bài 5: Grid</button>
          </>
        )}

        {currentWeek === 2 && (
          <>
            <button className={`nav-btn ${activeTab === 'bai0' ? 'active' : ''}`} onClick={() => setActiveTab('bai0')}>Bài 0: PromiseExample</button>
            <button className={`nav-btn ${activeTab === 'bai1' ? 'active' : ''}`} onClick={() => setActiveTab('bai1')}>Bài 1: Student</button>
            <button className={`nav-btn ${activeTab === 'bai2' ? 'active' : ''}`} onClick={() => setActiveTab('bai2')}>Bài 2: Counter</button>
            <button className={`nav-btn ${activeTab === 'bai3' ? 'active' : ''}`} onClick={() => setActiveTab('bai3')}>Bài 3: Form</button>
            <button className={`nav-btn ${activeTab === 'bai4' ? 'active' : ''}`} onClick={() => setActiveTab('bai4')}>Bài 4: Status</button>
            <button className={`nav-btn ${activeTab === 'bai5' ? 'active' : ''}`} onClick={() => setActiveTab('bai5')}>Bài 5: Todo</button>
          </>
        )}

        {currentWeek === 3 && (
          <>
            <button className={`nav-btn ${activeTab === 'bai1' ? 'active' : ''}`} onClick={() => setActiveTab('bai1')}>B1: Form</button>
            <button className={`nav-btn ${activeTab === 'bai2' ? 'active' : ''}`} onClick={() => setActiveTab('bai2')}>B2: Clock</button>
            <button className={`nav-btn ${activeTab === 'bai3' ? 'active' : ''}`} onClick={() => setActiveTab('bai3')}>B3: Filter</button>
            <button className={`nav-btn ${activeTab === 'bai4' ? 'active' : ''}`} onClick={() => setActiveTab('bai4')}>B4: Memo</button>
            <button className={`nav-btn ${activeTab === 'bai5' ? 'active' : ''}`} onClick={() => setActiveTab('bai5')}>B5: Timer</button>
            <button className={`nav-btn ${activeTab === 'bai6' ? 'active' : ''}`} onClick={() => setActiveTab('bai6')}>B6: Users</button>
            <button className={`nav-btn ${activeTab === 'bai7' ? 'active' : ''}`} onClick={() => setActiveTab('bai7')}>B7: Theme</button>
          </>
        )}
      </nav>

      {/* KHU VỰC HIỂN THỊ */}
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
            {activeTab === 'bai0' && <section><h2>Bài 0: Promise</h2><PromiseExample /></section>}
            {activeTab === 'bai1' && <section><h2>Bài 1: Giới thiệu Sinh viên</h2><StudentInfo /></section>}
            {activeTab === 'bai2' && <section><h2>Bài 2: Counter App</h2><Counter /></section>}
            {activeTab === 'bai3' && <section><h2>Bài 3: Controlled Form</h2><InputForm /></section>}
            {activeTab === 'bai4' && <section><h2>Bài 4: Status Badge</h2><StatusManager /></section>}
            {activeTab === 'bai5' && <section><h2>Bài 5: Todo List</h2><TodoApp /></section>}
          </>
        )}

        {currentWeek === 3 && (
          <>
            {activeTab === 'bai1' && <section><h2>Bài 1: User Form</h2><UserForm /></section>}
            {activeTab === 'bai2' && <section><h2>Bài 2: Digital Clock</h2><DigitalClock /></section>}
            {activeTab === 'bai3' && <section><h2>Bài 3: Product Filter</h2><ProductFilter /></section>}
            {activeTab === 'bai4' && <section><h2>Bài 4: Todo Memo</h2><TodoMemo /></section>}
            {activeTab === 'bai5' && <section><h2>Bài 5: Stopwatch</h2><Stopwatch /></section>}
            {activeTab === 'bai6' && <section><h2>Bài 6: User Fetcher</h2><UserFetcher /></section>}
            {activeTab === 'bai7' && <section><h2>Bài 7: Theme Switcher</h2><ThemeSwitcher /></section>}
          </>
        )}
      
      </div>
    </div>
  );
}

export default App;