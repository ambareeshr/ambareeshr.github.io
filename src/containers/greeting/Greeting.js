import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { greeting } from "../../myData";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import FeelingProud from "./FeelingProud";

const GreetingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 5% 2rem;
  background-color: ${props => props.theme.body};
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 7rem 5% 2rem;
    text-align: center;
  }
`;

const TextContainer = styled(motion.div)`
  flex: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 1.5rem;
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const Greeting = ({ theme }) => {
  return (
    <GreetingContainer>
      <TextContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>
          Hi, I'm <br />
          <span style={{ color: theme.primary }}>{greeting.title}</span>
        </Title>
        <Subtitle>{greeting.subTitle}</Subtitle>
        <SocialMedia theme={theme} />
      </TextContainer>
      <ImageContainer
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FeelingProud theme={theme} />
      </ImageContainer>
    </GreetingContainer>
  );
};

export default Greeting;