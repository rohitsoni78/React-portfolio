
import React from "react";

const Loader = ({ mode = "dark" }) => {
  const bgColor = mode === "light" ? "#ffffff" : "#000000";
  const textColor = mode === "light" ? "#000000" : "#ffffff";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: bgColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
   
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: `2px solid ${textColor}`,
          borderTopColor: "transparent",
          animation: "spin 1s linear infinite",
          marginBottom: "18px",
        }}
      />

      <span
        style={{
          fontSize: "14px",
          letterSpacing: "1px",
          color: textColor,
          opacity: 0.8,
          animation: "fade 1.4s ease-in-out infinite",
        }}
      >
        Loading portfolio...
      </span>

      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          @keyframes fade {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
