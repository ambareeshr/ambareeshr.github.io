import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skills } from '../../myData';
import { FaCode, FaDatabase, FaCloud, FaBrain } from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 5% 5%;
  background: ${props => props.theme.body};
`;

const SkillsContainer = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.text};
  text-align: center;
  margin-bottom: 3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: #ffffff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    font-size: 1.4rem;
  }
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const SkillItem = styled(motion.div)`
  background: ${props => props.theme.skillBadge};
  color: ${props => props.theme.text};
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primary};
    color: rgb(3, 102, 214);
    transform: translateY(-2px);
  }
`;

const getCategoryIcon = (category) => {
    switch(category) {
      case 'Languages & Frameworks':
        return <FaCode />;
      case 'Databases & Big Data':
        return <FaDatabase />;
      case 'Cloud & DevOps':
        return <FaCloud />;
      case 'AI & Machine Learning':
        return <FaBrain />;
      default:
        return null;
    }
  };

const Skills = ({ theme }) => {
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          {skills.map((category, index) => (
            <SkillCategory
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryTitle>
                {getCategoryIcon(category.category)}
                {category.category}
              </CategoryTitle>
              <SkillsList>
                {category.items.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;