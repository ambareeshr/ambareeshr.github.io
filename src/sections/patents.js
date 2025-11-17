import React from 'react';
import styled from 'styled-components';
import { Fade } from "react-reveal";
import { patents } from '../myData';
import { FaAward, FaUsers } from 'react-icons/fa';

const PatentsSection = styled.div`
  background-color: ${props => props.theme.body};
  padding: 5rem 6%;

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: ${props => props.theme.gradient || 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${props => props.theme.secondaryText};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const PatentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PatentCard = styled.a`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 30px;
  width: 100%;
  box-shadow: ${props => props.theme.cardShadow || '0 4px 6px -1px rgba(0, 0, 0, 0.1)'};
  display: flex;
  flex-direction: column;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    transform: translateY(-3px);
  }

  &:hover::after {
    content: 'View Patent';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(3, 102, 214, 0.95);
    color: white;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 10;
    pointer-events: none;
  }

  &:hover > * {
    opacity: 0.3;
  }
`;

const PatentIcon = styled(FaAward)`
  font-size: 2rem;
  color: ${props => props.theme.primary || '#6366F1'};
  margin-bottom: 1rem;
`;

const PatentTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.75rem;
  font-weight: 600;
  line-height: 1.4;
`;

const PatentNumber = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.secondary || '#8B5CF6'};
  font-weight: 500;
  margin-bottom: 1rem;
  font-family: 'Monaco', 'Courier New', monospace;
`;

const PatentDescription = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 1rem;
  flex-grow: 1;
  line-height: 1.6;
`;

const PatentMetaInfo = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.secondaryText};
  margin-top: 0.5rem;
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

const StatusBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.theme.gradient || 'linear-gradient(135deg, #6366F1, #8B5CF6)'};
  color: #FFFFFF;
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Patents = ({ theme }) => {
  return (
    <PatentsSection id="patents" theme={theme}>
      <Fade bottom duration={1000} distance="20px">
        <SectionTitle theme={theme}>Patents</SectionTitle>
        <SectionSubtitle theme={theme}>
          Innovative solutions protecting intellectual property in authentication and security
        </SectionSubtitle>
        <PatentsContainer>
          {patents.map((patent, index) => (
            <Fade key={index} bottom duration={1000} distance="20px">
              <PatentCard href={patent.link} target="_blank" rel="noopener noreferrer">
                <FiledBadge>Filed</FiledBadge>
                <PatentIcon />
                <PatentTitle>{patent.title}</PatentTitle>
                <PatentDescription>
                  {patent.description}
                </PatentDescription>
                <PatentMetaInfo theme={theme}>
                  {patent.date}
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