
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './componentes/Header';
import HeroSection from './componentes/Hero';
import DateTimeOverlay from './componentes/DateTimeOverlay';
import Administrativo from './componentes/Administrativo';
import Servico from './componentes/Servico';
import Skillpods from './componentes/Skillpods';
import Contratar from "./componentes/Monstarequipe";


export default function App() {
  return (
    <BrowserRouter>
      <Header />

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
      </Routes>
    </BrowserRouter>
  );
}