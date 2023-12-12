import React from 'react';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="header">
      <nav className="links">
        <ul>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('about')}>About Me</button>
          <button onClick={() => scrollToSection('resume')}>Resume</button>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
