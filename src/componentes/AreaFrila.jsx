import "./AreaFrila.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AreaFrila() {
  const [search, setSearch] = useState("");

  const users = [
    { name: "João Silva", email: "joao@email.com", status: "5.0", date: "14/01/2024", projects: 12, faturamento: "R$ 10k", especialidade: "Desenvolvedor Frontend" },
    { name: "Maria Santos", email: "maria@email.com", status: "4.7", date: "19/02/2024", projects: 8, faturamento: "R$ 17k", especialidade: "Designer UI/UX" },
    { name: "Pedro Costa", email: "pedro@email.com", status: "4.9", date: "09/03/2024", projects: 3, faturamento: "R$ 4k", especialidade: "Desenvolvedor Backend" },
    { name: "Ana Oliveira", email: "ana@email.com", status: "3.9", date: "04/01/2024", projects: 15, faturamento: "R$ 6k", especialidade: "Marketing Digital" },
    { name: "Carlos Lima", email: "carlos@email.com", status: "3.8", date: "19/12/2023", projects: 5, faturamento: "R$ 9k", especialidade: "Desenvolvedor Mobile" }
  ];

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.especialidade.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-area-container">

      {/* CARDS DE INDICADORES */}
      <div className="stats-grid">

        <div className="stat-card">
          <h4>Total de Freelancers</h4>
          <h2>5</h2>
          <span className="positive">+8% este mês</span>
        </div>

        <div className="stat-card">
          <h4>Disponíveis</h4>
          <h2>7</h2>
          <span className="positive">Prontos para Projetos</span>
        </div>

        <div className="stat-card">
          <h4>Em projetos</h4>
          <h2>14</h2>
          <span className="neutral">Trabalhando ativamente</span>
        </div>

        <div className="stat-card">
          <h4>Faturamento</h4>
          <h2>R$ 230k</h2>
          <span className="positive">+15% este mês</span>
        </div>

      </div>

      {/* TABELA */}
      <div className="user-table-wrapper">

        <div className="user-table-header">
          <h3>Lista de Freelancers</h3>

          <input 
            type="text" 
            placeholder="Buscar freelancers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Especialidade</th>
              <th>Avaliação</th>
              <th>Data Entrada</th>
              <th>Projetos</th>
              <th>Faturamento</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.especialidade}</td>

                <td>
                  <span className={`status status-${u.status.replace('.', '')}`}>
                    {u.status}
                  </span>
                </td>

                <td>{u.date}</td>
                <td>{u.projects}</td>
                <td>{u.faturamento}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}
