import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { FaBuilding } from 'react-icons/fa';
import { experience } from '../myData';

const Section = styled.section`
  min-height: 100vh;
  padding: 8rem 10%;
  background: ${props => props.theme.body};
  position: relative;

  @media (max-width: 768px) {
    padding: 6rem 5%;
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
  max-width: 600px;
  margin: 0;
`;

const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin-bottom: 8rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CompanyHeader = styled.div`
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.divider};
`;

const CompanyMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const CompanyName = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin: 0;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CompanyIcon = styled(FaBuilding)`
  font-size: 1.5rem;
  color: ${props => props.theme.secondaryText};
`;

const Role = styled.div`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.85rem;
  color: ${props => props.theme.secondaryText};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Duration = styled.div`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.8rem;
  color: ${props => props.theme.tertiaryText};
  letter-spacing: 0.05em;
`;

const OneLineDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${props => props.theme.secondaryText};
  margin: 0;
  font-style: italic;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled.button`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.75rem;
  padding: 0.6rem 1.2rem;
  background: ${props => props.active ? props.theme.text : 'transparent'};
  color: ${props => props.active ? props.theme.body : props.theme.secondaryText};
  border: 1px solid ${props => props.active ? props.theme.text : props.theme.border};
  cursor: pointer;
  transition: ${props => props.theme.transition};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;

  &:hover {
    background: ${props => props.active ? props.theme.text : props.theme.cardBgHover};
    border-color: ${props => props.theme.borderHover};
    color: ${props => props.active ? props.theme.body : props.theme.text};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.divider};
  padding: 2rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
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
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.text}, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const CategoryTag = styled.span`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.65rem;
  padding: 0.3rem 0.7rem;
  border: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.tertiaryText};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const ProjectTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${props => props.theme.text};
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${props => props.theme.secondaryText};
  margin: 0 0 1.5rem 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.7rem;
  padding: 0.25rem 0.6rem;
  background: ${props => props.theme.surfaceElevated};
  color: ${props => props.theme.secondaryText};
  border: 1px solid ${props => props.theme.border};
`;

const Impact = styled.div`
  padding-top: 1.5rem;
  border-top: 1px solid ${props => props.theme.border};
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${props => props.theme.text};
  font-weight: 500;

  &:before {
    content: '→';
    margin-right: 0.5rem;
    color: ${props => props.theme.tertiaryText};
  }
`;


const Experience = ({ theme }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  const [filters, setFilters] = useState(experience.map(() => "All"));

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const handleFilterClick = (companyIndex, category) => {
    const newFilters = [...filters];
    newFilters[companyIndex] = category === newFilters[companyIndex] ? "All" : category;
    setFilters(newFilters);
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Section id="experience" theme={theme} ref={containerRef}>
      <SectionHeader>
        <SectionNumber
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          02 — Experience
        </SectionNumber>
        <SectionTitle
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          Work Experience
        </SectionTitle>
        <SectionDescription
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          Building AI-powered solutions, scalable platforms, and innovative tools across research and industry.
        </SectionDescription>
      </SectionHeader>

      {experience.map((company, companyIndex) => {
        const allCategories = ["All", ...new Set(company.projects.flatMap(project => project.categories))];
        const filteredProjects = filters[companyIndex] === "All"
          ? company.projects
          : company.projects.filter(project => project.categories.includes(filters[companyIndex]));


        return (
          <ExperienceContainer key={companyIndex}>
            <CompanyHeader>
              <CompanyMeta>
                <CompanyName theme={theme}>
                  <CompanyIcon theme={theme} />
                  {company.company}
                </CompanyName>
                <Duration theme={theme}>{company.duration}</Duration>
              </CompanyMeta>
              <Role theme={theme}>{company.role}</Role>
              <OneLineDescription theme={theme}>
                {company.oneLineDescription}
              </OneLineDescription>
            </CompanyHeader>

            <FilterContainer>
              {allCategories.map((category) => (
                <FilterButton
                  key={category}
                  active={filters[companyIndex] === category}
                  onClick={() => handleFilterClick(companyIndex, category)}
                  theme={theme}
                >
                  {category}
                </FilterButton>
              ))}
            </FilterContainer>

            <ProjectsGrid
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    theme={theme}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9 }}
                    layout
                  >
                    <CategoryTags>
                      {project.categories.map((category, i) => (
                        <CategoryTag key={i} theme={theme}>{category}</CategoryTag>
                      ))}
                    </CategoryTags>
                    <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
                    <ProjectDescription theme={theme}>
                      {project.description}
                    </ProjectDescription>
                    <TechStack>
                      {project.technologies.map((tech, i) => (
                        <TechTag key={i} theme={theme}>{tech}</TechTag>
                      ))}
                    </TechStack>
                    <Impact theme={theme}>{project.impact}</Impact>
                  </ProjectCard>
                ))}

              </AnimatePresence>
            </ProjectsGrid>
          </ExperienceContainer>
        );
      })}
    </Section>
  );
};

export default Experience;
