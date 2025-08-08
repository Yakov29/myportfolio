import React, { useState, useEffect } from "react";
import Container from "../Container/Container";
import "./Projects.css";

import { FaArrowRight } from "react-icons/fa6";

const projectsData = [
  {
    title: "24hforecast",
    description: "A weather application that provides real-time weather updates and forecasts for the next 24 hours.",
    img: "https://cdn-icons-png.flaticon.com/512/9055/9055356.png",
    link: "https://yakov29.github.io/24hforecast/",
    date: "06.10.2025"
  },
  {
    title: "RoomCraft",
    description: "A 3D room editor that lets you design, customize, and visualize interiors with ease. Perfect for interior designers, architects, and enthusiasts.",
    img: "https://github.com/Yakov29/roomcraft/blob/main/public/logo.png?raw=true",
    link: "https://roomcraft.vercel.app/",
    date: "07.27.2025"
  },
  {
    title: "EnergyFlow",
    description: "A website with interactive exercises and tools designed for training and skill development. Ideal for coaches, athletes, and anyone looking to improve performance through structured practice.",
    img: "https://yakov29.github.io/EnergyFlow/image%202.7e3b17d0.png",
    link: "https://yakov29.github.io/EnergyFlow/",
    date: "08.20.2024"
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

  return <h3 className="projects__item-title">{displayedText}</h3>;
};

const Projects = ({ openProjectData }) => {
  return (
    <section className="projects" id="projects">
      <Container>
        <h2 className="projects__title">My Projects</h2>

        <ul className="projects__list">
          {projectsData.map(({ title, description, img, link, date }, index) => (
            <li className="projects__item" key={index}>
              <img className="projects__image" src={img} alt="" />
              <TypingTitle text={title} />
              <p className="projects__date">Released: {date}</p>
              <button
                className="projects__button"
                onClick={openProjectData}
                data-title={title}
                data-description={description}
                data-img={img}
                data-link={link}
                data-date={date}
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
