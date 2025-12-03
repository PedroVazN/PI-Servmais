import './Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>SERV+</h3>
          <p>Skill Pods - Equipes Modulares</p>
        </div>

        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul className="footer-links">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/contratar">Montar Skill Pod</Link></li>
            <li><Link to="/servico">Freelancers</Link></li>
            <li><Link to="/skillpods">Skill Pods</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <p>Tel: (11) 99999-9999</p>
          <p>servmais@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2025 Serv. Todos direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

