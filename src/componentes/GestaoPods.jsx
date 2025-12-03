import "./GestaoPods.css";
import { useState } from "react";

export default function AreaPods() {
  const [search, setSearch] = useState("");

  const pods = [
    { nome: "Skill Pod Alpha", status: "Ativo", membros: 6, projetos: 3, data: "14/01/2024" },
    { nome: "Skill Pod Beta", status: "Ativo", membros: 4, projetos: 2, data: "01/03/2024" },
    { nome: "Skill Pod Gamma", status: "Inativo", membros: 0, projetos: 0, data: "09/12/2023" },
    { nome: "Skill Pod Delta", status: "Ocupado", membros: 5, projetos: 4, data: "20/02/2024" },
    { nome: "Skill Pod Sigma", status: "Ativo", membros: 7, projetos: 5, data: "11/01/2024" }
  ];

  const filteredPods = pods.filter(p =>
    p.nome.toLowerCase().includes(search.toLowerCase()) ||
    p.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pods-area-container">

      {/* INDICADORES SUPERIORES */}
      <div className="stats-grid">

        <div className="stat-card">
          <h4>Total de Pods</h4>
          <h2>{pods.length}</h2>
          <span className="positive">+12% este mês</span>
        </div>

        <div className="stat-card">
          <h4>Ativos</h4>
          <h2>{pods.filter(p => p.status === "Ativo").length}</h2>
          <span className="positive">Operacionais</span>
        </div>

        <div className="stat-card">
          <h4>Ocupados</h4>
          <h2>{pods.filter(p => p.status === "Ocupado").length}</h2>
          <span className="neutral">Trabalhando</span>
        </div>

        <div className="stat-card">
          <h4>Inativos</h4>
          <h2>{pods.filter(p => p.status === "Inativo").length}</h2>
          <span className="negative">Precisa revisar</span>
        </div>

      </div>

      {/* TABELA DE PODS */}
      <div className="pods-table-wrapper">

        <div className="pods-table-header">
          <h3>Lista de Skill Pods</h3>

          <input 
            type="text" 
            placeholder="Buscar pods..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="pods-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Status</th>
              <th>Membros</th>
              <th>Projetos</th>
              <th>Data de Criação</th>
            </tr>
          </thead>

          <tbody>
            {filteredPods.map((p, i) => (
              <tr key={i}>
                <td>{p.nome}</td>

                {/* STATUS COLORIDO */}
                <td>
                  <span className={`status ${p.status.toLowerCase()}`}>
                    {p.status}
                  </span>
                </td>

                <td>{p.membros}</td>
                <td>{p.projetos}</td>
                <td>{p.data}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}
