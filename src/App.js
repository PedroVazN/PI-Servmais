import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css';

import Header from './componentes/Header';
import HeroSection from './componentes/Hero';
import DateTimeOverlay from './componentes/DateTimeOverlay';
import Administrativo from './componentes/Administrativo';
import Servico from './componentes/Servico';
import Skillpods from './componentes/Skillpods';
import Contratar from "./componentes/Monstarequipe";
import Cadastro from "./componentes/Cadastro";
import Login from "./componentes/Login";

function Layout() {
  const location = useLocation();
  const hideHeader = location.pathname === '/login' || location.pathname === '/cadastro';

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <DateTimeOverlay />
          </>
        } />
        <Route path="/adm" element={<Administrativo />} />
        <Route path="/servico" element={<Servico />} />
        <Route path="/skillpods" element={<Skillpods />} />
        <Route path="/contratar" element={<Contratar />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}