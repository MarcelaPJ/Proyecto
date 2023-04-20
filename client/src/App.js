import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Home from './views/Home/Home';
import Datos from './views/Datos/Datos'; 
import InfoFutbol from './views/Info/futbol/InfoFutbol';
import InfoTenis from './views/Info/tenis/InfoTenis';
import AcademiesForm from './components/AcademiesForm/AcademiesForm';
import InfoBasq from './views/Info/basquetball/InfoBasq';
import InfoNat from './views/Info/natacion/InfoNat';
import InfoAtle from './views/Info/atletismo/InfoAtle';
import InfoTeatro from './views/Info/teatro/InfoTeatro';
import InfoMusica from './views/Info/musica/InfoMusica';
import InfoAstro from './views/Info/astronomia/InfoAstro';

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
          <Route path="/futbol" element={<InfoFutbol />} />
          <Route path="/tenis" element={<InfoTenis />} />
          <Route path="/basquetball" element={<InfoBasq />} />
          <Route path="/natacion" element={<InfoNat />} />
          <Route path="/atletismo" element={<InfoAtle />} />
          <Route path="/teatro" element={<InfoTeatro />} />
          <Route path="/musica" element={<InfoMusica />} />
          <Route path="/astronomia" element={<InfoAstro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
