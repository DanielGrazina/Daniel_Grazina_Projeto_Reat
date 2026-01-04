import { useEffect, useState, useMemo } from "react";
import { getSessions } from "../services/openf1";
import SessionCard from "../components/SessionCard";
import FilterBar from "../components/FilterBar";

export default function Sessions() {
  // Dados
  const [allSessions, setAllSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filtros e Paginação
  const [filters, setFilters] = useState({ year: 'all', location: 'all' });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // --- CARREGAMENTO INICIAL ---
  useEffect(() => {
    getSessions().then(data => {
      // Limpeza básica e ordenação
      const validData = data
        .filter(s => s.session_name && s.year)
        .sort((a, b) => new Date(b.date_start) - new Date(a.date_start));
      
      setAllSessions(validData);
      setLoading(false);
    });
  }, []);

  // --- LÓGICA DE FILTRAGEM (Pesquisa + Ano + Local) ---
  const filteredSessions = useMemo(() => {
    let result = allSessions;

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(s => 
        s.session_name.toLowerCase().includes(lowerTerm) || 
        s.location.toLowerCase().includes(lowerTerm)
      );
    }
    
    if (filters.year !== 'all') {
      result = result.filter(s => s.year.toString() === filters.year);
    }

    if (filters.location !== 'all') {
      result = result.filter(s => s.location === filters.location);
    }

    return result;
  }, [allSessions, filters, searchTerm]);

  // --- CALCULOS PARA DROPDOWNS ---
  const availableYears = useMemo(() => {
    return [...new Set(allSessions.map(s => s.year))].sort().reverse();
  }, [allSessions]);

  const availableLocations = useMemo(() => {
    return [...new Set(allSessions.map(s => s.location))].sort();
  }, [allSessions]);


  // --- HANDLERS ---
  const handleFilterChange = (type, value) => {
    setFilters(prev => ({ ...prev, [type]: value }));
    setCurrentPage(1);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // --- LÓGICA DE PAGINAÇÃO ---
  const indexStart = (currentPage - 1) * itemsPerPage;
  const indexEnd = indexStart + itemsPerPage;
  const currentSessions = filteredSessions.slice(indexStart, indexEnd);
  const totalPages = Math.ceil(filteredSessions.length / itemsPerPage);

  // --- RENDER ---
  if (loading) return (
    <div className="container mt-5 text-center">
        <div className="spinner-border text-danger" role="status"></div>
        <p className="mt-2 fst-italic">A carregar Telemetria...</p>
    </div>
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-2 border-bottom border-danger pb-2">
        <h2 className="text-uppercase fst-italic fw-bold">Corridas</h2>
        <span className="badge bg-danger">{filteredSessions.length} SESSÕES</span>
      </div>

      <FilterBar 
        years={availableYears} 
        locations={availableLocations} 
        onFilterChange={handleFilterChange} 
        onSearchChange={handleSearchChange} 
      />

      <div className="row">
        {filteredSessions.length > 0 ? (
          currentSessions.map(session => (
            <SessionCard key={session.session_key} session={session} />
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h4 className="text-muted">Nenhuma sessão encontrada.</h4>
            <p>Tenta alterar os filtros acima ou limpar a seleção.</p>
            <button 
                className="btn-f1 mt-2" 
                onClick={() => {
                    setFilters({ year: 'all', location: 'all' });
                    setSearchTerm("");
                    window.location.reload();
                }}
            >
                Limpar Filtros
            </button>
          </div>
        )}
      </div>

      {filteredSessions.length > 0 && totalPages > 1 && (
        <div className="d-flex justify-content-center align-items-center gap-3 mt-5 mb-5">
          <button 
            className="btn-f1"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            &laquo; Anterior
          </button>

          <span className="fw-bold bg-dark px-3 py-2 rounded text-white" style={{ border: "1px solid var(--f1-grey-dark)" }}>
            Page {currentPage} / {totalPages}
          </span>

          <button 
            className="btn-f1"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            Próxima &raquo;
          </button>
        </div>
      )}
    </div>
  );
}