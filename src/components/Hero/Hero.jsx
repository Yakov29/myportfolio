import React, { useState, useEffect } from "react";
import Container from "../Container/Container";
import "./Hero.css";

import { FaArrowDown } from "react-icons/fa";



const phrases = [
  "Welcome to My Portfolio ❤️",
  "Frontend Developer with React ⚛️",
  "Proud Developer from Ukraine 🇺🇦",
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
  "React is my second language 🧬",
  "Writing reusable components 🔄",
  "Embracing modern JavaScript ES6+ ✨",
  "Unit testing is a must ✅",
  "Responsive design enthusiast 📐",
  "Component-driven development 🧩",
  "Debugging is my superpower 🕵️‍♂️",
  "UX/UI balance is key ⚖️",
  "Styled-components fan 🎀",
  "Optimizing for SEO 🚀",
  "Git workflows mastered 🌳",
  "Continuous integration believer 🔄",
  "Code reviews make me better 👀",
  "Documentation is part of the process 📚",
  "Async/await makes life easier ⏳",
  "RESTful APIs lover 🌐",
  "Problem solver at heart 🧩",
  "Accessibility matters ♿",
  "Clean commits, clean history 🧹",
  "Functional programming enthusiast 🧮",
  "Hooks over classes every time 🪝",
  "Error boundaries saved my day 🚑",
  "Deploying apps with Netlify & Vercel 📦",
  "CI/CD pipelines simplified 🔧",
  "Redux toolkit user 🛠️",
  "Formik and Yup for forms 💡",
  "React Router navigation expert 🧭",
  "Mobile first, desktop friendly 📱💻",
  "Always optimizing bundle size 📦",
  "PWA advocate 🌐",
  "Custom hooks creator 🎣",
  "TypeScript makes code safer 🔐",
  "Context API user for state sharing 🔄",
  "Next.js for server-side rendering ⚡",
  "Static site generation fan 🌐",
  "Code splitting and lazy loading 🚀",
  "Responsive typography is art 🎨",
  "Cross-browser compatibility tested ✔️",
  "Linting and formatting automated 🧹",
  "Pair programming believer 👥",
  "Clean folder structure is a must 📁",
  "Self-taught with passion 🔥",
  "Always open to feedback 💬",
  "Debugging Redux like a pro 🛠️",
  "React Native for mobile apps 📱",
  "API integration made simple 🔌",
  "CSS Grid and Flexbox master 🕸️",
  "Animations for better UX ✨",
  "Performance profiling daily 📊",
  "Modern tooling with ESLint & Prettier 🧹",
  "Keeping dependencies updated 📦",
  "Effective state management strategies 🧠",
  "Clean architecture advocate 🏗️",
  "UI/UX collaboration rocks 🤝",
  "Writing meaningful commit messages 📝",
  "Async data fetching with SWR/react-query ⚡",
  "Always curious about new tech 🧠",
  "Building scalable component libraries 📚",
  "Figma to code, seamless transition 🎨➡️💻",
  "Minimalism in design and code ✂️",
  "Security-first mindset 🔒",
  "GraphQL subscriptions for real-time apps 📡",
  "Internationalization (i18n) supporter 🌍",
  "Building with user empathy ❤️",
  "Optimized images and assets 🖼️",
  "Code splitting for faster loads ⏩",
  "Knowledge sharing is caring 🤗",
  "Working with REST and GraphQL APIs 🌐",
  "Building dark mode themes 🌙",
  "Writing scalable CSS with BEM 📐",
  "Developing custom React hooks 🪝",
  "Mastering JavaScript closures 🔒",
  "Functional components over classes 🧩",
  "React.memo for performance boosts ⚡",
  "Debugging network requests like a boss 🌐",
  "Clean, maintainable, testable code 💻",
  "Building accessible components ♿",
  "Automating workflows with GitHub Actions 🤖",
  "Creating seamless user experiences 🌟",
  "Always pushing for better code quality 💪",
  "Using Storybook for UI development 📖",
  "Code readability is king 👑",
  "Prefers function composition over inheritance 🔄"
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
            className="hero__celestial"
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
        <button onClick={() => {
          document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        }} className="hero__cta">View My Work</button>
        <a href="#projects" className="hero__scroll">
          <FaArrowDown />
        </a>
      </Container>
    </section>
  );
};

export default Hero;
