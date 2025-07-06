import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDark ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', systemTheme);
      setTheme(systemTheme);
      localStorage.setItem('theme', systemTheme);
    }
  }, []);

  useEffect(() => {
    const header = document.querySelector('.header');
    const headerLogo = document.querySelector('.header__github-img');
    const headerList = document.querySelector('.header__list');
    const headerLink = document.querySelectorAll('.header__link');
    const headerThemeToggle = document.querySelector('.header__theme-toggle');

    const heroCelestial = document.querySelector('.hero__celestial');
    const hero = document.querySelector('.hero');
    const heroTitle = document.querySelector('.hero__title');
    const heroDescription = document.querySelector('.hero__description');
    const heroScroll = document.querySelector('.hero__scroll');

    const projects = document.querySelector('.projects');
    const projectsTitle = document.querySelector('.projects__title');
    const projectsItem = document.querySelectorAll('.projects__item');
    const projectsItemTitle = document.querySelectorAll('.projects__item-title');
    const projectsDescription = document.querySelectorAll('.projects__description');

    if (!header || !headerLogo || !headerList || !headerThemeToggle || !heroTitle || !projects) return;

    if (theme === 'dark') {
      header.style.backgroundColor = '#0b1e3d';
      headerLogo.style.color = '#fff';
      headerList.style.color = '#fff';
      headerLink.forEach(link => {
        link.style.color = '#fff';
        link.addEventListener('mouseenter', () => (link.style.color = '#ff722b'));
        link.addEventListener('mouseleave', () => (link.style.color = '#fff'));
      });
      headerThemeToggle.style.color = '#fff';
      headerThemeToggle.addEventListener('mouseenter', () => (headerThemeToggle.style.color = '#ff722b'));
      headerThemeToggle.addEventListener('mouseleave', () => (headerThemeToggle.style.color = '#fff'));
      headerThemeToggle.innerHTML = '🌙';

      if (heroCelestial) {
        heroCelestial.src = 'https://cdn-icons-png.flaticon.com/512/6635/6635649.png';
        heroCelestial.style.animation = 'none';
        heroCelestial.style.transition = 'none';
      }

      hero.style.backgroundColor = '#0b1e3d';
      hero.style.animation = 'none';
      hero.style.transition = 'none';

      heroTitle.style.color = '#fff';
      heroTitle.addEventListener('mouseenter', () => (heroTitle.style.color = '#ff722b'));
      heroTitle.addEventListener('mouseleave', () => (heroTitle.style.color = '#fff'));
      heroDescription.style.color = '#ff722b';
      heroDescription.addEventListener('mouseenter', () => (heroDescription.style.color = '#fff'));
      heroDescription.addEventListener('mouseleave', () => (heroDescription.style.color = '#ff722b'));
      heroScroll.style.color = '#fff';

      projects.style.backgroundColor = '#0b1e3d';
      projects.style.animation = 'none';
      projects.style.transition = 'none';
      projectsTitle.style.color = '#fff';
      projectsTitle.addEventListener('mouseenter', () => (projectsTitle.style.color = '#ff722b'));
      projectsTitle.addEventListener('mouseleave', () => (projectsTitle.style.color = '#fff'));
      projectsItem.forEach(item => {
        item.style.backgroundColor = '#1a2b4d';
      });
      projectsItemTitle.forEach(itemTitle => {
        itemTitle.style.color = '#ffffff';
        itemTitle.addEventListener('mouseenter', () => (itemTitle.style.color = '#ff722b'));
        itemTitle.addEventListener('mouseleave', () => (itemTitle.style.color = '#fff'));
      });
      projectsDescription.forEach(description => {
        description.style.color = '#ff722b';
        description.addEventListener('mouseenter', () => (description.style.color = '#fff'));
        description.addEventListener('mouseleave', () => (description.style.color = '#ff722b'));
      });
    } else {
      header.style.backgroundColor = '';
      headerLogo.style.color = '';
      headerList.style.color = '';
      headerLink.forEach(link => {
        link.style.color = '';
      });
      headerThemeToggle.style.color = '';
      headerThemeToggle.innerHTML = '☀️';

      if (heroCelestial) {
        heroCelestial.src = 'https://cdn-icons-png.flaticon.com/512/169/169367.png';
        heroCelestial.style.animation = '';
        heroCelestial.style.transition = '';
      }
      hero.style.backgroundColor = '';
      hero.style.animation = '';
      hero.style.transition = '';

      heroTitle.style.color = '';
      heroTitle.addEventListener('mouseenter', () => {
        heroTitle.style.color = '';
      });
      heroTitle.addEventListener('mouseleave', () => {
        heroTitle.style.color = '';
      });
      heroDescription.style.color = '';
      heroDescription.addEventListener('mouseenter', () => {
        heroDescription.style.color = '';
      });
      heroDescription.addEventListener('mouseleave', () => {
        heroDescription.style.color = '';
      });
      heroScroll.style.color = '';
      heroScroll.style.animation = '';
      heroScroll.style.transition = '';
      projects.style.backgroundColor = '';
      projects.style.animation = '';
      projects.style.transition = '';
      projectsTitle.style.color = '';
      projectsTitle.addEventListener('mouseenter', () => {
        projectsTitle.style.color = '';
      });
      projectsTitle.addEventListener('mouseleave', () => {
        projectsTitle.style.color = '';
      });
      projectsItem.forEach(item => {
        item.style.backgroundColor = '';
      });
      projectsItemTitle.forEach(itemTitle => {
        itemTitle.style.color = '';
        itemTitle.addEventListener('mouseenter', () => {
          itemTitle.style.color = '';
        });
        itemTitle.addEventListener('mouseleave', () => {
          itemTitle.style.color = '';
        });
      });
      projectsDescription.forEach(description => {
        description.style.color = '';
        description.addEventListener('mouseenter', () => {
          description.style.color = '';
        });
        description.addEventListener('mouseleave', () => {
          description.style.color = '';
        });
      });
    }
  }, [theme]);

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.location.reload();
  };

  return (
    <div className="App">
      <Header changeTheme={changeTheme} />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
