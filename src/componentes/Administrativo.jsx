import '../componentes/Adm.css';

export default function AdminSection() {
    return (
      <>
        <h1 className="titulo">ADMINISTRATIVO</h1>
  
        <div className="container_cards">
  
          {/* Card Usuário */}
          <div className="card">
            <div className="card-header">
              <span className="icon">📄</span>
              <h2>ÁREA DO USUÁRIO</h2>
            </div>
            <a href="area_usuario.html">Ver área do Usuário ➝</a>
          </div>
  
          {/* Card Freelancers */}
          <div className="card">
            <div className="card-header">
              <span className="icon">👔</span>
              <h2>ÁREA DOS FREELANCERS</h2>
            </div>
            <a href="area_freelancer.html">Ver área dos Freelancers ➝</a>
          </div>
  
          {/* Card Pods */}
          <div className="card">
            <div className="card-header">
              <span className="icon">👥</span>
              <h2>GESTÃO DOS PODS</h2>
            </div>
            <a href="area_skillpods.html">Ver área dos Pods ➝</a>
          </div>
  
        </div>
      </>
    );
  }
  