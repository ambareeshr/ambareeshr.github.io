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
  padding: 5px 6%;
  background-color: ${props => props.theme.body};
  overflow: hidden;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 6px 5%;
  }
`;

const TextContainer = styled(motion.div)`
  flex: 1;
  max-width: 600px;
  margin-right: 40px;
  @media (max-width: 1200px) {
    margin-right: 0;
    margin-bottom: 40px;
    text-align: center;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: ${props => props.theme.text};
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubtitleContainer = styled(motion.div)`
  background: linear-gradient(120deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  padding: 3px;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
`;
const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 20px;
  border-radius: 10px;
  margin: 0;
`;
const HighlightSpan = styled.span`
  color: ${props => props.theme.primary};
  font-weight: 600;
  white-space: nowrap;
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
`;

const Greeting = ({ theme }) => {
  return (
    <GreetingContainer>
      <TextContainer
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Title>
          Hi, I'm <br />
          <HighlightSpan>{greeting.title}</HighlightSpan>
        </Title>
        <SubtitleContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Subtitle theme={theme}>
            {greeting.subTitle.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </Subtitle>
        </SubtitleContainer>
        <SocialMedia theme={theme} />
      </TextContainer>
      <ImageContainer
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <FeelingProud theme={theme} />
      </ImageContainer>
    </GreetingContainer>
  );
};

export default Greeting;