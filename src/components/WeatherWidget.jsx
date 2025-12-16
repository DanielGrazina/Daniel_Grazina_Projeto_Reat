export default function WeatherWidget({ weather }) {
  if (!weather) return null;

  return (
    <div className="d-flex gap-4 p-3 mt-3 align-items-center" style={{ 
      backgroundColor: "rgba(0, 0, 0, 0.4)", 
      borderLeft: "4px solid var(--f1-white)",
      borderRadius: "0 8px 8px 0"
    }}>
      <div className="text-uppercase" style={{ fontSize: "0.85rem", letterSpacing: "1px", color: "var(--f1-grey-light)" }}>
        Track Conditions
      </div>
      
      {/* Temperatura do Ar */}
      <div>
        <span className="fw-bold fs-5 text-white">{weather.air_temperature}°C</span>
        <small className="d-block text-muted" style={{ fontSize: "0.7rem" }}>AIR</small>
      </div>

      {/* Temperatura da Pista */}
      <div>
        <span className="fw-bold fs-5 text-white">{weather.track_temperature}°C</span>
        <small className="d-block text-muted" style={{ fontSize: "0.7rem" }}>TRACK</small>
      </div>

      {/* Humidade */}
      <div>
        <span className="fw-bold fs-5 text-white">{weather.humidity}%</span>
        <small className="d-block text-muted" style={{ fontSize: "0.7rem" }}>HUMIDITY</small>
      </div>
    </div>
  );
}