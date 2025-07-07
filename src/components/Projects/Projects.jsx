import React, { useState, useEffect } from "react";
import Container from "../Container/Container";
import "./Projects.css";

import { FaArrowRight } from "react-icons/fa6";

const projectsData = [
  {
    title: "24hforecast",
    description: "A weather application that provides real-time weather updates and forecasts for the next 24 hours.",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2, highlighting its features and technologies used.",
    img: "https://via.placeholder.com/150"
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
      }, 100); // скорость печатания - 100мс на символ
      return () => clearTimeout(timeout);
    }
  }, [charIndex, text]);

  return <h3 className="projects__item-title" >{displayedText}</h3>;
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Container>
        <h2 className="projects__title">My Projects</h2>

        <ul className="projects__list">
          {projectsData.map(({ title, description, img }, index) => (
            <li className="projects__item" key={index}>
              {/* <img src={img} alt={title} /> */}
              <TypingTitle text={title} />
              {/* <p className="projects__description">{description}</p> */}
              <button className="projects__button">
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
