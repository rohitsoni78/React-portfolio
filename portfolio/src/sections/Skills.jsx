
import React from "react";

const Skills = () => {
  const skills = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  ];

  return (
    <section
      id="skills"
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
          marginBottom: "50px",
        }}
      >
        Skills
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            tabIndex={0} 
            style={{
              width: "25%",
              minWidth: "120px",
              padding: "30px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "14px",
              outline: "none",
              cursor: "default",
              transition: "transform 0.25s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              style={{
                width: "86px",
                height: "86px",
                transition: "transform 0.25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />

            <span
              style={{
                fontSize: "14px",
                color: "#e5e5e5",
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
