import React from 'react';
import styled from 'styled-components';
import { Fade } from "react-reveal";
import { patents } from '../myData';
import { FaAward, FaUsers } from 'react-icons/fa';

const PatentsSection = styled.div`
  background-color: ${props => props.theme.body};
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 24px;
  text-align: center;
  font-weight: bold;
`;

const PatentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PatentCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 30px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover {
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }
`;

const PatentIcon = styled(FaAward)`
  font-size: 24px;
  color: #0366d6;
  margin-bottom: 12px;
`;

const PatentTitle = styled.h3`
  font-size: 18px;
  color: #0366d6;
  margin-bottom: 8px;
  font-weight: 600;
`;

const PatentDescription = styled.p`
  font-size: 14px;
  color: #586069;
  margin-bottom: 12px;
  flex-grow: 1;
`;

const PatentMetaInfo = styled.div`
  font-size: 12px;
  color: #6a737d;
  margin-top: 8px;
`;

const Icon = styled.span`
  margin-right: 10px;
  color: #0a66c2;
`;

const CoAuthors = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  font-size: 14px;
  color: ${props => props.theme.secondaryText};
`;

const FiledBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffd700; // Yellow background
  color: #000000; // Black text
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
`;

const Patents = ({ theme }) => {
  return (
    <PatentsSection id="patents">
      <Fade bottom duration={1000} distance="20px">
        <SectionTitle>Patents</SectionTitle>
        <PatentsContainer>
          {patents.map((patent, index) => (
            <Fade key={index} bottom duration={1000} distance="20px">
              <PatentCard>
                <FiledBadge>Filed</FiledBadge>
                <PatentIcon />
                <PatentTitle>{patent.title}</PatentTitle>
                <PatentDescription>
                  {patent.description}
                </PatentDescription>
                <PatentMetaInfo>
                  Filed on {patent.date}
                </PatentMetaInfo>
                {patent.coAuthors && patent.coAuthors.length > 0 && (
                  <CoAuthors theme={theme}>
                    <Icon><FaUsers /></Icon>
                    Co-authors: {patent.coAuthors.join(', ')}
                  </CoAuthors>
                )}
              </PatentCard>
            </Fade>
          ))}
        </PatentsContainer>
      </Fade>
    </PatentsSection>
  );
};

export default Patents;