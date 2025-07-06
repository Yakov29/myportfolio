import React, { useState, useEffect } from "react";
import Container from "../Container/Container";
import "./Hero.css";

const phrases = [
  "Welcome to My Portfolio ❤️",
  "Frontend Developer with React ⚛️",
  "Building interactive UIs daily 🚀",
  "JavaScript, React & More 💻",
  "Clean code is my priority 🧹",
  "Creating scalable web apps 🌐",
  "Passionate about React hooks & state ⌨️",
  "Always learning, always improving 📚",
  "Performance matters ⚡",
  "Pixel-perfect designs 🎯",
  "User-focused development 👨‍💻",
  "I debug before I panic 🪲",
  "Crafting beautiful interfaces 🎨",
  "CSS is my paintbrush 🎨🖌️",
  "State management pro 🧠",
  "From Figma to Function ✨",
  "Mobile-friendly first 📱",
  "Deploying with confidence 🚢",
  "Type-safe and proud ✅",
  "React is my second language 🧬"
];

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
            src="https://cdn-icons-png.flaticon.com/512/169/169367.png"
            alt="Sun"
            draggable={false}
            style={{ userSelect: "none" }}
          />
        </div>
        <h1 className="hero__title">
          {displayedText}
          <span className="caret"></span>
        </h1>
        <p className="hero__description">
          Hi, I'm a passionate React frontend developer building dynamic and performant web applications.
        </p>
        <button className="hero__cta">View My Work</button>
      </Container>
    </section>
  );
};

export default Hero;
