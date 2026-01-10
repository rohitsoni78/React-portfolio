
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "about", label: "About", icon: "👤" },
    { id: "projects", label: "Projects", icon: "💼" },
    { id: "skills", label: "Skills", icon: "⚙️" },
    { id: "resume", label: "Resume", icon: "📄" },
    { id: "contact", label: "Contact", icon: "✉️" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          padding: "22px 70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "transparent",
        }}
      >
       
        <a
          href="#about"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            cursor: "pointer",
            textDecoration: "none",
          }}
          onClick={() => setMenuOpen(false)}
        >
          
          <span
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "2px solid #7c3aed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              color: "#fff",
              fontSize: "20px",
              animation: "pulseLogo 2.5s infinite",
            }}
          >
            R
          </span>

      
          <span
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#ffffff",
              letterSpacing: "1px",
              animation: "slideIn 1s ease",
            }}
          >
            RamBhakt
          </span>
        </a>

       
        <nav className="nav-desktop" style={{ display: "flex", gap: "34px" }}>
          {links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                position: "relative",
                fontSize: "15px",
                fontWeight: "500",
                color: active === item.id ? "#7c3aed" : "#e5e5e5",
                textDecoration: "none",
                transition: "color 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              {item.label}

              {active === item.id && (
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-8px",
                    width: "100%",
                    height: "2px",
                    background: "#7c3aed",
                    animation: "underline 0.3s ease",
                  }}
                />
              )}
            </a>
          ))}
        </nav>

       
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: "28px",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: "90px",
            right: "18px",
            width: "220px",
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "14px",
            padding: "16px",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                textDecoration: "none",
                color: active === item.id ? "#7c3aed" : "#ffffff",
                fontSize: "15px",
                padding: "10px 12px",
                borderRadius: "10px",
                background:
                  active === item.id
                    ? "rgba(124,58,237,0.15)"
                    : "transparent",
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      )}

      
      <style>
        {`
          @keyframes pulseLogo {
            0% { box-shadow: 0 0 0 0 rgba(124,58,237,0.6); }
            70% { box-shadow: 0 0 0 14px rgba(124,58,237,0); }
            100% { box-shadow: 0 0 0 0 rgba(124,58,237,0); }
          }

          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-12px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes underline {
            from { width: 0; }
            to { width: 100%; }
          }

         
          @media (max-width: 900px) {
            header {
              padding: 18px 20px !important;
            }
            .nav-desktop {
              display: none !important;
            }
            .hamburger {
              display: block !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
