import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setNavOpen(false); // Close menu on navigation
  };

  return (
    <nav className="navbar">
      <div className="navbar-row">
        <div
          className="nav-title"
          onClick={() => scrollToSection("hero")}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => e.key === "Enter" && scrollToSection("hero")}
          aria-label="Go to home section"
        >
          AGRI.AI
        </div>
        <button
          className="nav-hamburger"
          aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          {navOpen ? "✕" : "☰"}
        </button>
      </div>
      <div className={`nav-links${navOpen ? " open" : ""}`}>
        <button onClick={() => scrollToSection("hero")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("features")}>Features</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
        <button
          onClick={() => {
            navigate("/login");
            setNavOpen(false);
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
