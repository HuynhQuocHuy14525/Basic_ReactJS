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

// --- SỬA Ở ĐÂY: Import HookEx (thay vì HooksAllInOne) ---
import HookEx from './components/ex/HookEx'; 

function App() {
  const [currentWeek, setCurrentWeek] = useState(1);
  const [activeTab, setActiveTab] = useState('bai1');

  const changeWeek = (week) => {
    setCurrentWeek(week);
    if (week === 2) setActiveTab('bai0');
    else setActiveTab('bai1');
  };

  return (
    <div className="app-container">
      <h1 style={{ marginBottom: '40px', letterSpacing: '5px' }}>PHÁT TRIỂN GIAO DIỆN ỨNG DỤNG</h1>

      <nav className="week-menu">
        <span className={`week-item ${currentWeek === 1 ? 'active-week' : ''}`} onClick={() => changeWeek(1)}>Week 01</span>
        <span className={`week-item ${currentWeek === 2 ? 'active-week' : ''}`} onClick={() => changeWeek(2)}>Week 02</span>
        <span className={`week-item ${currentWeek === 3 ? 'active-week' : ''}`} onClick={() => changeWeek(3)}>Week 03</span>
        <span className={`week-item ${currentWeek === 4 ? 'active-week' : ''}`} onClick={() => changeWeek(4)}>Review Hooks</span>
      </nav>

      {currentWeek !== 4 && (
        <nav className="tab-menu" style={{ flexWrap: 'wrap' }}>
            {/* ... (Giữ nguyên phần menu cũ của Week 1, 2, 3) ... */}
            {/* Code dài quá nên mình ẩn bớt đoạn giữa không thay đổi này nhé */}
             {currentWeek === 1 && (
            <>
              <button className={`nav-btn ${activeTab === 'bai1' ? 'active' : ''}`} onClick={() => setActiveTab('bai1')}>Bài 1</button>
              <button className={`nav-btn ${activeTab === 'bai2' ? 'active' : ''}`} onClick={() => setActiveTab('bai2')}>Bài 2</button>
              <button className={`nav-btn ${activeTab === 'bai3' ? 'active' : ''}`} onClick={() => setActiveTab('bai3')}>Bài 3</button>
              <button className={`nav-btn ${activeTab === 'bai4' ? 'active' : ''}`} onClick={() => setActiveTab('bai4')}>Bài 4</button>
              <button className={`nav-btn ${activeTab === 'bai5' ? 'active' : ''}`} onClick={() => setActiveTab('bai5')}>Bài 5</button>
            </>
          )}

          {currentWeek === 2 && (
            <>
              <button className={`nav-btn ${activeTab === 'bai0' ? 'active' : ''}`} onClick={() => setActiveTab('bai0')}>Bài 0</button>
              <button className={`nav-btn ${activeTab === 'bai1' ? 'active' : ''}`} onClick={() => setActiveTab('bai1')}>Bài 1</button>
              <button className={`nav-btn ${activeTab === 'bai2' ? 'active' : ''}`} onClick={() => setActiveTab('bai2')}>Bài 2</button>
              <button className={`nav-btn ${activeTab === 'bai3' ? 'active' : ''}`} onClick={() => setActiveTab('bai3')}>Bài 3</button>
              <button className={`nav-btn ${activeTab === 'bai4' ? 'active' : ''}`} onClick={() => setActiveTab('bai4')}>Bài 4</button>
              <button className={`nav-btn ${activeTab === 'bai5' ? 'active' : ''}`} onClick={() => setActiveTab('bai5')}>Bài 5</button>
            </>
          )}

          {currentWeek === 3 && (
            <>
              <button className={`nav-btn ${activeTab === 'bai1' ? 'active' : ''}`} onClick={() => setActiveTab('bai1')}>B1</button>
              <button className={`nav-btn ${activeTab === 'bai2' ? 'active' : ''}`} onClick={() => setActiveTab('bai2')}>B2</button>
              <button className={`nav-btn ${activeTab === 'bai3' ? 'active' : ''}`} onClick={() => setActiveTab('bai3')}>B3</button>
              <button className={`nav-btn ${activeTab === 'bai4' ? 'active' : ''}`} onClick={() => setActiveTab('bai4')}>B4</button>
              <button className={`nav-btn ${activeTab === 'bai5' ? 'active' : ''}`} onClick={() => setActiveTab('bai5')}>B5</button>
              <button className={`nav-btn ${activeTab === 'bai6' ? 'active' : ''}`} onClick={() => setActiveTab('bai6')}>B6</button>
              <button className={`nav-btn ${activeTab === 'bai7' ? 'active' : ''}`} onClick={() => setActiveTab('bai7')}>B7</button>
            </>
          )}
        </nav>
      )}

      <div className="demo-area">
        {/* ... (Giữ nguyên phần hiển thị cũ của Week 1, 2, 3) ... */}
        {currentWeek === 1 && (
          <>
            {activeTab === 'bai1' && <ProductCard name="Iphone" price="500.000đ" image="/images/iphone.jpg" />}
            {activeTab === 'bai2' && <div style={{display:'flex', gap:10}}><Button type="primary">Btn</Button></div>}
            {activeTab === 'bai3' && <Alert />}
            {activeTab === 'bai4' && <LoginForm />}
            {activeTab === 'bai5' && <ProductList />}
          </>
        )}

        {currentWeek === 2 && (
          <>
            {activeTab === 'bai0' && <PromiseExample />}
            {activeTab === 'bai1' && <StudentInfo />}
            {activeTab === 'bai2' && <Counter />}
            {activeTab === 'bai3' && <InputForm />}
            {activeTab === 'bai4' && <StatusManager />}
            {activeTab === 'bai5' && <TodoApp />}
          </>
        )}

        {currentWeek === 3 && (
          <>
            {activeTab === 'bai1' && <UserForm />}
            {activeTab === 'bai2' && <DigitalClock />}
            {activeTab === 'bai3' && <ProductFilter />}
            {activeTab === 'bai4' && <TodoMemo />}
            {activeTab === 'bai5' && <Stopwatch />}
            {activeTab === 'bai6' && <UserFetcher />}
            {activeTab === 'bai7' && <ThemeSwitcher />}
          </>
        )}

        {/* --- SỬA Ở ĐÂY: Gọi HookEx (thay vì HooksAllInOne) --- */}
        {currentWeek === 4 && <HookEx />}
      </div>
    </div>
  );
}

export default App;