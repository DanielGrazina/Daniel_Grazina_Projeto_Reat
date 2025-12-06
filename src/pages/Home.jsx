import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section style={{
        position: "relative",
        backgroundColor: "var(--f1-black)",
        padding: "100px 0",
        overflow: "hidden"
      }}>

        <div style={{
          position: "absolute",
          top: 0, right: "-10%",
          width: "50%", height: "100%",
          background: "linear-gradient(90deg, transparent, var(--f1-red))",
          opacity: 0.1,
          transform: "skewX(-20deg)"
        }}></div>

        <div className="container position-relative z-1">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h5 className="text-uppercase mb-2" style={{ color: "var(--f1-red)", letterSpacing: "2px" }}>
                Official Data 
              </h5>
              <h1 style={{ 
                fontSize: "4rem", 
                lineHeight: "0.9", 
                marginBottom: "20px",
                fontStyle: "italic" 
              }}>
                OPEN F1 <br/> DASHBOARD
              </h1>
              <p className="lead text-light mb-4" style={{ maxWidth: "500px", fontFamily: "sans-serif" }}>
                Acede a telemetria, tempos de volta e dados de posição através da API OpenF1.
              </p>
              
              <Link to="/sessions" className="btn-f1 btn-f1-primary">
                Ver Corridas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5 mb-5">
        <div className="card-f1 p-4">
          <h3><span style={{color: "var(--f1-red)"}}>//</span> Bem-vindo ao Paddock</h3>
          <p className="mb-0">Selecione "Corridas" no menu acima para começar a explorar os dados da temporada.</p>
        </div>
      </div>
    </>
  );
}