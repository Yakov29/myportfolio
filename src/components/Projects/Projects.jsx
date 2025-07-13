import React, { useState, useEffect } from "react";
import Container from "../Container/Container";
import "./Projects.css";

import { FaArrowRight } from "react-icons/fa6";

const projectsData = [
  {
    title: "24hforecast",
    description: "A weather application that provides real-time weather updates and forecasts for the next 24 hours.",
    img: "https://raw.githubusercontent.com/Yakov29/24hforecast/bc2bb61abd389bf565d8549803530031a52e8f88/public/logo.svg",
    used: ["react"]
  },
  {
    title: "My Portfolio",
    description: "A personal portfolio website showcasing my projects, skills, and experience.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
  }
];

const TypingTitle = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); 
      return () => clearTimeout(timeout);
    }
  }, [charIndex, text]);

  return <h3 className="projects__item-title" >{displayedText}</h3>;
};

const Projects = ({ openProjectData }) => {
  return (
    <section className="projects" id="projects">
      <Container>
        <h2 className="projects__title">My Projects</h2>

        <ul className="projects__list">
          {projectsData.map(({ title, description, img }, index) => (
            <li className="projects__item" key={index}>
              <TypingTitle text={title} />
              <button
                className="projects__button"
                onClick={openProjectData}
                data-title={title}
                data-description={description}
                data-img={img}
              >
                View Project <FaArrowRight />
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Projects;
