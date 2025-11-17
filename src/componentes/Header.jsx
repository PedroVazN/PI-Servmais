import '../App.css';
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
            <a href="/login.html" className="btn-link">ENTRAR</a>
            <a href="/cadastro.html" className="btn-cadastro">CADASTRE-SE</a>
          </div>
        </div>
      </header>
    );
  }
  