import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView, useAnimation } from 'framer-motion';
import { skills } from '../../myData';

const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 10%;
  background: ${props => props.theme.body};
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 5%;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 6rem;
  max-width: 800px;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const SectionNumber = styled(motion.div)`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${props => props.theme.tertiaryText};
  margin-bottom: 1rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  color: ${props => props.theme.text};
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.03em;
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.secondaryText};
  max-width: 900px;
  margin: 0;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.divider};
  padding: 2rem;
  position: relative;
  transition: ${props => props.theme.transition};

  &:hover {
    background: ${props => props.theme.cardBgHover};
    border-color: ${props => props.theme.borderHover};
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.cardHoverShadow};

    &:before {
      opacity: 1;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: ${props => props.theme.text};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SkillCategory = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.text};
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.01em;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillTag = styled.li`
  font-size: 0.85rem;
  color: ${props => props.theme.secondaryText};
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.theme.border};
  background: ${props => props.theme.body};
  transition: ${props => props.theme.transition};

  &:hover {
    border-color: ${props => props.theme.divider};
    color: ${props => props.theme.text};
    background: ${props => props.theme.surfaceElevated};
  }
`;

const Skills = ({ theme }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <Section id="skills" theme={theme} ref={containerRef}>
      <SectionHeader>
        <SectionNumber
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          01 — Skills
        </SectionNumber>
        <SectionTitle
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          Technical Expertise
        </SectionTitle>
        <SectionDescription
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          A comprehensive skill set spanning modern technologies, frameworks, and tools for building scalable solutions.
        </SectionDescription>
      </SectionHeader>

      <SkillsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        {skills.map((skillGroup, index) => (
          <SkillCard
            key={index}
            theme={theme}
            variants={itemVariants}
          >
            <SkillCategory theme={theme}>{skillGroup.category}</SkillCategory>
            <SkillsList>
              {skillGroup.items.map((skill, idx) => (
                <SkillTag key={idx} theme={theme}>
                  {skill}
                </SkillTag>
              ))}
            </SkillsList>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  );
};

export default Skills;
