import { useState, useEffect, useRef } from "react";
import '../componentes/Montarequipe.css';
import dev_front from '../Assets/dev_front.png';
import design_grafico from '../Assets/design_grafico.png';
import marketing_dig from '../Assets/marketing_dig.png';
import consultoria from '../Assets/consultoria.png';
import pintor from '../Assets/pintor.png';
import pedreiro from '../Assets/pedreiro.png';
import pessoa1 from '../Assets/pessoa1.svg';
import pessoa2 from '../Assets/pessoa2.svg';
import freelancer_icon from '../Assets/freelancer-icon.svg';
import team_icon from '../Assets/team-icon.svg';

export default function Contratar() {
  // Dados completos dos Skill Pods
  const slides = [
    {
      title: "Skill Pod Web",
      img: dev_front,
      description: "Equipe especializada em desenvolvimento web completo, desde o front-end até o back-end, garantindo soluções digitais modernas e eficientes.",
      professionals: ["Desenvolvedor Front-end Senior", "Desenvolvedor Back-end Senior", "DevOps Engineer", "UI/UX Designer"],
      benefits: ["Desenvolvimento ágil e eficiente", "Código limpo e bem documentado", "Suporte contínuo", "Garantia de qualidade"]
    },
    {
      title: "Skill Pod Design",
      img: design_grafico,
      description: "Time criativo focado em design gráfico e identidade visual, transformando ideias em designs impactantes e memoráveis.",
      professionals: ["Designer Gráfico Senior", "UI/UX Designer", "Ilustrador Digital", "Motion Designer"],
      benefits: ["Designs únicos e personalizados", "Identidade visual consistente", "Artes para todas as plataformas", "Revisões ilimitadas"]
    },
    {
      title: "Skill Pod Marketing",
      img: marketing_dig,
      description: "Equipe de marketing digital completa, especializada em estratégias de crescimento e engajamento nas redes sociais.",
      professionals: ["Social Media Manager", "Content Creator", "Analista de Marketing Digital", "Copywriter"],
      benefits: ["Estratégias personalizadas", "Análise de métricas", "Conteúdo otimizado", "Gestão de comunidade"]
    },
    {
      title: "Skill Pod Consultoria",
      img: consultoria,
      description: "Time de consultores especializados em diferentes áreas, oferecendo soluções estratégicas para seu negócio.",
      professionals: ["Consultor de Negócios", "Analista Financeiro", "Especialista em Processos", "Consultor de RH"],
      benefits: ["Análise completa do negócio", "Plano de ação detalhado", "Acompanhamento contínuo", "Resultados mensuráveis"]
    },
    {
      title: "Skill Pod Construção",
      img: pintor,
      description: "Equipe completa para projetos de construção, desde a pintura até acabamentos finais, com qualidade e pontualidade.",
      professionals: ["Mestre de Obras", "Pintor Profissional", "Ajudante de Construção", "Especialista em Acabamentos"],
      benefits: ["Materiais de qualidade", "Trabalho garantido", "Limpeza após serviço", "Orçamento transparente"]
    },
    {
      title: "Skill Pod Reformas",
      img: pedreiro,
      description: "Time especializado em reformas e manutenção, oferecendo soluções completas para sua residência ou empresa.",
      professionals: ["Pedreiro Especialista", "Eletricista", "Encanador", "Ajudante de Obras"],
      benefits: ["Orçamento detalhado", "Prazo cumprido", "Garantia do serviço", "Suporte pós-obra"]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [popupIndex, setPopupIndex] = useState(null);
  const autoPlayRef = useRef();
  const touchStartX = useRef(0);

  const totalSlides = slides.length;

  const moveCarousel = (direction) => {
    setCurrentSlide((prev) => (prev + direction + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => setCurrentSlide(index);
  const showPopup = (index) => setPopupIndex(index);
  const closePopup = () => setPopupIndex(null);

  // Auto-play
  useEffect(() => {
    autoPlayRef.current = () => moveCarousel(1);
  });

  useEffect(() => {
    const play = () => autoPlayRef.current();
    const interval = setInterval(play, 4000);
    return () => clearInterval(interval);
  }, []);

  // Teclado
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "ArrowLeft") moveCarousel(-1);
      if (event.key === "ArrowRight") moveCarousel(1);
      if (event.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* Main Content */}
      <main className="main-content">
        <div className="hero-bg"></div>

        {/* Título */}
        <section className="title-section">
          <div className="container">
            <h1>MONTE SUA SKILL POD</h1>
          </div>
        </section>

        {/* Carrossel */}
        <section className="carousel-section">
          <div className="container">
            <div
              className="carousel-container"
              onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                const diff = touchStartX.current - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) moveCarousel(diff > 0 ? 1 : -1);
              }}
            >
              <button className="carousel-btn prev" onClick={() => moveCarousel(-1)}>‹</button>
              <div className="carousel-wrapper">
                <div className="carousel-track">
                  {slides.map((slide, i) => {
                    const position =
                      i === currentSlide
                        ? "active"
                        : i === (currentSlide - 1 + totalSlides) % totalSlides
                        ? "prev"
                        : i === (currentSlide + 1) % totalSlides
                        ? "next"
                        : "";
                    return (
                      <div
                        key={i}
                        className={`carousel-slide ${position}`}
                        onClick={() => showPopup(i)}
                      >
                        <img src={slide.img} alt={slide.title} className="carousel-img" />
                        <div className="carousel-overlay">
                          <h3 className="carousel-title">{slide.title}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button className="carousel-btn next" onClick={() => moveCarousel(1)}>›</button>

              {/* Indicadores */}
              <div className="carousel-indicators">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`indicator ${i === currentSlide ? "active" : ""}`}
                    onClick={() => goToSlide(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popup */}
        {popupIndex !== null && (
          <div className="popup" onClick={(e) => e.target === e.currentTarget && closePopup()}>
            <div className="popup-content">
              <span className="close-popup" onClick={closePopup}>&times;</span>
              <div className="popup-header">
                <img src={slides[popupIndex].img} alt={slides[popupIndex].title} />
                <h2>{slides[popupIndex].title}</h2>
              </div>
              <div className="popup-body">
                <div className="popup-info">
                <h3>Descrição</h3>
                <p>{slides[popupIndex].description}</p>

                <h3>Profissionais</h3>
                <ul>
                  {slides[popupIndex].professionals.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                <h3>Benefícios</h3>
                <ul>
                  {slides[popupIndex].benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="popup-footer">
                <button className="btn-explore" onClick={() => window.location.href='skillpods.html'}>
                  CONTRATAR SKILL POD <span className="btn-icon">→</span>
                </button>
              </div>
            </div>
          </div>
          </div>
        )}

        {/* Serviços */}
        <section className="services-section">
          <div className="container">
            <div className="services-grid">
              {/* Digital */}
              <div className="service-card">
                <div className="card-icon">
                <img src={pessoa1} alt="Digital" />
                </div>
                <h3>Skill Pods Digitais</h3>
                <ul className="service-list">
                  <li>Front-end + Back-end + DevOps</li>
                  <li>UI/UX + Front-end + Back-end</li>
                  <li>Full-Stack + DevOps + QA</li>
                  <li>Mobile + Back-end + DevOps</li>
                  <li>UI/UX + Front-end + Copywriting</li>
                  <li>Data Engineer + Data Scientist + DevOps</li>
                  <li>Front-end + Back-end + Mobile</li>
                  <li>DevOps + Security + Back-end</li>
                </ul>
              </div>

              {/* Presencial */}
              <div className="service-card">
                <div className="card-icon">
                <img src={pessoa2} alt="Presencial" />
                </div>
                <h3>Skill Pods Presenciais</h3>
                <ul className="service-list">
                  <li>Pintor + Ajudante + Limpeza</li>
                  <li>Pedreiro + Ajudante + Eletricista</li>
                  <li>Encanador + Eletricista + Pedreiro</li>
                  <li>Jardineiro + Ajudante + Limpeza</li>
                  <li>Faxineiro + Ajudante + Organizador</li>
                  <li>Garçom + Cozinheiro + Auxiliar</li>
                  <li>Manobrista + Porteiro + Segurança</li>
                  <li>Pedreiro + Encanador + Eletricista</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Profissionais */}
        <section className="professionals-section">
          <div className="container">
            <div className="section-header">
              <h2>ESCOLHA COMO TRABALHAR</h2>
              <p>Contrate profissionais isolados ou monte sua equipe ideal</p>
            </div>

            <div className="professionals-grid">
              {/* Freelancers */}
              <div className="professional-card freelancer">
                <div className="card-header">
                <img src={freelancer_icon} alt="Presencial" className="card-icon" />
                  <h3>Freelancers</h3>
                </div>
                <div className="card-content">
                  <p className="card-description">
                    Contrate profissionais individuais para projetos específicos ou tarefas pontuais.
                  </p>
                  <ul className="features-list">
                    <li>✓ Profissionais especializados</li>
                    <li>✓ Contratação flexível</li>
                    <li>✓ Preços por hora/projeto</li>
                    <li>✓ Ideal para tarefas específicas</li>
                  </ul>
                  <button className="btn-explore" onClick={() => window.location.href='freelancers.html'}>
                    EXPLORAR FREELANCERS <span className="btn-icon">→</span>
                  </button>
                </div>
              </div>

              {/* Skill Pods */}
              <div className="professional-card skillpod">
                <div className="card-header">
                <img src={team_icon} alt="Skill Pods" className="card-icon" />
                  <h3>Skill Pods</h3>
                </div>
                <div className="card-content">
                  <p className="card-description">
                    Equipes modulares de 2-4 profissionais complementares, prontas para entregar projetos completos.
                  </p>
                  <ul className="features-list">
                    <li>✓ Equipes pré-selecionadas</li>
                    <li>✓ Habilidades complementares</li>
                    <li>✓ Gestão simplificada</li>
                    <li>✓ Ideal para projetos completos</li>
                  </ul>
                  <button className="btn-explore" onClick={() => window.location.href='skillpods.html'}>
                    EXPLORAR SKILL PODS <span className="btn-icon">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Comparativo */}
            <div className="comparison-table">
              <h3>COMPARATIVO</h3>
              <table>
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Freelancers</th>
                    <th>Skill Pods</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Número de Profissionais</td>
                    <td>1</td>
                    <td>2-4</td>
                  </tr>
                  <tr>
                    <td>Gestão</td>
                    <td>Você gerencia</td>
                    <td>Equipe auto-gerida</td>
                  </tr>
                  <tr>
                    <td>Escopo</td>
                    <td>Tarefas específicas</td>
                    <td>Projetos completos</td>
                  </tr>
                  <tr>
                    <td>Prazo de Entrega</td>
                    <td>Variável</td>
                    <td>Definido</td>
                  </tr>
                  <tr>
                    <td>Investimento</td>
                    <td>Por hora/projeto</td>
                    <td>Por projeto</td>
                  </tr>
                </tbody>
              </table>
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
            <h3>Link Rápidos</h3>
            <ul className="footer-links">
              <li><a href="index.html">Início</a></li>
              <li><a href="contratar.html">Montar Skill Pod</a></li>
              <li><a href="cadastro.html">Ser Contratado</a></li>
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
