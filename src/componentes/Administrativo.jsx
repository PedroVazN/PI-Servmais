import './Adm.css';
import { Link } from "react-router-dom";

export default function AdminSection() {
    return (
      <div className="admin-page">
        {/* Hero Section */}
        <div className="admin-hero">
          <div className="admin-hero-content">
            <div className="admin-badge">
              <span>⚡ Painel Administrativo</span>
            </div>
            <h1 className="admin-title">
              Gestão <span className="highlight-admin">SERV+</span>
            </h1>
            <p className="admin-subtitle">
              Acesse as áreas administrativas e gerencie usuários, freelancers e skill pods
            </p>
          </div>
          
          {/* Elementos decorativos */}
          <div className="admin-decorative">
            <div className="admin-circle admin-circle-1"></div>
            <div className="admin-circle admin-circle-2"></div>
            <div className="admin-circle admin-circle-3"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="admin-container">
          <div className="admin-cards-grid">
  
            {/* Card Usuário */}
            <div className="admin-card">
              <div className="admin-card-icon">
                <span>👤</span>
              </div>
              <div className="admin-card-content">
                <h3>Área do Usuário</h3>
                <p>Gerencie contas de usuários, perfis e configurações</p>
                <ul className="admin-features">
                  <li>📊 Dashboard de usuários</li>
                  <li>⚙️ Configurações de conta</li>
                  <li>📈 Estatísticas de uso</li>
                </ul>
              </div>
              <Link to="/AreaUser" className="admin-btn">
                Acessar Área
                <span className="admin-arrow">→</span>
              </Link>
            </div>
  
            {/* Card Freelancers */}
            <div className="admin-card">
              <div className="admin-card-icon">
                <span>💼</span>
              </div>
              <div className="admin-card-content">
                <h3>Área dos Freelancers</h3>
                <p>Administre freelancers, projetos e pagamentos</p>
                <ul className="admin-features">
                  <li>👨‍💻 Cadastro de profissionais</li>
                  <li>💰 Gestão de pagamentos</li>
                  <li>⭐ Avaliações e reviews</li>
                </ul>
              </div>
              <Link to="/AreaFrila" className="admin-btn">
                Acessar Área
                <span className="admin-arrow">→</span>
              </Link>
            </div>
  
            {/* Card Pods */}
            <div className="admin-card">
              <div className="admin-card-icon">
                <span>👥</span>
              </div>
              <div className="admin-card-content">
                <h3>Gestão dos Pods</h3>
                <p>Organize e monitore os Skill Pods ativos</p>
                <ul className="admin-features">
                  <li>🎯 Criação de equipes</li>
                  <li>📋 Status de projetos</li>
                  <li>🔄 Realocação de membros</li>
                </ul>
              </div>
              <Link to="/GestaoPods" className="admin-btn">
                Acessar Área
                <span className="admin-arrow">→</span>
              </Link>
            </div>
  
          </div>
        </div>
      </div>
    );
  }