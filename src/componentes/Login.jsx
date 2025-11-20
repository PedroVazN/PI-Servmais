import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-page-wrapper">
            {/* Botão Voltar */}
            <button className="back-button" onClick={() => navigate('/')}>
                <span className="back-arrow">←</span>
                Voltar
            </button>

            <div className="login-container">
                {/* Painel lateral esquerdo */}
                <div className="left-panel">
                <div className="logo-section">
                    <div className="logo">SERV+</div>
                </div>

                <div className="welcome-content">
                    <h1 className="welcome-title">Bem-vindo de volta!</h1>
                    <p className="welcome-description">
                        Você pode fazer login para acessar sua conta existente.
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

            {/* Painel direito com formulário */}
            <div className="right-panel">
                <div className="form-container">
                    <h2 className="form-title">Entrar</h2>

                    <form className="login-form">
                        <div className="input-group">
                            <input type="email" placeholder="Nome de usuário ou email" required />
                        </div>

                        <div className="input-group">
                            <input type="password" placeholder="Senha" required />
                        </div>

                        <div className="form-options">
                            <label className="remember-me">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Lembrar de mim
                            </label>
                            <a href="#" className="forgot-password">Esqueceu a senha?</a>
                        </div>

                        <button type="submit" className="sign-in-btn">Entrar</button>
                    </form>

                    <div className="signup-link">
                        <span>Novo usuário? </span>
                        <Link to="/cadastro" className="create-account">
                            Criar uma conta
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
