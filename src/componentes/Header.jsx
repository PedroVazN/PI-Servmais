import './Header.css';
import { Link } from "react-router-dom";
export default function Header() {
    return (
      <header className="header">
        <div className="container header-flex">
          <div className="logo">SERV+</div>
  
          <nav className="nav">
          <Link to="/">INÍCIO</Link>
          <Link to="/servico">SERVIÇOS</Link>
          <Link to="/skillpods">SKILL PODS</Link>
          <Link to="/adm">ADM</Link>
          <Link to="/contratar">Monte sua Equipe</Link>
          </nav>
  
          <div className="header-actions">
            <Link to="/login" className="btn-cadastro">ENTRAR</Link>
            <Link to="/cadastro" className="btn-cadastro">CADASTRE-SE</Link>
          </div>
        </div>
      </header>
    );
  }
  