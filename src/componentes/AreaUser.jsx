import "./AreaUser.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import freelancer1 from '../Assets/freelancer1.jpg';
import freelancer2 from '../Assets/freelancer2.jpg';
import freelancer3 from '../Assets/freelancer3.jpg';
import freelancer4 from '../Assets/freelancer4.jpg';
import freelancer5 from '../Assets/freelancer5.jpg';
import freelancer6 from '../Assets/freelancer6.jpg';

export default function UserArea() {
  const [search, setSearch] = useState("");

  const users = [
    { name: "João Silva", email: "joao@email.com", status: "Ativo", date: "14/01/2024", projects: 12 },
    { name: "Maria Santos", email: "maria@email.com", status: "Ativo", date: "19/02/2024", projects: 8 },
    { name: "Pedro Costa", email: "pedro@email.com", status: "Pendente", date: "09/03/2024", projects: 3 },
    { name: "Ana Oliveira", email: "ana@email.com", status: "Ativo", date: "04/01/2024", projects: 15 },
    { name: "Carlos Lima", email: "carlos@email.com", status: "Inativo", date: "19/12/2023", projects: 5 },
  ];

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-area-container">

      {/* CARDS DE INDICADORES */}
      <div className="stats-grid">

        <div className="stat-card">
          <h4>Total de Usuários</h4>
          <h2>5</h2>
          <span className="positive">+12% este mês</span>
        </div>

        <div className="stat-card">
          <h4>Usuários Ativos</h4>
          <h2>3</h2>
          <span className="positive">+5% este mês</span>
        </div>

        <div className="stat-card">
          <h4>Pendentes</h4>
          <h2>1</h2>
          <span className="neutral">Sem mudanças</span>
        </div>

        <div className="stat-card">
          <h4>Inativos</h4>
          <h2>1</h2>
          <span className="negative">-3% este mês</span>
        </div>

      </div>

      {/* TABELA DE USUÁRIOS */}
      <div className="user-table-wrapper">

        <div className="user-table-header">
          <h3>Lista de Usuários</h3>

          <input 
            type="text" 
            placeholder="Buscar usuários..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Status</th>
              <th>Data de Entrada</th>
              <th>Projetos</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td className="email-col">{u.email}</td>

                <td>
                  <span className={`status ${u.status.toLowerCase()}`}>
                    {u.status}
                  </span>
                </td>

                <td>{u.date}</td>
                <td>{u.projects}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}
