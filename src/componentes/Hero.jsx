export default function HeroSection() {
    return (
      <section className="hero">
        <div className="hero-background">
          {/* Elementos decorativos */}
          <div className="decorative-elements">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="dots-pattern dots-1"></div>
            <div className="dots-pattern dots-2"></div>
            <div className="plus-icon plus-1">+</div>
            <div className="plus-icon plus-2">+</div>
            <div className="plus-icon plus-3">+</div>
            <div className="wave-line"></div>
          </div>
        </div>
  
        <div className="container hero-content">
          <div className="hero-text-section">
            <div className="hero-badge">
              <span>✨ Skill Pods - Equipes Modulares</span>
            </div>
  
            <h1 className="hero-title">
              MONTE SUA{" "}
              <span className="highlight">EQUIPE IDEAL</span>
              {" "}
              COM SKILL PODS
            </h1>
  
            <p className="hero-description">
              Conectamos você a equipes modulares de 2-4 profissionais complementares.
              Equipes pré-selecionadas e alinhadas para entregar projetos completos.
            </p>
  
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => (window.location.href = "contratar.html")}
              >
                MONTAR EQUIPE <span className="btn-icon">→</span>
              </button>
  
              <button
                className="btn-secondary"
                onClick={() => (window.location.href = "skillpods.html")}
              >
                VER SKILL PODS
              </button>
            </div>
  
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Skill Pods</span>
              </div>
  
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Profissionais</span>
              </div>
  
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfação</span>
              </div>
            </div>
          </div>
  
          <div className="hero-visual-section">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/LMODsQ6bmIE?autoplay=1&mute=1"
                title="SERV+ - Skill Pods"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
  