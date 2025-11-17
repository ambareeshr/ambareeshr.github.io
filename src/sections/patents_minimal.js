import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView, useAnimation } from 'framer-motion';
import { patents } from '../myData';

const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 10%;
  background: ${props => props.theme.body};
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 5%;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PatentCard = styled(motion.a)`
  background: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.divider};
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  cursor: ${props => props.hasLink ? 'pointer' : 'default'};
  transition: ${props => props.theme.transition};
  text-decoration: none;
  display: block;

  &:hover {
    background: ${props => props.theme.cardBgHover};
    border-color: ${props => props.theme.borderHover};
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.cardHoverShadow};

    &:before {
      opacity: 1;
    }

    ${props => props.hasLink && `
      &:after {
        opacity: 1;
      }
    `}
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

  ${props => props.hasLink && `
    &:after {
      content: 'View →';
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      padding: 0.6rem 1.2rem;
      background: ${props.theme.text};
      color: ${props.theme.body};
      font-family: ${props.theme.fontMono};
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border-radius: 2px;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }
  `}

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const PatentNumber = styled.div`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.7rem;
  color: ${props => props.theme.tertiaryText};
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const PatentTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${props => props.theme.text};
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
`;

const PatentDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${props => props.theme.secondaryText};
  margin: 0 0 1.5rem 0;
`;

const PatentMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${props => props.theme.border};
`;

const MetaItem = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.tertiaryText};

  span {
    color: ${props => props.theme.secondaryText};
    margin-left: 0.5rem;
  }
`;

const CoAuthorsButton = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.tertiaryText};
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:hover {
    color: ${props => props.theme.text};
  }

  span {
    color: ${props => props.theme.secondaryText};
    margin-left: 0.5rem;
    text-decoration: underline;
  }
`;

const CoAuthorsList = styled(motion.div)`
  font-size: 0.85rem;
  color: ${props => props.theme.secondaryText};
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid ${props => props.theme.border};
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${props => props.theme.border};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.theme.secondaryText};
  background: ${props => props.theme.cardBg};
`;

const TypeBadge = styled.div`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.65rem;
  padding: 0.3rem 0.6rem;
  border: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.tertiaryText};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: inline-block;
  margin-bottom: 1rem;
`;

const Patents = ({ theme }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const mainControls = useAnimation();
  const [expandedCoAuthors, setExpandedCoAuthors] = useState({});

  const toggleCoAuthors = (index) => {
    setExpandedCoAuthors(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

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
      y: 50,
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
    <Section id="patents" theme={theme} ref={containerRef}>
      <SectionHeader>
        <SectionNumber
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          03 — Intellectual Property
        </SectionNumber>
        <SectionTitle
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          Patents & Publications
        </SectionTitle>
        <SectionDescription
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          Innovation in authentication, security, and financial technology. Patents pending and defensive publications protecting novel approaches.
        </SectionDescription>
      </SectionHeader>

      <Grid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        {patents.map((patent, index) => (
          <PatentCard
            key={index}
            theme={theme}
            variants={itemVariants}
            as={patent.link ? motion.a : motion.div}
            href={patent.link || undefined}
            target={patent.link ? "_blank" : undefined}
            rel={patent.link ? "noopener noreferrer" : undefined}
            hasLink={!!patent.link}
          >
            <StatusBadge theme={theme}>{patent.status}</StatusBadge>
            <TypeBadge theme={theme}>{patent.type}</TypeBadge>
            <PatentNumber theme={theme}>{patent.number}</PatentNumber>
            <PatentTitle theme={theme}>{patent.title}</PatentTitle>
            <PatentDescription theme={theme}>
              {patent.description}
            </PatentDescription>
            <PatentMeta theme={theme}>
              <MetaItem theme={theme}>
                {patent.type === 'Patent' ? 'Filed' : 'Published'}<span>{patent.date}</span>
              </MetaItem>
              {patent.coAuthors && patent.coAuthors.length > 0 && (
                <>
                  <CoAuthorsButton
                    theme={theme}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleCoAuthors(index);
                    }}
                  >
                    Co-authors<span>{patent.coAuthors.length} {expandedCoAuthors[index] ? '▲' : '▼'}</span>
                  </CoAuthorsButton>
                  {expandedCoAuthors[index] && (
                    <CoAuthorsList
                      theme={theme}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {patent.coAuthors.join(', ')}
                    </CoAuthorsList>
                  )}
                </>
              )}
            </PatentMeta>
          </PatentCard>
        ))}
      </Grid>
    </Section>
  );
};

export default Patents;
