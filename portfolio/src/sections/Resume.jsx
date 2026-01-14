
import React, { useState } from "react";

const Resume = () => {
  const resumeUrl = "/Rohit Resume ATS.pdf"; // public folder
  const [open, setOpen] = useState(false);

  return (
    <section
      id="resume"
      style={{
        padding: "90px 0",
        textAlign: "center",
      }}
    >
  
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "600",
          color: "#7c3aed",
          marginBottom: "20px",
        }}
      >
        Resume
      </h2>

    
      <p
        style={{
          maxWidth: "720px",
          margin: "0 auto 45px",
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#d1d1e0",
        }}
      >
        View my resume in full screen or download a PDF copy for detailed
        information about my skills and experience.
      </p>

      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          marginBottom: "70px",
        }}
      >
      
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: "14px 36px",
            borderRadius: "30px",
            border: "2px solid #7c3aed",
            background: "transparent",
            color: "#ffffff",
            fontSize: "15px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            outline: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#7c3aed";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.transform = "scale(1)";
          }}
          onFocus={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 0 3px rgba(124,58,237,0.5)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          👁 View Resume
        </button>

      
        <a
          href={resumeUrl}
          download
          style={{
            padding: "14px 38px",
            borderRadius: "30px",
            background: "#7c3aed",
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: "500",
            textDecoration: "none",
            outline: "none",
            animation: "pulse 2s infinite",
          }}
          onFocus={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 0 3px rgba(124,58,237,0.6)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          ⬇ Download Resume
        </a>
      </div>

     
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "90%",
              height: "90%",
              background: "#000",
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
            }}
          >
        
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "12px",
                right: "16px",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "28px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

           
            <iframe
              src={resumeUrl}
              title="Resume Preview"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </div>
      )}

      
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(124,58,237,0.6); }
            70% { box-shadow: 0 0 0 12px rgba(124,58,237,0); }
            100% { box-shadow: 0 0 0 0 rgba(124,58,237,0); }
          }
        `}
      </style>
    </section>
  );
};

export default Resume;
