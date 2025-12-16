import React from 'react';

export default function FilterBar({ years, locations, onFilterChange }) {
  return (
    <div className="mb-4 p-3" style={{ 
      backgroundColor: "var(--f1-grey-dark)", 
      borderTop: "3px solid var(--f1-red)",
      borderRadius: "0 0 10px 10px"
    }}>
      <div className="row g-3 align-items-end">
        <div className="col-12 mb-2">
          <h5 className="text-uppercase fst-italic m-0" style={{ color: "var(--f1-grey-light)", fontSize: "0.9rem" }}>
            <span style={{ color: "var(--f1-red)" }}>//</span> Telemetry Filters
          </h5>
        </div>

        {/* Filtro de ANO */}
        <div className="col-md-4">
          <label className="form-label text-white fw-bold text-uppercase small">Temporada</label>
          <select 
            className="form-select bg-dark text-white border-secondary"
            onChange={(e) => onFilterChange('year', e.target.value)}
          >
            <option value="all">Todas as Temporadas</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Filtro de LOCALIZAÇÃO */}
        <div className="col-md-5">
          <label className="form-label text-white fw-bold text-uppercase small">Grande Prémio / Local</label>
          <select 
            className="form-select bg-dark text-white border-secondary"
            onChange={(e) => onFilterChange('location', e.target.value)}
          >
            <option value="all">Todos os Circuitos</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}