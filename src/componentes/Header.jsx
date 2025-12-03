import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <header className="header">

      <div className="logo">SERV+</div>

      {/* BOTÃO HAMBÚRGUER */}
      <div className={`hamburger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MENU */}
      <nav className={`nav ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>INÍCIO</Link>
        <Link to="/servico" onClick={() => setOpen(false)}>SERVIÇOS</Link>
        <Link to="/skillpods" onClick={() => setOpen(false)}>SKILL PODS</Link>
        <Link to="/adm" onClick={() => setOpen(false)}>ADM</Link>
        <Link to="/contratar" onClick={() => setOpen(false)}>Monte sua Equipe</Link>
        <Link to="/login" className="btn-cadastro">ENTRAR</Link>
        <Link to="/cadastro" className="btn-cadastro">CADASTRE-SE</Link>
      </nav>

      <div className="header-actions">
        <Link to="/login" className="btn-cadastro">ENTRAR</Link>
        <Link to="/cadastro" className="btn-cadastro">CADASTRE-SE</Link>
      </div>

    </header>
  );
}
