import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { degrees } from "../myData";
import { FaCalendarAlt, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

const EducationSection = styled.div`
  background-color: ${props => props.theme.body};
  margin-left: 40px;
  margin-right: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.text};
  margin-bottom: 40px;
  text-align: center;
  font-weight: 700;
`;

const EducationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
`;

const EducationCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  width: calc(50% - 20px);
  font-size: 14px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 15px;
  align-self: center;
`;

const DegreeTitle = styled.h3`
  font-size: 20px;
  color: ${props => props.theme.primary};
  margin-bottom: 5px;
  text-align: center;
  font-weight: 600;
`;

const DegreeSubtitle = styled.p`
  font-size: 16px;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 10px;
  text-align: center;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 10px;
  color: ${props => props.theme.secondaryText};
  font-size: 14px;

  svg {
    margin-right: 5px;
  }
`;

const SubpointsList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const Subpoint = styled.li`
  font-size: 14px;
  color: ${props => props.theme.text};
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  text-align: left;

  &:before {
    content: "";
    display: inline-block;
    min-width: 8px;
    height: 8px;
    background-color: ${props => props.theme.primary};
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 5px;
  }
`;

const SubpointContent = styled.span`
  flex: 1;
`;

const SubpointLink = styled.a`
  color: ${props => props.theme.primary};
  text-decoration: none;
  white-space: nowrap;

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