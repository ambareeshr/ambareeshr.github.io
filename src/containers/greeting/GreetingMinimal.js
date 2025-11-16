import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform } from "framer-motion";
import { greeting } from "../../myData";
import SocialMedia from "../../components/socialMedia/SocialMedia";

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Styled Components
const HeroSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10%;
  background: ${props => props.theme.body};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 5%;
    min-height: 90vh;
  }
`;

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  background-image:
    linear-gradient(${props => props.theme.border} 1px, transparent 1px),
    linear-gradient(90deg, ${props => props.theme.border} 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  z-index: 1;
`;

const Label = styled(motion.div)`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 2rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;

  @media (max-width: 768px) {
    font-size: 0.65rem;
    margin-bottom: 1.5rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 800;
  line-height: 0.9;
  margin: 0 0 1.5rem 0;
  color: ${props => props.theme.text};
  letter-spacing: -0.04em;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const NameHighlight = styled.span`
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    bottom: 0.1em;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.text};
    animation: ${slideIn} 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
  }
`;

const Description = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.8;
  color: ${props => props.theme.secondaryText};
  max-width: 700px;
  margin: 0 0 3rem 0;
  font-weight: 400;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const HighlightText = styled.span`
  color: ${props => props.theme.text};
  font-weight: 500;
`;

const ActionsWrapper = styled(motion.div)`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 2rem;
  }
`;

const ScrollText = styled.span`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${props => props.theme.tertiaryText};
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 60px;
  background: ${props => props.theme.divider};
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: ${props => props.theme.text};
    animation: scrollDown 2s ease-in-out infinite;
  }

  @keyframes scrollDown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(200%);
    }
  }
`;

const GreetingMinimal = ({ theme }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeroSection theme={theme}>
      <GridBackground theme={theme} />

      <ContentWrapper>
        <Label
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          theme={theme}
        >
          Software Engineer • AI Researcher
        </Label>

        <Name
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          theme={theme}
        >
          <NameHighlight theme={theme}>Ambareesh</NameHighlight>
          <br />
          Ramakrishnan
        </Name>

        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          theme={theme}
        >
          <HighlightText theme={theme}>Master's in Computer Science with AI Concentration</HighlightText> at Oregon State University.
          Building scalable AI solutions, from RAG systems to deep learning models.
          <HighlightText theme={theme}> 2 patents, published research</HighlightText>, and a passion for pushing the boundaries of technology.
        </Description>

        <ActionsWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <SocialMedia theme={theme} />
        </ActionsWrapper>
      </ContentWrapper>

      <ScrollIndicator
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <ScrollText theme={theme}>Scroll</ScrollText>
        <ScrollLine theme={theme} />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default GreetingMinimal;
