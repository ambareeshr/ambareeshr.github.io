import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView, useAnimation } from 'framer-motion';
import { publications } from '../myData';

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

const PublicationsList = styled.div`
  max-width: 900px;
`;

const PublicationItem = styled(motion.div)`
  padding: 2.5rem 0;
  border-bottom: 1px solid ${props => props.theme.divider};
  position: relative;
  cursor: pointer;
  transition: ${props => props.theme.transition};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    padding-left: 2rem;
    border-bottom-color: ${props => props.theme.borderHover};

    &:before {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:before {
    content: '→';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-1rem, -50%);
    font-size: 1.2rem;
    color: ${props => props.theme.text};
    opacity: 0;
    transition: ${props => props.theme.transition};
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const PublicationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const PublicationTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${props => props.theme.text};
  margin: 0;
  flex: 1;
  letter-spacing: -0.02em;
`;

const TypeBadge = styled.span`
  padding: 0.4rem 0.8rem;
  border: 1px solid ${props => props.theme.border};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.theme.secondaryText};
  white-space: nowrap;
`;

const PublicationVenue = styled.div`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.85rem;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 0.75rem;
  font-style: italic;
`;

const PublicationDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${props => props.theme.tertiaryText};
  margin: 0 0 1rem 0;
`;

const CoAuthors = styled.div`
  font-size: 0.85rem;
  color: ${props => props.theme.tertiaryText};

  span {
    color: ${props => props.theme.secondaryText};
  }
`;

const Publications = ({ theme }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

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
    <Section id="publications" theme={theme} ref={containerRef}>
      <SectionHeader>
        <SectionNumber
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          03 — Publications
        </SectionNumber>
        <SectionTitle
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          Research & Writing
        </SectionTitle>
        <SectionDescription
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          Academic publications, defensive publications, and research contributions advancing the field.
        </SectionDescription>
      </SectionHeader>

      <PublicationsList
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        {publications.map((pub, index) => (
          <PublicationItem
            key={index}
            theme={theme}
            variants={itemVariants}
          >
            <PublicationHeader>
              <PublicationTitle theme={theme}>{pub.title}</PublicationTitle>
              <TypeBadge theme={theme}>{pub.type}</TypeBadge>
            </PublicationHeader>
            {pub.venue && (
              <PublicationVenue theme={theme}>{pub.venue}</PublicationVenue>
            )}
            <PublicationDescription theme={theme}>
              {pub.description}
            </PublicationDescription>
            {pub.coAuthors && pub.coAuthors.length > 0 && (
              <CoAuthors theme={theme}>
                With: <span>{pub.coAuthors.join(', ')}</span>
              </CoAuthors>
            )}
          </PublicationItem>
        ))}
      </PublicationsList>
    </Section>
  );
};

export default Publications;
