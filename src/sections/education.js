import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { degrees } from "../myData";
import { FaCalendarAlt, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

const EducationSection = styled.div`
  background-color: ${props => props.theme.body};
  padding: 5% 5%;
  display: grid;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;

`;

const EducationContainer = styled.div`
  display: grid;
  gap: 2rem;
  overflow: hidden;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 900px) {
    grid-column: span 1;
  }
    @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const EducationCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  width: 100%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 1rem;
  align-self: center;
`;

const DegreeTitle = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DegreeSubtitle = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 0.5rem;
  text-align: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.secondaryText};
  font-size: 0.9rem;

  svg {
    margin-right: 0.3rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const SubpointsList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const Subpoint = styled.li`
  font-size: 0.98rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-start;
  text-align: left;

  &:before {
    content: "•";
    color: ${props => props.theme.primary};
    font-weight: bold;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SubpointContent = styled.span`
  flex: 1;
`;

const SubpointLink = styled.a`
  color: ${props => props.theme.primary};
  text-decoration: none;
  word-break: break-word;

  &:hover {
    text-decoration: underline;
  }
`;

const Education = ({ theme }) => {
  const createMarkup = (html) => {
    return {__html: html};
  }

  return (
    <EducationSection theme={theme} id="education">
      <SectionTitle theme={theme}>Education</SectionTitle>
      <EducationContainer>
        {degrees.degrees.map((degree, index) => (
          <EducationCard
            key={index}
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Logo src={require(`../assests/images/${degree.logo_path}`)} alt={degree.alt_name} />
            <DegreeTitle theme={theme}>{degree.title}</DegreeTitle>
            <DegreeSubtitle theme={theme}>{degree.subtitle}</DegreeSubtitle>
            <InfoContainer>
              <InfoItem theme={theme}>
                <FaGraduationCap />
                CGPA: {degree.cgpa}
              </InfoItem>
              <InfoItem theme={theme}>
                <FaCalendarAlt />
                {degree.duration}
              </InfoItem>
              <InfoItem theme={theme}>
                <FaMapMarkerAlt />
                {degree.location}
              </InfoItem>
            </InfoContainer>
            <SubpointsList>
              {degree.descriptions.map((description, i) => (
                <Subpoint key={i} theme={theme}>
                  <SubpointContent dangerouslySetInnerHTML={createMarkup(description)} />
                </Subpoint>
              ))}
            </SubpointsList>
          </EducationCard>
        ))}
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;