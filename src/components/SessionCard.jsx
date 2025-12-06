import { Link } from "react-router-dom";

export default function SessionCard({ session }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card-f1 h-100 d-flex flex-column justify-content-between">
        
        <div>
          <div className="d-flex justify-content-between align-items-start mb-2">
            <span className="badge" style={{ backgroundColor: "var(--f1-red)", fontStyle: "italic" }}>
              {session.year}
            </span>
            <small style={{ color: "var(--f1-grey-light)", textTransform: "uppercase" }}>
              RACE WEEKEND
            </small>
          </div>

          <h4 className="fw-bold mb-3" style={{ border: 'none' }}>
            {session.location}
          </h4>
          
          <p className="mb-4" style={{ color: "#ccc", borderLeft: "2px solid var(--f1-grey-dark)", paddingLeft: "10px" }}>
            <strong style={{ color: "white" }}>{session.session_name}</strong>
          </p>
        </div>

        <Link 
          to={`/sessions/${session.session_key}`} 
          className="btn-f1 text-center w-100"
        >
          Ver Telemetria
        </Link>
      </div>
    </div>
  );
}