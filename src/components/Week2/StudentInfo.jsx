// src/components/Week2/StudentInfo.jsx
import React from 'react';

// Component con: Header
const Header = () => (
  <header style={{ background: '#333', color: '#fff', padding: '10px', borderRadius: '5px 5px 0 0' }}>
    <h3>Student Profile</h3>
  </header>
);

// Component con: Footer
const Footer = () => (
  <footer style={{ background: '#eee', color: '#333', padding: '10px', marginTop: '10px', borderRadius: '0 0 5px 5px' }}>
    <small>&copy; 2026 IUH University</small>
  </footer>
);

// Component hiển thị thông tin (nhận props)
const InfoCard = ({ name, mssv, studentClass }) => (
  <div style={{ background: '#fff', color: '#000', padding: '20px', border: '1px solid #ccc' }}>
    <p><strong>Họ tên:</strong> {name}</p>
    <p><strong>MSSV:</strong> {mssv}</p>
    <p><strong>Lớp:</strong> {studentClass}</p>
  </div>
);

// Component chính
const StudentInfo = () => {
  // Dữ liệu mẫu truyền xuống qua props
  const student = {
    name: "Huỳnh Quốc Huy",
    mssv: "23654001",
    studentClass: "DHKTPM19ATT"
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <Header />
      <InfoCard name={student.name} mssv={student.mssv} studentClass={student.studentClass} />
      <Footer />
    </div>
  );
};

export default StudentInfo;