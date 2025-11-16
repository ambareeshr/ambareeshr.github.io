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
  max-width: 900px;
`;

const CertificationItem = styled(motion.a)`
  display: block;
  padding: 2.5rem 0;
  border-bottom: 1px solid ${props => props.theme.divider};
  position: relative;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  text-decoration: none;

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

const CertificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const CertificationTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${props => props.theme.text};
  margin: 0;
  flex: 1;
  letter-spacing: -0.02em;
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

  ${CertificationItem}:hover & {
    border-color: ${props => props.theme.borderHover};
    color: ${props => props.theme.text};
  }
`;

const Provider = styled.div`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.85rem;
  color: ${props => props.theme.secondaryText};
  font-style: italic;
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
            <CertificationHeader>
              <CertificationTitle theme={theme}>{cert.title}</CertificationTitle>
              <ExternalLink theme={theme}>View Credential</ExternalLink>
            </CertificationHeader>
            <Provider theme={theme}>{cert.subtitle}</Provider>
          </CertificationItem>
        ))}
      </CertificationsList>
    </Section>
  );
};

export default Certifications;
