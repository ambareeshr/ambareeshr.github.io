import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaQuoteLeft, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { recommendations } from '../myData';

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
  max-width: 900px;
  margin: 0;
`;

const RecommendationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1400px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const RecommendationCard = styled(motion.div)`
  background: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.divider};
  padding: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: ${props => props.theme.transition};

  &:hover {
    background: ${props => props.theme.cardBgHover};
    border-color: ${props => props.theme.borderHover};
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.cardHoverShadow};
  }
`;

const RecommendationHeader = styled.div`
  padding: 1.5rem 2rem;
  border-bottom: 1px solid ${props => props.theme.divider};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${props => props.theme.cardBg};
`;

const LinkedInIcon = styled(FaLinkedin)`
  color: #0a66c2;
  font-size: 1.5rem;
`;

const RecommendationLabel = styled.span`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.theme.secondaryText};
`;

const RecommendationBody = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const QuoteIcon = styled(FaQuoteLeft)`
  color: ${props => props.theme.tertiaryText};
  font-size: 1.2rem;
`;

const RecommendationText = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${props => props.theme.secondaryText};
  margin: 0;
  font-style: italic;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.expanded ? 'unset' : '5'};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ExpandButton = styled.button`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  background: transparent;
  border: 1px solid ${props => props.theme.border};
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  transition: ${props => props.theme.transition};

  &:hover {
    border-color: ${props => props.theme.borderHover};
    background: ${props => props.theme.cardBgHover};
  }

  svg {
    font-size: 0.6rem;
  }
`;

const RecommenderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid ${props => props.theme.border};
`;

const RecommenderName = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.text};
`;

const RecommenderPosition = styled.div`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.8rem;
  color: ${props => props.theme.tertiaryText};
`;

const Recommendations = ({ theme }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const toggleExpand = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
    <Section id="recommendations" theme={theme} ref={containerRef}>
      <SectionHeader>
        <SectionNumber
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          08 — Recommendations
        </SectionNumber>
        <SectionTitle
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          What People Say
        </SectionTitle>
        <SectionDescription
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          Professional endorsements from colleagues and leaders I've worked with.
        </SectionDescription>
      </SectionHeader>

      <RecommendationsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        {recommendations.map((rec, index) => (
          <RecommendationCard
            key={index}
            theme={theme}
            variants={itemVariants}
          >
            <RecommendationHeader theme={theme}>
              <LinkedInIcon />
              <RecommendationLabel theme={theme}>LinkedIn Recommendation</RecommendationLabel>
            </RecommendationHeader>
            <RecommendationBody>
              <QuoteIcon theme={theme} />
              <RecommendationText theme={theme} expanded={expandedCards[index]}>
                "{rec.text}"
              </RecommendationText>
              {rec.text.length > 200 && (
                <ExpandButton theme={theme} onClick={() => toggleExpand(index)}>
                  {expandedCards[index] ? (
                    <>Show Less <FaChevronUp /></>
                  ) : (
                    <>Read More <FaChevronDown /></>
                  )}
                </ExpandButton>
              )}
              <RecommenderInfo theme={theme}>
                <RecommenderName theme={theme}>{rec.name}</RecommenderName>
                <RecommenderPosition theme={theme}>{rec.position}</RecommenderPosition>
              </RecommenderInfo>
            </RecommendationBody>
          </RecommendationCard>
        ))}
      </RecommendationsGrid>
    </Section>
  );
};

export default Recommendations;
