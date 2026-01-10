
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "36px 0", 
        textAlign: "center",
        background: "transparent",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "16px", 
          color: "#ffffff",
          opacity: 0.85,
        }}
      >
        © {year}{" "}
        <span
          style={{
            color: "#7c3aed",   
            fontWeight: "600",  
            fontSize: "18px",  
          }}
        >
          Rohit Soni
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
