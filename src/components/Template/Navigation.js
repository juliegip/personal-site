import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const Navigation = () => {
  const [activeButton, setActiveButton] = useState(null)

  const handleSetActive = (to) => {
    setActiveButton(to);
  };
  
  const handleScrollLinkClick = (to) => {
    setActiveButton(to);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 40

      const projectsSection = document.getElementById('projects')
      const aboutSection = document.getElementById('about')
      const resumeSection = document.getElementById('resume')
    
      if (scrollPosition < projectsSection.offsetTop - offset) {
        setActiveButton('projects')
      } else if (scrollPosition < aboutSection.offsetTop -offset) {
        setActiveButton('about')
      } else if (scrollPosition < resumeSection.offsetTop - offset) {
        setActiveButton('resume')
      }
    }
      
      window.addEventListener('scroll',handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, []);
  
return (
  <nav id="nav">
    <ul>
      <li>
      <ScrollLink to='projects' spy={true} smooth={true} duration={500} activeClass={activeButton === 'projects' ? 'active' : ''}
      onSetActive={() => handleSetActive('projects')} onClick={() => handleScrollLinkClick('projects')}>
      My Projects
      </ScrollLink>
        </li>
        <li>
      <ScrollLink to='about' spy={true} smooth={true} duration={500} activeClass={activeButton === 'about' ? 'active' : ''}
      onSetActive={() => handleSetActive('about')} onClick={() => handleScrollLinkClick('about')}>
      About me
      </ScrollLink>
        </li>
        <li>
      <ScrollLink to='resume' spy={true} smooth={true} duration={500} activeClass={activeButton === 'resume' ? 'active' : ''}
      onSetActive={() => handleSetActive('resume')} onClick={() => handleScrollLinkClick('resume')}>
      Resume
      </ScrollLink>
        </li>
    </ul>
  </nav>
)
};

export default Navigation;
