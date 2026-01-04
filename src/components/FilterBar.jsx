import React from 'react';

export default function FilterBar({ years, locations, onFilterChange, onSearchChange }) {
  return (
    <div className="mb-4 p-3" style={{ 
      backgroundColor: "var(--f1-grey-dark)", 
      borderTop: "3px solid var(--f1-red)",
      borderRadius: "0 0 10px 10px"
    }}>
      {/* Título */}
      <div className="mb-2">
        <h5 className="text-uppercase fst-italic m-0" style={{ color: "var(--f1-grey-light)", fontSize: "0.9rem" }}>
          <span style={{ color: "var(--f1-red)" }}>//</span> Session Control & Search
        </h5>
      </div>

      <div className="row g-3 align-items-end">
        
        {/* NOVO: BARRA DE PESQUISA */}
        <div className="col-12 col-md-4">
           <label className="form-label text-white fw-bold text-uppercase small">Procurar GP</label>
           <div className="input-group">
             <span className="input-group-text bg-dark border-secondary text-danger">
               🔍
             </span>
             <input 
               type="text" 
               className="form-control bg-dark text-white border-secondary"
               placeholder="Ex: Monaco, Spa..."
               onChange={(e) => onSearchChange(e.target.value)}
               style={{ borderRadius: "0 5px 5px 0" }}
             />
           </div>
        </div>

        {/* Filtro de ANO */}
        <div className="col-6 col-md-3">
          <label className="form-label text-white fw-bold text-uppercase small">Temporada</label>
          <select 
            className="form-select bg-dark text-white border-secondary"
            onChange={(e) => onFilterChange('year', e.target.value)}
          >
            <option value="all">Todas</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Filtro de LOCALIZAÇÃO */}
        <div className="col-6 col-md-5">
          <label className="form-label text-white fw-bold text-uppercase small">Circuito</label>
          <select 
            className="form-select bg-dark text-white border-secondary"
            onChange={(e) => onFilterChange('location', e.target.value)}
          >
            <option value="all">Todos</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
}