import { useState } from "react";
import '../componentes/Cadastro.css'; 

export default function Cadastro() {
  const [tipoConta, setTipoConta] = useState("");

  const trocarTipo = (e) => {
    setTipoConta(e.target.value);
  };

  return (
    <div className="login-container">
      {/* Painel lateral esquerdo */}
      <div className="left-panel">
        <div className="logo-section">
          <div className="logo">SERV+</div>
        </div>

        <div className="welcome-content">
          <h1 className="welcome-title">Bem-vindo ao Serv+</h1>
          <p className="welcome-description">
            Faça seu cadastro ao lado para criar um perfil.
          </p>
        </div>

        {/* Elementos decorativos */}
        <div className="decorative-elements">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="dots-pattern"></div>
          <div className="plus-icon plus-1">+</div>
          <div className="plus-icon plus-2">+</div>
          <div className="wave-line"></div>
        </div>
      </div>

      {/* Painel direito */}
      <div className="right-panel">
        <div className="form-container">
          <h2 className="form-title">Cadastrar</h2>

          <label className="titulo_opcoes">Tipo de Conta:</label>
          <select id="tipoConta" value={tipoConta} onChange={trocarTipo}>
            <option value="">Selecione...</option>
            <option value="usuario">Usuário</option>
            <option value="freelancer">Freelancer</option>
          </select>

          <form className="login-form">
            <div className="input-group">
              <input type="text" placeholder="Nome de usuário" required />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Seu email" required />
            </div>

            <div className="input-group">
              <input type="password" placeholder="Senha" required />
            </div>

            {/* Campos apenas para usuário */}
            {tipoConta === "usuario" && (
              <div id="camposUsuario">
                <label className="titulo_opcoes">Interesses:</label>
                <input type="text" placeholder="Ex: Design, programação..." />
              </div>
            )}

            {/* Campos apenas para freelancer */}
            {tipoConta === "freelancer" && (
              <div id="camposFreelancer">
                <label className="titulo_opcoes">Área de atuação:</label>
                <input type="text" placeholder="Ex: Designer, Dev Web..." />

                <label className="titulo_opcoes">Cpf:</label>
                <input type="text" placeholder="Ex: 213.123.321/21" />

                <label className="titulo_opcoes">Contato:</label>
                <input type="number" placeholder="Ex: 11223321234" />

                <label className="titulo_opcoes">Descrição:</label>
                <input type="text" placeholder="Fale um pouco sobre você..." />
              </div>
            )}

            <a href="index.html" className="sign-in-btn">
              Entrar
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}


