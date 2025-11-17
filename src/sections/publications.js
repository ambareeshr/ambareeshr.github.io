import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FaScroll, FaUsers, FaUniversity, FaFileAlt, FaAward } from 'react-icons/fa';
import { publications } from "../myData";

const Section = styled.div`
  padding: 5rem 6%;
  background-color: ${props => props.theme.body};

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

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background: ${props => props.theme.cardBg || '#FFFFFF'};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: ${props => props.theme.cardShadow || '0 4px 6px -1px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(99, 102, 241, 0.1);
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.cardHoverShadow || '0 20px 25px -5px rgba(0, 0, 0, 0.1)'};
    border-color: rgba(99, 102, 241, 0.3);
  }
`;

const TypeBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => {
    if (props.pubType === 'Conference') return 'linear-gradient(135deg, #10B981, #059669)';
    if (props.pubType === 'Thesis') return 'linear-gradient(135deg, #F59E0B, #D97706)';
    return props.theme.gradient || 'linear-gradient(135deg, #6366F1, #8B5CF6)';
  }};
  color: #FFFFFF;
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary || '#6366F1'};
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.text};
  margin-bottom: 0.75rem;
  font-weight: 600;
  line-height: 1.4;
  padding-right: 4rem;
`;

const Venue = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.secondary || '#8B5CF6'};
  font-weight: 500;
  margin-bottom: 1rem;
  font-style: italic;
`;

const CardContent = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.secondaryText};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Icon = styled.span`
  margin-right: 10px;
  color: ${props => props.theme.primary || '#6366F1'};
`;

const LinkButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.625rem 1.25rem;
  background: ${props => props.theme.gradient || 'linear-gradient(135deg, #6366F1, #8B5CF6)'};
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CoAuthors = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: ${props => props.theme.secondaryText};
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.compImgHighlight || '#E5E7EB'};
`;

const getPublicationIcon = (type) => {
  switch(type) {
    case 'Conference':
      return <FaAward />;
    case 'Thesis':
      return <FaUniversity />;
    case 'Defensive Publication':
      return <FaFileAlt />;
    default:
      return <FaScroll />;
  }
};

const Publications = ({ theme }) => {
  return (
    <Section theme={theme} id="publications">
      <SectionTitle theme={theme}>Publications & Research</SectionTitle>
      <SectionSubtitle theme={theme}>
        Academic publications, defensive publications, and research contributions
      </SectionSubtitle>
      <CardContainer>
        {publications.map((pub, index) => (
          <Card
            key={index}
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TypeBadge pubType={pub.type} theme={theme}>{pub.type}</TypeBadge>
            <CardIcon theme={theme}>
              {getPublicationIcon(pub.type)}
            </CardIcon>
            <CardTitle theme={theme}>{pub.title}</CardTitle>
            {pub.venue && <Venue theme={theme}>{pub.venue}</Venue>}
            <CardContent theme={theme}>{pub.description}</CardContent>
            {pub.link && pub.link !== '#' && (
              <LinkButton href={pub.link} target="_blank" rel="noopener noreferrer" theme={theme}>
                Read More
              </LinkButton>
            )}
            {pub.coAuthors && pub.coAuthors.length > 0 && (
              <CoAuthors theme={theme}>
                <Icon theme={theme}><FaUsers /></Icon>
                Co-authors: {pub.coAuthors.join(", ")}
              </CoAuthors>
            )}
          </Card>
        ))}
      </CardContainer>
    </Section>
  );
};

export default Publications;
