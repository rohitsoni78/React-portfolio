import React, { useEffect, useState } from "react";

const About = () => {
 
  const nameText = "Rohit Soni";
  const [name, setName] = useState("");


  const roles = ["Frontend Developer"];

  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

 
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setName(nameText.slice(0, i + 1));
      i++;
      if (i === nameText.length) clearInterval(timer);
    }, 120);

    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setRoleText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setRoleText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="about"
      style={{
        padding: "110px 0 90px", 
      }}
    >
      <div
        className="about__content fade-up"
        style={{
          maxWidth: "820px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ marginBottom: "12px" }}>
          Hi, There!! <span className="wave">👋</span>
          <br />
          I'M{" "}
          <span className="typing">
            {name}
            <span className="cursor" />
          </span>
        </h1>

        <h1 style={{ marginBottom: "22px", fontSize: "28px" }}>
          <span className="typing-role">
            {roleText}
            <span className="cursor" />
          </span>
        </h1>

        <p style={{ lineHeight: "1.8", marginBottom: "16px" }}>
          I build responsive, high-performance web applications using modern
          JavaScript frameworks, with a strong focus on clean code,
          accessibility, and user experience.
        </p>

        <p style={{ lineHeight: "1.8" }}>
          I enjoy translating complex requirements into elegant interfaces and
          collaborating in cross-functional teams to ship reliable, scalable
          products.
        </p>
      </div>
    </section>
  );
};

export default About;
