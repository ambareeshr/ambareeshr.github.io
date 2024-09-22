import React, { useState } from "react";
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { experience, recommendations } from '../myData';
import { FaRocket, FaLinkedin, FaCalendarAlt, FaMapMarkerAlt, FaQuoteLeft } from 'react-icons/fa';

const ExperienceSection = styled.div`
  background-color: ${props => props.theme.body};
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.text};
  margin-bottom: 0px;
  text-align: center;
  font-weight: 700;
`;

const ExperienceContainer = styled.div`
  margin-bottom: 60px;
`;

const CompanyHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const CompanyLogo = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;

const CompanyName = styled.h3`
  font-size: 24px;
  color: ${props => props.theme.text};
  margin-bottom: -5px;
`;

const JobTitle = styled.h4`
  font-size: 20px;
  color: ${props => props.theme.primary};
  margin-bottom: 5px;
`;

const JobInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const JobInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  color: ${props => props.theme.secondaryText};
  font-size: 16px;

  svg {
    margin-right: 5px;
  }
`;

const OneLineDescription = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
  color: ${props => props.theme.text};
  margin-bottom: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const FilterBadge = styled.button`
  background-color: ${props => props.active ? '#3498db' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#3498db'};
  border: 2px solid #3498db;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3498db;
    color: #fff;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(145deg, #e6f3ed, #f0faf6);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    background: linear-gradient(145deg, #d9e8e0, #e3f2e9);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #34495e;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TechBadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const TechBadge = styled.span`
  background-color: #3498db;
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const CategoryBadge = styled.span`
  background-color: #2ecc71;
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const ImpactSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #bdc3c7;
  display: flex;
  align-items: center;
`;

const ImpactIcon = styled(FaRocket)`
  color: #e74c3c;
  margin-right: 0.5rem;
  font-size: 1rem;
  flex-shrink: 0;
`;

const ImpactText = styled.p`
  color: #34495e;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
  flex-grow: 1;
`;
const RecommendationCard = styled(motion.div)`
  grid-column: span 2;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  grid-column: span 2;
  
  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

const RecommendationHeader = styled.div`
  background-color: #f3f6f8;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;

const LinkedInIcon = styled(FaLinkedin)`
  color: #0a66c2;
  font-size: 24px;
  margin-right: 10px;
`;

const HeaderText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

const RecommendationBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const QuoteIcon = styled(FaQuoteLeft)`
  color: #0a66c2;
  font-size: 24px;
  margin-bottom: 10px;
`;

const RecommendationContent = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  text-align: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-line;
`;

const RecommenderInfo = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const RecommenderName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

const RecommenderPosition = styled.span`
  font-size: 14px;
  color: #666;
`;

const Experience = ({ theme }) => {
  const [filters, setFilters] = useState(experience.map(() => "All"));

  const handleFilterClick = (companyIndex, category) => {
    const newFilters = [...filters];
    newFilters[companyIndex] = category === newFilters[companyIndex] ? "All" : category;
    setFilters(newFilters);
  };

  return (
    <ExperienceSection theme={theme} id="experience">
      <SectionTitle theme={theme}>Work Experience</SectionTitle>
      {experience.map((company, companyIndex) => {
        const allCategories = ["All", ...new Set(company.projects.flatMap(project => project.categories))];
        const filteredProjects = filters[companyIndex] === "All" 
          ? company.projects 
          : company.projects.filter(project => project.categories.includes(filters[companyIndex]));
        
        const companyRecommendations = recommendations.filter(rec => rec.company_name === company.company);

        return (
          <ExperienceContainer key={companyIndex}>
            <CompanyHeader>
              <CompanyLogo src={require(`../assests/images/${company.logo_path}`)} alt={`${company.company} Logo`} />
              <CompanyName theme={theme}>{company.company}</CompanyName>
              <JobTitle theme={theme}>{company.role}</JobTitle>
              <JobInfo>
                <JobInfoItem theme={theme}>
                  <FaCalendarAlt />
                  {company.duration}
                </JobInfoItem>
                <JobInfoItem theme={theme}>
                  <FaMapMarkerAlt />
                  {company.location}
                </JobInfoItem>
              </JobInfo>
              <OneLineDescription theme={theme}>{company.oneLineDescription}</OneLineDescription>
            </CompanyHeader>

            <FilterContainer>
              {allCategories.map((category) => (
                <FilterBadge
                  key={category}
                  active={filters[companyIndex] === category}
                  onClick={() => handleFilterClick(companyIndex, category)}
                  theme={theme}
                >
                  {category}
                </FilterBadge>
              ))}
            </FilterContainer>

            <ProjectsGrid
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    theme={theme}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div>
                      <CategoryContainer>
                        {project.categories.map((category, i) => (
                          <CategoryBadge key={i} theme={theme}>{category}</CategoryBadge>
                        ))}
                      </CategoryContainer>
                      <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
                      <ProjectDescription theme={theme}>{project.description}</ProjectDescription>
                      <TechBadgesContainer>
                        {project.technologies.map((tech, i) => (
                          <TechBadge key={i} theme={theme}>{tech}</TechBadge>
                        ))}
                      </TechBadgesContainer>
                    </div>
                    <ImpactSection>
                      <ImpactIcon />
                      <ImpactText theme={theme}>{project.impact}</ImpactText>
                    </ImpactSection>
                  </ProjectCard>
                ))}
                {companyRecommendations.map((rec, index) => (
                  <RecommendationCard
                  key={`rec-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: filteredProjects.length * 0.1 + index * 0.1 }}
                >
                  <RecommendationHeader>
                    <LinkedInIcon />
                    <HeaderText>Recommendation</HeaderText>
                  </RecommendationHeader>
                  <RecommendationBody>
                    <QuoteIcon />
                    <RecommendationContent>"{rec.text}"</RecommendationContent>
                    <RecommenderInfo>
                      <RecommenderName>{rec.name}</RecommenderName>
                      {' | '}
                      <RecommenderPosition>{rec.position}</RecommenderPosition>
                    </RecommenderInfo>
                  </RecommendationBody>
                </RecommendationCard>
                ))}
              </AnimatePresence>
            </ProjectsGrid>
          </ExperienceContainer>
        );
      })}
    </ExperienceSection>
  );
};

export default Experience;