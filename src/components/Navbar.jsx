import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand">
            <div className="container">
                <Link className="navbar-brand" to="/">OpenF1</Link>

                <div className="navbar-nav">
                    <Link className="nav-link" to="/sessions">Corridas</Link>
                </div>
            </div>
        </nav>
    );
}