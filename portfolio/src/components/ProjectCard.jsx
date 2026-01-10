import React from "react";

const ProjectCard = ({
  title,
  description,
  techStack,
  image,
  repoLink,
  delay,
}) => {
  return (
    <div
      style={{
        animationDelay: `${delay}s`,
        background: "rgba(255, 255, 255, 0.06)", // simple transparent
        border: "1px solid rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderRadius: "18px",
        overflow: "hidden",
      }}
    >
      {/* IMAGE */}
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* CONTENT */}
      <div style={{ padding: "20px" }}>
        <h3
          style={{
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "8px",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "#d1d1e0",
            fontSize: "14px",
            lineHeight: "1.6",
            marginBottom: "12px",
          }}
        >
          {description}
        </p>

        <p
          style={{
            color: "#a88bff",
            fontSize: "13px",
            marginBottom: "18px",
          }}
        >
          {techStack}
        </p>

        {/* BUTTONS */}
        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1,
              padding: "10px",
              textAlign: "center",
              borderRadius: "25px",
              background: "#7c3aed",
              color: "#ffffff",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
