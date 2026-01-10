
import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import project1 from "../assets/projects1.jpg";
import project2 from "../assets/project2.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Jewellery E-Commerce",
      description:
        "A responsive web application showcasing modern UI patterns .",

      image: project1,
      repoLink: " https://rohitsoni78.github.io/Jewellry-shop-management/",
   
    },
    {
      title: "IRCTC Clone",
      description:
        "A real-time dashboard with interactive charts and authentication.",
     
      image: project2,
      repoLink: "https://rohitsoni78.github.io/IRCTC/",
    
    },
  ];

  return (
    <section
      id="projects"
      style={{
        background: "transparent",
        padding: "80px 0",
      }}
    >
      <div style={{ background: "transparent" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#7c3aed",
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "50px",
          }}
        >
          Projects
        </h2>

 
        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.15}
            />
          ))}
        </div>

     
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href="https://github.com/rohitsoni78"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "14px 38px",
              borderRadius: "30px",
              background: "#7c3aed",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "500",
              textDecoration: "none",
              animation: "pulse 2s infinite",
            }}
          >
            View More Projects
          </a>
        </div>
      </div>

   
      <style>
        {`
          /* GRID */
          .projects__grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
            padding: 0 60px;
          }

          /* MOBILE */
          @media (max-width: 768px) {
            .projects__grid {
              grid-template-columns: 1fr;
              gap: 26px;
              padding: 0 18px;
            }
          }

          @media (max-width: 420px) {
            .projects__grid {
              gap: 22px;
              padding: 0 14px;
            }
          }

          /* IMAGE FIX (NO STRETCH / CLEAN RATIO) */
          .project-card img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 10px;
          }

          /* LIVE & SOURCE BUTTON ALIGN */
          .project-card__actions {
            display: flex;
            justify-content: space-between;
            gap: 14px;
            margin-top: 18px;
          }

          .project-card__actions a {
            flex: 1;
            text-align: center;
            padding: 10px 0;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 500;
            text-decoration: none;
            color: #ffffff;
            background: rgba(255,255,255,0.12);
            transition: background 0.3s ease;
          }

          .project-card__actions a:hover {
            background: rgba(255,255,255,0.22);
          }

          /* PULSE */
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(124,58,237,0.6); }
            70% { box-shadow: 0 0 0 14px rgba(124,58,237,0); }
            100% { box-shadow: 0 0 0 0 rgba(124,58,237,0); }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
