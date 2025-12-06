export default function DriverCard({ driver }) {
  return (
    <div className="mb-3" style={{ 
      backgroundColor: "var(--f1-carbon)",
      borderRight: "4px solid var(--f1-red)",
      borderRadius: "0 10px 10px 0",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
    }}>
      
      {/* Lado Esquerdo: Foto e Número */}
      <div className="d-flex align-items-center">
        <div style={{ 
          width: "60px", 
          height: "60px", 
          overflow: "hidden", 
          borderRadius: "50%",
          border: "2px solid var(--f1-grey-dark)",
          marginRight: "15px",
          backgroundColor: "#fff"
        }}>
          {driver.headshot_url ? (
            <img 
              src={driver.headshot_url} 
              alt={driver.full_name}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            />
          ) : (
             <div className="w-100 h-100 d-flex align-items-center justify-content-center text-dark fw-bold">
               {driver.driver_number}
             </div>
          )}
        </div>

        <div>
          <h5 className="mb-0 fw-bold text-uppercase" style={{ fontStyle: "italic" }}>
            {driver.full_name}
          </h5>
          <small style={{ color: "var(--f1-grey-light)", letterSpacing: "1px" }}>
            #{driver.driver_number}
          </small>
        </div>
      </div>

      {/* Lado Direito: Equipa */}
      <div className="text-end d-none d-sm-block">
        <span style={{ 
          fontSize: "0.8rem", 
          fontWeight: "bold", 
          color: "var(--f1-red)",
          textTransform: "uppercase"
        }}>
          {driver.team_name}
        </span>
      </div>
    </div>
  );
}