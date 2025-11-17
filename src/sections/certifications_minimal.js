import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView, useAnimation } from 'framer-motion';
import { certifications } from '../myData';

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

const CertificationsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const CertificationItem = styled(motion.a)`
  background: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.divider};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  text-decoration: none;
  overflow: hidden;

  &:hover {
    background: ${props => props.theme.cardBgHover};
    border-color: ${props => props.theme.borderHover};
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.cardHoverShadow};

    &:before {
      opacity: 1;
    }
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

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CertificationTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${props => props.theme.text};
  margin: 0;
  letter-spacing: -0.02em;
`;

const Provider = styled.div`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.85rem;
  color: ${props => props.theme.secondaryText};
  font-style: italic;
  flex: 1;
`;

const ExternalLink = styled.span`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.7rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.secondaryText};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  transition: ${props => props.theme.transition};
  align-self: flex-start;
  margin-top: auto;

  ${CertificationItem}:hover & {
    border-color: ${props => props.theme.borderHover};
    color: ${props => props.theme.text};
  }
`;

const Certifications = ({ theme }) => {
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
    <Section id="certifications" theme={theme} ref={containerRef}>
      <SectionHeader>
        <SectionNumber
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          07 — Certifications
        </SectionNumber>
        <SectionTitle
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          Professional Development
        </SectionTitle>
        <SectionDescription
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          Continuous learning through specialized programs in AI, deep learning, and data engineering.
        </SectionDescription>
      </SectionHeader>

      <CertificationsList
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
      >
        {certifications.map((cert, index) => (
          <CertificationItem
            key={index}
            theme={theme}
            variants={itemVariants}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CertificationTitle theme={theme}>{cert.title}</CertificationTitle>
            <Provider theme={theme}>{cert.subtitle}</Provider>
            <ExternalLink theme={theme}>View Credential</ExternalLink>
          </CertificationItem>
        ))}
      </CertificationsList>
    </Section>
  );
};

export default Certifications;
