import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import SocialMedia from "../../components/socialMedia/SocialMedia";

// Animations
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// Styled Components
const HeroSection = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  background: ${props => props.theme.body};
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 8rem 5% 4rem;
  }
`;

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.02;
  background-image:
    linear-gradient(${props => props.theme.border} 1px, transparent 1px),
    linear-gradient(90deg, ${props => props.theme.border} 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled(motion.div)`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${props => props.theme.tertiaryText};
  margin-bottom: 2.5rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.theme.border};
  align-self: flex-start;

  @media (max-width: 768px) {
    font-size: 0.65rem;
    margin-bottom: 2rem;
  }
`;

const NameWrapper = styled(motion.div)`
  margin-bottom: 2rem;
`;

const Name = styled.h1`
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  color: ${props => props.theme.text};
  letter-spacing: -0.04em;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

const TypingText = styled.span`
  position: relative;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 0.9em;
  background: ${props => props.theme.text};
  margin-left: 0.1em;
  animation: ${blink} 1s step-end infinite;
  vertical-align: text-bottom;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  color: ${props => props.theme.secondaryText};
  margin: 0 0 2.5rem 0;
  font-weight: 400;
  max-width: 600px;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const RightSection = styled(motion.div)`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const TLDRCard = styled.div`
  background: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.divider};
  padding: 2rem;
  position: relative;
  max-width: 400px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: ${props => props.theme.text};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TLDRHeader = styled.div`
  font-family: ${props => props.theme.fontMono};
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${props => props.theme.tertiaryText};
  margin-bottom: 1.5rem;
`;

const TLDRList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TLDRItem = styled.li`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  transition: ${props => props.theme.transition};

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '→';
    position: absolute;
    left: 0;
    color: ${props => props.theme.text};
    transition: ${props => props.theme.transition};
  }

  ${props => props.clickable && `
    &:hover {
      color: ${props.theme.text};
      padding-left: 2rem;

      &:before {
        left: 0.5rem;
      }
    }
  `}
`;

const ClickableText = styled.span`
  cursor: pointer;
  z-index: 10;
  transition: ${props => props.theme.transition};
  border-bottom: 1px solid transparent;

  &:hover {
    color: ${props => props.theme.text};
    border-bottom-color: ${props => props.theme.text};
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
  z-index: 10;

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
  const [displayedName, setDisplayedName] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullName = 'Ambareesh Ramakrishnan';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <HeroSection theme={theme}>
      <GridBackground theme={theme} />

      <Container>
        <LeftSection>
          <Label
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            theme={theme}
          >
            Senior Software Engineer @ Visa • GenAI Platform
          </Label>

          <NameWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Name theme={theme}>
              <TypingText>
                {displayedName}
                {!isTypingComplete && <Cursor theme={theme} />}
              </TypingText>
            </Name>
          </NameWrapper>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3 }}
            theme={theme}
          >
            Senior Software Engineer at Visa, working on Generative AI Platform.
            MS in Computer Science from Oregon State University (4.0 GPA).
          </Subtitle>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.2 }}
          >
            <SocialMedia theme={theme} />
          </motion.div>
        </LeftSection>

        <RightSection
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <TLDRCard theme={theme}>
            <TLDRHeader theme={theme}>TL;DR</TLDRHeader>
            <TLDRList>
              <TLDRItem theme={theme} clickable onClick={() => scrollToSection('experience')}>
                5+ years building GenAI & enterprise platforms at Visa
              </TLDRItem>
              <TLDRItem theme={theme} clickable onClick={() => scrollToSection('publications')}>
                <ClickableText onClick={() => scrollToSection('publications')}>2 Defensive Publications</ClickableText>{' + '}
                <ClickableText onClick={() => scrollToSection('patents')}>2 Patents Pending</ClickableText>{' + '}
                <ClickableText onClick={() => scrollToSection('publications')}>ICSE Publication</ClickableText>
              </TLDRItem>
              <TLDRItem theme={theme} clickable onClick={() => scrollToSection('experience')}>
                Built RAG systems with 92% accuracy • Saved $250K annually
              </TLDRItem>
              <TLDRItem theme={theme} clickable onClick={() => scrollToSection('education')}>
                MS CS from Oregon State University (Graduated March 2025)
              </TLDRItem>
              <TLDRItem theme={theme} clickable onClick={() => scrollToSection('skills')}>
                Expert: Azure OpenAI • LangChain • RAG • Full-Stack • Cloud
              </TLDRItem>
            </TLDRList>
          </TLDRCard>
        </RightSection>
      </Container>

      <ScrollIndicator
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3.5 }}
      >
        <ScrollText theme={theme}>Scroll</ScrollText>
        <ScrollLine theme={theme} />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default GreetingMinimal;
