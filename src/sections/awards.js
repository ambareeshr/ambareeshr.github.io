import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaMedal, FaCertificate, FaStar, FaGraduationCap } from 'react-icons/fa';
import { achievements } from "../myData";

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

const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => {
    if (props.category === 'Research') return 'linear-gradient(135deg, #8B5CF6, #6366F1)';
    if (props.category === 'Leadership') return 'linear-gradient(135deg, #EC4899, #F43F5E)';
    if (props.category === 'Innovation') return 'linear-gradient(135deg, #10B981, #14B8A6)';
    if (props.category === 'Competition') return 'linear-gradient(135deg, #F59E0B, #EF4444)';
    return props.theme.gradient || 'linear-gradient(135deg, #6366F1, #8B5CF6)';
  }};
  color: #FFFFFF;
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const YearBadge = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.secondary || '#8B5CF6'};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.primary || '#6366F1'};
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.4;
  padding-right: 4rem;
`;

const CardContent = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.secondaryText};
  line-height: 1.6;
`;

const getCategoryIcon = (category) => {
  switch(category) {
    case 'Research':
      return <FaGraduationCap />;
    case 'Leadership':
      return <FaAward />;
    case 'Innovation':
      return <FaStar />;
    case 'Competition':
      return <FaMedal />;
    case 'Professional Development':
      return <FaCertificate />;
    default:
      return <FaTrophy />;
  }
};

const Awards = ({ theme }) => {
  return (
    <Section theme={theme} id="awards">
      <SectionTitle theme={theme}>Awards & Achievements</SectionTitle>
      <SectionSubtitle theme={theme}>
        Recognition for research excellence, leadership, and technical innovation
      </SectionSubtitle>
      <CardContainer>
        {achievements.map((award, index) => (
          <Card
            key={index}
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CategoryBadge category={award.category} theme={theme}>
              {award.category}
            </CategoryBadge>
            <CardIcon theme={theme}>
              {getCategoryIcon(award.category)}
            </CardIcon>
            {award.year && <YearBadge theme={theme}>{award.year}</YearBadge>}
            <CardTitle theme={theme}>{award.title}</CardTitle>
            <CardContent theme={theme}>{award.description}</CardContent>
          </Card>
        ))}
      </CardContainer>
    </Section>
  );
};

export { Awards };
