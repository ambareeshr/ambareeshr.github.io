import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView, useAnimation } from 'framer-motion';
import { degrees } from '../myData';

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

const TimelineContainer = styled.div`
  max-width: 1000px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: ${props => props.theme.divider};

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const DegreeCard = styled(motion.div)`
  padding-left: 4rem;
  margin-bottom: 4rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    margin-bottom: 3rem;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -6px;
  top: 0.5rem;
  width: 13px;
  height: 13px;
  background: ${props => props.theme.text};
  border: 2px solid ${props => props.theme.body};
  border-radius: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Duration = styled.div`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.8rem;
  color: ${props => props.theme.tertiaryText};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Institution = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
`;

const Degree = styled.div`
  font-size: 1.1rem;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 0.75rem;
`;

const Location = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.tertiaryText};
  margin-bottom: 1rem;
`;

const GPA = styled.div`
  display: inline-block;
  font-family: ${props => props.theme.fontMono};
  font-size: 0.85rem;
  color: ${props => props.theme.text};
  padding: 0.4rem 0.8rem;
  border: 1px solid ${props => props.theme.divider};
  margin-bottom: 1.5rem;
`;

const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const HighlightItem = styled.li`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${props => props.theme.tertiaryText};
  }

  strong {
    color: ${props => props.theme.text};
    font-weight: 600;
  }

  a {
    color: ${props => props.theme.text};
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.border};
    transition: ${props => props.theme.transition};

    &:hover {
      text-decoration-color: ${props => props.theme.text};
    }
  }
`;

const Education = ({ theme }) => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <Section id="education" theme={theme} ref={containerRef}>
      <SectionHeader>
        <SectionNumber
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          05 — Education
        </SectionNumber>
        <SectionTitle
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          Academic Background
        </SectionTitle>
        <SectionDescription
          theme={theme}
          variants={itemVariants}
          initial="hidden"
          animate={mainControls}
        >
          Educational journey spanning Computer Science, AI, and hands-on research experience.
        </SectionDescription>
      </SectionHeader>

      <TimelineContainer theme={theme}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
        >
          {degrees.degrees.map((degree, index) => (
            <DegreeCard
              key={index}
              theme={theme}
              as={motion.div}
              variants={itemVariants}
            >
              <TimelineDot theme={theme} />
              <Duration theme={theme}>{degree.duration}</Duration>
              <Institution theme={theme}>{degree.title}</Institution>
              <Degree theme={theme}>{degree.subtitle}</Degree>
              <Location theme={theme}>{degree.location}</Location>
              <GPA theme={theme}>CGPA: {degree.cgpa}</GPA>
              <HighlightsList>
                {degree.points && degree.points.map((point, idx) => (
                  <HighlightItem
                    key={idx}
                    theme={theme}
                    dangerouslySetInnerHTML={{ __html: point.content }}
                  />
                ))}
              </HighlightsList>
            </DegreeCard>
          ))}
        </motion.div>
      </TimelineContainer>
    </Section>
  );
};

export default Education;
