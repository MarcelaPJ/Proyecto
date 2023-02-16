import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Home from './views/Home/Home';
import Datos from './views/Datos/Datos'; 
import Info from './views/Info.jsx/Info';
import AcademiesForm from './components/AcademiesForm/AcademiesForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<AcademiesForm />} />
          <Route path="/datos" element={<Datos />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
