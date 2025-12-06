import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ 
      backgroundColor: "var(--f1-black)", 
      borderBottom: "3px solid var(--f1-red)",
      padding: "1rem 0"
    }}>
      <div className="container">

        <Link className="navbar-brand" to="/" style={{ 
          color: "var(--f1-white)", 
          fontFamily: "Titillium Web", 
          fontWeight: "900", 
          fontStyle: "italic",
          fontSize: "1.8rem",
          letterSpacing: "-1px"
        }}>
          <span style={{ color: "var(--f1-red)" }}>F1</span> DASHBOARD
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navMenu"
          style={{ borderColor: "var(--f1-grey-dark)" }}
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>

        <div id="navMenu" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="btn-f1" to="/sessions" style={{ border: 'none' }}>
                Corridas & Sessões
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}