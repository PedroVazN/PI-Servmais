import '../componentes/Servico.css';
import { Link } from "react-router-dom";
import freelancer1 from '../Assets/freelancer1.jpg';
import freelancer2 from '../Assets/freelancer2.jpg';
import freelancer3 from '../Assets/freelancer3.jpg';
import freelancer4 from '../Assets/freelancer4.jpg';
import freelancer5 from '../Assets/freelancer5.jpg';
import freelancer6 from '../Assets/freelancer6.jpg';

export default function Servico() {
    return (
      <>

        {/* Main Content */}
        <main className="main-content">
  
          {/* Título */}
          <section className="title-section">
            <div className="container">
              <h1>FREELANCERS DISPONÍVEIS</h1>
              <p>Profissionais especializados prontos para colaborar no seu projeto.</p>
            </div>
          </section>
  
          {/* Grid de Freelancers */}
          <section className="freelancers-section">
            <div className="container">
              <div className="freelancers-grid">
  
                {/* Freelancer 1 */}
                <div className="freelancer-card">
                  <div className="freelancer-avatar">
                  <img src={freelancer1} alt="João Silva" />
                  </div>
                  <h3 className="freelancer-name">João Silva</h3>
                  <p className="freelancer-role">Front-end Developer</p>
                  <ul className="freelancer-skills">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML & CSS</li>
                  </ul>
                </div>
  
                {/* Freelancer 2 */}
                <div className="freelancer-card">
                  <div className="freelancer-avatar">
                  <img src={freelancer2} alt="Carlos Lima" />
                  </div>
                  <h3 className="freelancer-name">Carlos Lima</h3>
                  <p className="freelancer-role">UI/UX Designer</p>
                  <ul className="freelancer-skills">
                    <li>Figma</li>
                    <li>Design Systems</li>
                    <li>Prototipagem</li>
                  </ul>
                </div>
  
                {/* Freelancer 3 */}
                <div className="freelancer-card">
                  <div className="freelancer-avatar">
                  <img src={freelancer3} alt="Maria Souza" />
                  </div>
                  <h3 className="freelancer-name">Maria Souza </h3>
                  <p className="freelancer-role">Back-end Developer</p>
                  <ul className="freelancer-skills">
                    <li>Node.js</li>
                    <li>TypeScript</li>
                    <li>SQL</li>
                  </ul>
                </div>
  
                {/* Freelancer 4 */}
                <div className="freelancer-card">
                  <div className="freelancer-avatar">
                  <img src={freelancer4} alt="Ana Pereira" />
                  </div>
                  <h3 className="freelancer-name">Ana Pereira</h3>
                  <p className="freelancer-role">DevOps Engineer</p>
                  <ul className="freelancer-skills">
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                  </ul>
                </div>
  
                {/* Freelancer 5 */}
                <div className="freelancer-card">
                  <div className="freelancer-avatar">
                  <img src={freelancer5} alt="Beatriz Alves" />
                  </div>
                  <h3 className="freelancer-name">Beatriz Alves</h3>
                  <p className="freelancer-role">Mobile Developer</p>
                  <ul className="freelancer-skills">
                    <li>Flutter</li>
                    <li>Dart</li>
                    <li>Firebase</li>
                  </ul>
                </div>
  
                {/* Freelancer 6 */}
                <div className="freelancer-card">
                  <div className="freelancer-avatar">
                  <img src={freelancer6} alt="Rafael Costa " />
                  </div>
                  <h3 className="freelancer-name">Rafael Costa </h3>
                  <p className="freelancer-role">Data Scientist</p>
                  <ul className="freelancer-skills">
                    <li>Python</li>
                    <li>Machine Learning</li>
                    <li>SQL</li>
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
                <li><a href="/index.html">Início</a></li>
                <li><a href="/contratar.html">Montar Skill Pod</a></li>
                <li><a href="/freelancers.html">Freelancers</a></li>
                <li><a href="/cadastro.html">Ser Contratado</a></li>
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
      </>
    );
  }
  