import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSessionByKey, getDriversBySession, getWeatherBySession, getLapsByDriver } from "../services/openf1";
import DriverCard from "../components/DriverCard";
import WeatherWidget from "../components/WeatherWidget";
import TelemetryModal from "../components/TelemetryModal";

export default function SessionDetail() {
  const { id } = useParams();
  const [session, setSession] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [driverLaps, setDriverLaps] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const sessionData = await getSessionByKey(id);
        const driverData = await getDriversBySession(id);
        const weatherData = await getWeatherBySession(id);

        setSession(sessionData[0]);
        setDrivers(driverData);
        setWeather(weatherData);
      } catch (error) {
        console.error("Erro ao carregar dados", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  // Loader
  if (loading) return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
      <div className="spinner-border text-danger mb-3" style={{ width: "3rem", height: "3rem" }} role="status"></div>
      <h4 className="fst-italic text-uppercase" style={{ letterSpacing: "2px" }}>A carregar Telemetria...</h4>
    </div>
  );

  if (!session) return (
    <div className="container mt-5 text-center">
      <h3 className="text-danger">Sessão não encontrada.</h3>
      <Link to="/sessions" className="btn-f1 mt-3">Voltar</Link>
    </div>
  );

  // Função chamada ao clicar num piloto
  async function handleDriverClick(driver) {
    setSelectedDriver(driver); 
    setDriverLaps([]);
    
    const laps = await getLapsByDriver(session.session_key, driver.driver_number);
    setDriverLaps(laps);
  }

  return (
    <div className="container mt-5 fade-in">
      
      {/* HEADER DA SESSÃO */}
      <div className="mb-5 position-relative" style={{ 
        borderLeft: "8px solid var(--f1-red)",
        background: "linear-gradient(90deg, var(--f1-grey-dark) 0%, rgba(21, 21, 30, 0) 100%)",
        padding: "30px",
        borderRadius: "0 10px 10px 0"
      }}>
        <div className="d-flex justify-content-between align-items-end flex-wrap">
          <div>
            <h5 className="text-uppercase mb-1" style={{ color: "var(--f1-red)", letterSpacing: "2px", fontWeight: "bold" }}>
              {session.year} • {session.location}
            </h5>
            <h1 className="display-4 fw-bold text-uppercase fst-italic mb-0" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
              {session.session_name}
            </h1>
            <WeatherWidget weather={weather} />
            <h6>Ordem dos pilotos de acordo com os seus numeros (não os resultados da sessão)</h6>
          </div>
          
          <div className="text-end mt-3 mt-md-0">
             <span className="badge bg-dark border border-secondary p-2">OFFICIAL SESSION</span>
          </div>
        </div>
      </div>

      {/* LISTA DE PILOTOS */}
      <div className="row align-items-center mb-4">
        <div className="col">
          <h3 className="fst-italic text-uppercase">
            <span style={{ color: "var(--f1-red)", marginRight: "10px" }}>//</span> 
            Pilotos em Pista
          </h3>
        </div>
        <div className="col-auto">
          <span className="badge bg-secondary">{drivers.length} Pilotos</span>
        </div>
      </div>

      {drivers.length === 0 && (
        <div className="alert alert-dark border-danger text-center">
          Nenhum dado de piloto disponível para esta sessão na OpenF1.
        </div>
      )}

      {/* Grid Layout: 1 coluna em mobile, 2 em tablets/desktop */}
      <div className="row g-4">
        {drivers.map(driver => (
          <div 
            className="col-12 col-md-6 col-xl-4 driver-clickable"
            key={driver.driver_number}
            onClick={() => handleDriverClick(driver)}
            style={{ cursor: "pointer", transition: "transform 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <DriverCard driver={driver} />
          </div>
        ))}
      </div>

      <div className="mt-5 mb-5 text-center">
        <Link to="/sessions" className="btn-f1 text-decoration-none">
          &laquo; Voltar à Lista
        </Link>
      </div>

      {selectedDriver && (
        <TelemetryModal 
          driver={selectedDriver} 
          laps={driverLaps} 
          onClose={() => setSelectedDriver(null)} 
        />
      )}
    </div>
  );
}