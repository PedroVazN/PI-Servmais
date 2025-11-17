import '../componentes/Skillpods.css';
export default function SkillPods() {
    return (
      <>
        {/* Main Content */}
        <main className="main-content">
          
          {/* Título */}
          <section className="title-section">
            <div className="container">
              <h1>SKILL PODS DISPONÍVEIS</h1>
              <p>Equipes modulares de 2-4 profissionais prontas para iniciar seu projeto.</p>
            </div>
          </section>
  
          {/* Grid de Skill Pods */}
          <section className="skillpods-section">
            <div className="container">
              <div className="skillpods-grid">
  
                {/* Skill Pod 1 */}
                <div className="skillpod-card">
                  <div className="skillpod-header">
                    <h3 className="skillpod-name">Web Excellence</h3>
                    <span className="skillpod-size">3 Pessoas</span>
                  </div>
                  <p className="skillpod-description">
                    Front-end, Back-end e UI/UX Designer prontos para criar seu site completo.
                  </p>
                  <ul className="skillpod-members">
                    <li>👨‍💻 Front-end Dev</li>
                    <li>🖥️ Back-end Dev</li>
                    <li>🎨 UI/UX Designer</li>
                  </ul>
                </div>
  
                {/* Skill Pod 2 */}
                <div className="skillpod-card">
                  <div className="skillpod-header">
                    <h3 className="skillpod-name">Mobile Rockets</h3>
                    <span className="skillpod-size">3 Pessoas</span>
                  </div>
                  <p className="skillpod-description">
                    Equipe focada em aplicativos móveis, do design ao deploy.
                  </p>
                  <ul className="skillpod-members">
                    <li>📱 Mobile Dev</li>
                    <li>🖥️ Back-end Dev</li>
                    <li>☁️ DevOps</li>
                  </ul>
                </div>
  
                {/* Skill Pod 3 */}
                <div className="skillpod-card">
                  <div className="skillpod-header">
                    <h3 className="skillpod-name">Data Insights</h3>
                    <span className="skillpod-size">4 Pessoas</span>
                  </div>
                  <p className="skillpod-description">
                    Transforme dados em decisões com esta equipe especialista.
                  </p>
                  <ul className="skillpod-members">
                    <li>🧠 Data Scientist</li>
                    <li>🛠️ Data Engineer</li>
                    <li>📊 BI Analyst</li>
                    <li>☁️ DevOps</li>
                  </ul>
                </div>
  
                {/* Skill Pod 4 */}
                <div className="skillpod-card">
                  <div className="skillpod-header">
                    <h3 className="skillpod-name">Marketing Boost</h3>
                    <span className="skillpod-size">2 Pessoas</span>
                  </div>
                  <p className="skillpod-description">
                    Combine copywriting e tráfego pago para alavancar suas vendas.
                  </p>
                  <ul className="skillpod-members">
                    <li>✍️ Copywriter</li>
                    <li>📈 Paid Media Specialist</li>
                  </ul>
                </div>
  
                {/* Skill Pod 5 */}
                <div className="skillpod-card">
                  <div className="skillpod-header">
                    <h3 className="skillpod-name">E-commerce Squad</h3>
                    <span className="skillpod-size">4 Pessoas</span>
                  </div>
                  <p className="skillpod-description">
                    Lançamento de loja virtual com especialistas em Shopify, SEO e Design.
                  </p>
                  <ul className="skillpod-members">
                    <li>🛒 E-commerce Dev</li>
                    <li>🔍 SEO Specialist</li>
                    <li>🎨 Designer</li>
                    <li>🤝 Project Manager</li>
                  </ul>
                </div>
  
                {/* Skill Pod 6 */}
                <div className="skillpod-card">
                  <div className="skillpod-header">
                    <h3 className="skillpod-name">Infra Safe</h3>
                    <span className="skillpod-size">3 Pessoas</span>
                  </div>
                  <p className="skillpod-description">
                    Equipe focada em infraestrutura segura e escalável.
                  </p>
                  <ul className="skillpod-members">
                    <li>☁️ Cloud Architect</li>
                    <li>🔒 Security Engineer</li>
                    <li>🛠️ DevOps</li>
                  </ul>
                </div>
  
              </div>
            </div>
          </section>
        </main>
  
        {/* Footer */}
        <footer className="footer">
          <div className="container footer-content">
  
            <div className="footer-section">
              <h3>SERV+</h3>
              <p>Skill Pods - Equipes Modulares</p>
            </div>
  
            <div className="footer-section">
              <h3>Links Rápidos</h3>
              <ul className="footer-links">
                <li><a href="/">Início</a></li>
                <li><a href="/contratar">Montar Skill Pod</a></li>
                <li><a href="/freelancers">Freelancers</a></li>
                <li><a href="/skillpods">Skill Pods</a></li>
              </ul>
            </div>
  
            <div className="footer-section">
              <h3>Contato</h3>
              <p>Tel: (11) 934934-2343</p>
              <p>servmais@gmail.com</p>
            </div>
          </div>
  
          <div className="footer-bottom">
            <div className="container">
              <p>© 2025 Serv. Todos direitos reservados.</p>
            </div>
          </div>
        </footer>
      </>
    );
  }
  