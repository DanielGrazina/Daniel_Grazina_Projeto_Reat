import { useEffect, useState } from "react";
import { getSessions } from "../services/openf1";
import SessionCard from "../components/SessionCard";

export default function Sessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    getSessions().then(data => {
      // Só mostrar sessões com nome e ano para evitar lixo
      const filtered = data.filter(s => s.session_name && s.year);
      setSessions(filtered);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="container mt-4"><p>A carregar...</p></div>;

  // Paginação
  const indexStart = (currentPage - 1) * itemsPerPage;
  const indexEnd = indexStart + itemsPerPage;
  const currentSessions = sessions.slice(indexStart, indexEnd);

  const totalPages = Math.ceil(sessions.length / itemsPerPage);

  return (
    <div className="container mt-4">
      <h2 className="mb-4" style={{ borderBottom: "4px solid var(--f1-red)", paddingBottom: "6px" }}>
        Corridas
      </h2>

      <div className="row">
        {currentSessions.map(session => (
          <SessionCard key={session.session_key} session={session} />
        ))}
      </div>

      {/* Paginação */}
      <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        <button 
          className="btn-f1"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          ⬅ Anterior
        </button>

        <span className="fw-semibold">
          Página {currentPage} de {totalPages}
        </span>

        <button 
          className="btn-f1"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          Próxima ➡
        </button>
      </div>
    </div>
  );
}
