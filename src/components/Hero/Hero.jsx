import React, { useState, useEffect } from "react";
import Container from "../Container/Container";
import "./Hero.css";

import { FaArrowDown, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGithub, FaCode } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


import phrases from "../../Data/phrases";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isNight, setIsNight] = useState(false);
  const [sunAnimClass, setSunAnimClass] = useState("celestialAppearRotate");
  const [animationPlaying, setAnimationPlaying] = useState(false);

  useEffect(() => {
    if (!isDeleting && charIndex < phrases[phraseIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + phrases[phraseIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100 + Math.random() * 50);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === phrases[phraseIndex].length) {
      const timeout = setTimeout(() => setIsDeleting(true), 10000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }
  }, [charIndex, isDeleting, phraseIndex]);

  const handleSunClick = () => {
    if (animationPlaying) return;
    setAnimationPlaying(true);
    setIsNight(true);
    setSunAnimClass("sun-roll-out");
    setTimeout(() => {
      setSunAnimClass("sun-roll-in");
      setIsNight(false);
    }, 5000);
    setTimeout(() => {
      setSunAnimClass("");
      setAnimationPlaying(false);
    }, 10200);
  };

  return (
    <section className={`hero ${isNight ? "night" : ""}`}>
      <Container>
        <div
          className={`hero__celestials ${sunAnimClass}`}
          style={{ pointerEvents: animationPlaying ? "none" : "auto" }}
          onClick={handleSunClick}
        >
          <img
            className="hero__celestial"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
            alt="Sun"
            draggable={false}
            style={{ userSelect: "none" }}
          />
        </div>
        <h1 className="hero__title">
          {displayedText.split("").map((char, i) => (
            <span
              key={i}
              className="fade-in-letter"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {char}
            </span>
          ))}
          <span className="caret"></span>
        </h1>
        <p className="hero__description">
          Hi, I'm a passionate React frontend developer building dynamic and performant web applications.
        </p>

        <div className="hero__icons">
          <FaHtml5 className="hero__icon" title="HTML5" />
          <FaCss3Alt className="hero__icon" title="CSS3" />
          <FaJs className="hero__icon" title="JavaScript" />
          <FaNodeJs className="hero__icon" title="Node.js" />
          <FaReact className="hero__icon" title="React" />
          <SiVite className="hero__icon" title="Vite" />
          <FaGithub className="hero__icon" title="GitHub" />
          <VscVscode className="hero__icon" title="VSCode" />
        </div>

        <button
          onClick={() => {
            document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
          }}
          className="hero__cta"
        >
          View My Work
        </button>

        {/* <a href="#projects" className="hero__scroll">
          <FaArrowDown />
        </a> */}
      </Container>
    </section>
  );
};

export default Hero;
