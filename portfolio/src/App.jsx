
import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";
import StarBackground from "./components/StarBackground.jsx"; // ⭐ NEW


const About = lazy(() => import("./sections/About.jsx"));
const Projects = lazy(() => import("./sections/Projects.jsx"));
const Skills = lazy(() => import("./sections/Skills.jsx"));
const Resume = lazy(() => import("./sections/Resume.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));

const App = () => {
  return (
    <div className="app">
    
      <StarBackground mode="dark" />

      <Navbar />

      <main>
        <Suspense fallback={<Loader />}>
          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="resume">
            <Resume />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;
