import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled.div`
  position: fixed;
  right: 3rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    .nav-label {
      opacity: 1;
      transform: translateX(0);
    }

    .nav-dot {
      transform: scale(1.3);
      background: ${props => props.theme.text};
    }
  }
`;

const NavLabel = styled.span`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  opacity: ${props => props.active ? 1 : 0};
  transform: translateX(${props => props.active ? 0 : '10px'});
  transition: all 0.3s ease;
  white-space: nowrap;
`;

const NavDot = styled.div`
  width: ${props => props.active ? '12px' : '8px'};
  height: ${props => props.active ? '12px' : '8px'};
  border-radius: 50%;
  background: ${props => props.active ? props.theme.text : props.theme.border};
  border: 1px solid ${props => props.active ? props.theme.text : props.theme.divider};
  transition: all 0.3s ease;
  position: relative;

  ${props => props.active && `
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid ${props.theme.text};
      opacity: 0.3;
    }
  `}
`;

const ProgressLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 1px;
  height: 100%;
  background: ${props => props.theme.border};
  z-index: -1;
`;

const sections = [
  { id: 'skills', label: '01 Skills' },
  { id: 'experience', label: '02 Experience' },
  { id: 'patents', label: '03 Patents' },
  { id: 'publications', label: '04 Publications' },
  { id: 'education', label: '05 Education' },
  { id: 'awards', label: '06 Awards' },
  { id: 'certifications', label: '07 Certifications' },
  { id: 'recommendations', label: '08 Recommendations' },
];

const SectionNav = ({ theme }) => {
  const [activeSection, setActiveSection] = useState('skills');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <NavContainer theme={theme}>
      <ProgressLine theme={theme} />
      {sections.map((section) => (
        <NavItem
          key={section.id}
          theme={theme}
          onClick={() => scrollToSection(section.id)}
          whileHover={{ x: -5 }}
        >
          <NavLabel
            className="nav-label"
            theme={theme}
            active={activeSection === section.id}
          >
            {section.label}
          </NavLabel>
          <NavDot
            className="nav-dot"
            theme={theme}
            active={activeSection === section.id}
          />
        </NavItem>
      ))}
    </NavContainer>
  );
};

export default SectionNav;
