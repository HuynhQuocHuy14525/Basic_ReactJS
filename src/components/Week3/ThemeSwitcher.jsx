// src/components/Week3/ThemeSwitcher.jsx
import React, { useState, useContext, createContext, useEffect } from 'react';

// 1. Tạo Context
const ThemeContext = createContext();

// 2. Tạo Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
      // Lấy từ localStorage hoặc mặc định là 'light'
      return localStorage.getItem('appTheme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('appTheme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Các component con (Mô phỏng 3 cấp)
const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button 
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#333' : '#fff',
        color: theme === 'light' ? '#fff' : '#333',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

const Card = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ 
      padding: '20px', 
      margin: '20px',
      border: '1px solid',
      borderColor: theme === 'light' ? '#ccc' : '#555',
      background: theme === 'light' ? '#f9f9f9' : '#222',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <h4>Theme Card Component</h4>
      <p>Current theme is: <strong>{theme}</strong></p>
      <ThemedButton />
    </div>
  );
};

const Layout = () => (
  <div>
    <Card />
  </div>
);

// Component chính export ra
const ThemeSwitcher = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

export default ThemeSwitcher;