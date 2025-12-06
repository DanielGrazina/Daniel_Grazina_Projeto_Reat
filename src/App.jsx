// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Sessions from "./pages/Sessions.jsx";
import SessionDetail from "./pages/SessionDetail.jsx";
import "./f1-theme.css"; // Garante que importas aqui ou no main.jsx

function App() {
  return (
    <BrowserRouter>
      <div className="app-content" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        <div style={{ flex: 1 }}> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/sessions/:id" element={<SessionDetail />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App